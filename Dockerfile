# 使用阿里云 Node.js 镜像进行构建
FROM registry.cn-hangzhou.aliyuncs.com/acs/node:18-alpine AS build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json (如果存在)
COPY package*.json ./

# 设置 npm 镜像为阿里云镜像
RUN npm config set registry https://registry.npmmirror.com/

# 安装依赖
RUN npm ci --only=production

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# 使用阿里云 Nginx 镜像作为生产环境
FROM registry.cn-hangzhou.aliyuncs.com/acs/nginx:1.21-alpine

# 删除默认的 nginx 配置文件
RUN rm /etc/nginx/conf.d/default.conf

# 复制自定义的 nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/

# 从构建阶段复制构建好的应用到 nginx 的静态文件目录
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
