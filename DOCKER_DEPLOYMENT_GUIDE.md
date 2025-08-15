# 智睿商务车网站 Docker 部署完整指南

## 📋 项目概述

本项目是智睿商务车官方网站的 Docker 化部署方案，基于 Vite + React + Nginx 技术栈，提供完整的容器化部署解决方案。

## 🎯 特性

- ✅ **多阶段构建**: 优化镜像大小，构建阶段和运行阶段分离
- ✅ **国内优化**: 使用阿里云 npm 镜像源，提升构建速度
- ✅ **生产优化**: Nginx 配置针对 Vite 构建产物优化
- ✅ **安全配置**: 完整的安全头部设置，非 root 用户运行
- ✅ **健康检查**: 内置容器健康检查机制
- ✅ **环境分离**: 支持开发和生产环境不同配置
- ✅ **日志管理**: 完整的日志收集和管理
- ✅ **资源限制**: 内存和 CPU 使用限制

## 📁 文件结构

```
zhirui/
├── Dockerfile                 # Docker 镜像构建文件
├── docker-compose.yml         # 开发环境编排文件
├── docker-compose.prod.yml    # 生产环境编排文件
├── nginx.conf                 # Nginx 配置文件
├── vite.config.js             # Vite 构建配置
├── .env.example              # 环境变量示例
├── .dockerignore             # Docker 忽略文件
├── deploy.sh                 # 部署脚本
├── quick-start.sh           # 快速启动脚本
├── test-vite-docker.sh      # Docker 测试脚本
└── setup-docker-mirrors.sh  # 镜像源配置脚本
```

## 🚀 快速开始

### 1. 环境准备

```bash
# 确保 Docker 和 Docker Compose 已安装
docker --version
docker-compose --version
```

### 2. 配置环境变量

```bash
# 复制环境变量文件
cp .env.example .env

# 编辑配置（可选）
nano .env
```

### 3. 一键部署

```bash
# 开发环境
./deploy.sh

# 生产环境
./deploy.sh --prod
```

## 🔧 详细配置

### Docker 镜像加速（推荐）

```bash
# 配置 Docker 镜像源
./setup-docker-mirrors.sh
```

### 环境变量说明

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `HOST_PORT` | 80 | 主机端口 |
| `HTTPS_PORT` | 8443 | HTTPS 端口 |
| `NODE_ENV` | production | 环境模式 |
| `CONTAINER_NAME` | zhirui-business-website | 容器名称 |
| `TZ` | Asia/Shanghai | 时区设置 |
| `MAX_MEMORY` | 512m | 内存限制 |
| `MAX_CPU` | 1.0 | CPU 限制 |

### 端口配置

默认端口映射：
- **开发环境**: `8080:80`
- **生产环境**: `80:80`, `443:443`

自定义端口：
```bash
# 方法1: 环境变量
export HOST_PORT=9000
./deploy.sh

# 方法2: .env 文件
echo "HOST_PORT=9000" >> .env
./deploy.sh

# 方法3: 快速启动
./quick-start.sh 9000
```

## 📊 管理命令

### 基础操作

```bash
# 启动服务
docker-compose up -d

# 停止服务
docker-compose down

# 重启服务
docker-compose restart

# 查看状态
docker-compose ps

# 查看日志
docker-compose logs -f
```

### 生产环境

```bash
# 生产环境部署
./deploy.sh --prod

# 生产环境管理
docker-compose -f docker-compose.prod.yml up -d
docker-compose -f docker-compose.prod.yml logs -f
```

### 维护操作

```bash
# 清理未使用的镜像
docker image prune -f

# 清理未使用的容器
docker container prune -f

# 清理未使用的卷
docker volume prune -f

# 查看磁盘使用
docker system df
```

## 🧪 测试验证

### 自动化测试

```bash
# 完整测试流程
./test-vite-docker.sh

# 基础功能测试
./test-docker-basic.sh

# 镜像源测试
./test-docker-mirrors.sh
```

### 手动验证

```bash
# 检查服务健康
curl -I http://localhost:8080

# 检查响应时间
curl -o /dev/null -s -w "%{time_total}\n" http://localhost:8080

# 检查容器资源使用
docker stats zhirui-business-website
```

## 🔍 故障排除

### 常见问题

1. **端口被占用**
   ```bash
   # 查看端口占用
   lsof -i :8080
   
   # 更换端口
   export HOST_PORT=8081
   ./deploy.sh
   ```

2. **Docker daemon 未启动**
   ```bash
   # macOS
   open -a Docker
   
   # Linux
   sudo systemctl start docker
   ```

3. **构建失败**
   ```bash
   # 清理缓存重新构建
   docker-compose build --no-cache
   
   # 查看构建日志
   docker-compose logs
   ```

4. **网络问题**
   ```bash
   # 配置镜像源
   ./setup-docker-mirrors.sh
   
   # 检查网络连接
   ping registry.npmmirror.com
   ```

### 日志查看

```bash
# 实时日志
docker-compose logs -f

# 最近日志
docker-compose logs --tail=100

# 特定服务日志
docker-compose logs zhirui-website

# 容器内日志
docker exec -it zhirui-business-website cat /var/log/nginx/access.log
```

### 性能监控

```bash
# 容器资源使用
docker stats

# 系统资源使用
docker system df

# 容器详细信息
docker inspect zhirui-business-website
```

## 📈 性能优化

### 构建优化

- **多阶段构建**: 分离构建和运行环境
- **依赖缓存**: 优化 npm 依赖安装
- **资源压缩**: Gzip 压缩和资源优化
- **代码分割**: Vite 自动代码分割

### 运行时优化

- **静态资源缓存**: 长期缓存策略
- **健康检查**: 自动故障恢复
- **资源限制**: 防止资源滥用
- **安全配置**: 最小权限原则

## 🔒 安全最佳实践

1. **非 root 用户**: 容器以 nginx 用户运行
2. **安全头部**: 完整的 HTTP 安全头设置
3. **最小镜像**: 使用 Alpine Linux 减少攻击面
4. **资源限制**: 防止资源耗尽攻击
5. **日志监控**: 完整的访问和错误日志

## 🌐 生产部署

### SSL/HTTPS 配置

```bash
# 1. 准备 SSL 证书
mkdir ssl
cp your.crt ssl/
cp your.key ssl/

# 2. 更新 nginx.conf
# 添加 SSL 配置

# 3. 部署生产环境
./deploy.sh --prod
```

### 域名配置

```bash
# 更新 .env 文件
echo "DOMAIN=your-domain.com" >> .env

# 更新 nginx.conf
# 修改 server_name
```

### 监控配置

```bash
# 添加监控配置
echo "ENABLE_MONITORING=true" >> .env

# 部署带监控的版本
./deploy.sh --prod
```

## 🔄 CI/CD 集成

### GitHub Actions 示例

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        run: |
          ./setup-docker-mirrors.sh
          ./deploy.sh --prod
```

### 自动化部署

```bash
# 设置自动部署钩子
git config --local core.hooksPath .githooks/

# 添加部署钩子
echo '#!/bin/bash\n./deploy.sh --prod' > .githooks/post-receive
chmod +x .githooks/post-receive
```

## 📞 支持

如遇问题，请：

1. 查看本文档的故障排除部分
2. 运行 `./test-vite-docker.sh` 进行诊断
3. 查看 Docker 和应用日志
4. 提交 Issue 到项目仓库

---

**智睿商务车网站 Docker 部署方案** - 高效、安全、可扩展的容器化部署解决方案
