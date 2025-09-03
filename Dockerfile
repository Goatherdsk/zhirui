# 第一阶段：构建阶段
FROM node:18-alpine AS build

# 设置工作目录
WORKDIR /app

# 设置 npm 镜像源
RUN npm config set registry https://registry.npmmirror.com/

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# 验证构建结果
RUN ls -la dist/ && test -f dist/index.html && echo "✅ 构建验证成功"

# 第二阶段：生产阶段
FROM nginx:alpine

# 安装 curl 用于健康检查
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && \
    apk add --no-cache curl

# 创建 nginx 用户可写的目录
RUN mkdir -p /tmp/nginx /var/cache/nginx/client_temp \
             /var/cache/nginx/proxy_temp \
             /var/cache/nginx/fastcgi_temp \
             /var/cache/nginx/uwsgi_temp \
             /var/cache/nginx/scgi_temp \
             /var/log/nginx && \
    chown -R nginx:nginx /tmp/nginx \
                         /var/cache/nginx \
                         /var/log/nginx && \
    chmod -R 755 /tmp/nginx \
                 /var/cache/nginx \
                 /var/log/nginx

# 创建自定义的 nginx 主配置文件
RUN cat > /etc/nginx/nginx.conf << 'EOF'
# 运行用户
worker_processes auto;

# PID 文件位置（nginx 用户可写）
pid /tmp/nginx/nginx.pid;

# 错误日志
error_log /var/log/nginx/error.log warn;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # 日志格式
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;

    # 基本设置
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    # 客户端请求缓冲区（使用 nginx 用户可写的目录）
    client_body_temp_path /tmp/nginx/client_temp;
    proxy_temp_path /tmp/nginx/proxy_temp;
    fastcgi_temp_path /tmp/nginx/fastcgi_temp;
    uwsgi_temp_path /tmp/nginx/uwsgi_temp;
    scgi_temp_path /tmp/nginx/scgi_temp;

    # 包含站点配置
    include /etc/nginx/conf.d/*.conf;
}
EOF

# 删除默认的 nginx 配置
RUN rm -f /etc/nginx/conf.d/default.conf

# 复制自定义 nginx 站点配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 从构建阶段复制构建产物
COPY --from=build /app/dist /usr/share/nginx/html

# 设置 html 目录权限
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

## 为了绑定 443 端口（低于 1024），保持 root；如需最小权限可使用 setcap 授权后再切换
# COPY --from=build /sbin/setcap /sbin/setcap  # 若需要 setcap
# 运行阶段暂不切换用户，以便监听 80/443

# 暴露端口
EXPOSE 80 443

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:80/health || exit 1

# 启动命令
CMD ["nginx", "-g", "daemon off;"]