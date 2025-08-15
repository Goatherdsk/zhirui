# 智睿商务车网站 Docker 部署指南

## 文件说明

### Dockerfile
- 使用阿里云镜像源进行构建
- 采用多阶段构建，优化镜像大小
- 生产环境使用 Nginx 提供静态文件服务

### nginx.conf
- 配置了 Gzip 压缩，提升传输效率
- 设置了静态资源缓存策略
- 支持 SPA 路由（try_files 配置）
- 添加了安全头部设置
- 预留了 API 代理配置

### docker-compose.yml
- 简化容器管理
- 配置了端口映射和网络
- 支持环境变量配置

### .dockerignore
- 排除不需要的文件，减少构建上下文
- 提升构建速度

## 使用方法

### 1. 快速部署
```bash
# 使用部署脚本
./deploy.sh
```

### 2. 手动部署
```bash
# 构建镜像
docker build -t zhirui-website .

# 运行容器
docker run -d -p 80:80 --name zhirui-website zhirui-website

# 或使用 docker-compose
docker-compose up -d
```

### 3. 开发环境
```bash
# 构建开发版本
docker-compose -f docker-compose.dev.yml up -d
```

## 访问地址
- 网站：http://localhost
- 如果配置了 HTTPS：https://localhost

## 常用命令

```bash
# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down

# 重启服务
docker-compose restart

# 查看容器状态
docker-compose ps

# 进入容器
docker exec -it zhirui-business-website sh
```

## 生产环境注意事项

1. **域名配置**：修改 nginx.conf 中的 server_name
2. **HTTPS**：添加 SSL 证书配置
3. **反向代理**：如果有后端 API，配置代理规则
4. **监控**：添加健康检查和监控配置
5. **备份**：定期备份重要数据

## 性能优化

- 启用了 Gzip 压缩
- 配置了静态资源缓存
- 使用了 Alpine Linux 基础镜像
- 多阶段构建减少镜像大小

## 故障排除

```bash
# 查看构建日志
docker-compose build --no-cache

# 查看容器日志
docker logs zhirui-business-website

# 检查网络连接
docker network ls
docker inspect zhirui_zhirui-network
```
