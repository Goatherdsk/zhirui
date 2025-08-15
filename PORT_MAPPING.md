# Docker 端口映射配置说明

## 当前配置

### docker-compose.yml 端口映射
```yaml
ports:
  - "8080:80"   # 主机端口8080映射到容器内部端口80
```

这意味着：
- 容器内部的 Nginx 服务运行在端口 80
- 通过主机的端口 8080 可以访问网站
- 访问地址：`http://localhost:8080`

## 端口映射选项

### 1. 使用 8080 端口（推荐，当前配置）
```yaml
ports:
  - "8080:80"
```
- 访问地址：`http://localhost:8080`
- 优点：避免与其他服务冲突，无需管理员权限

### 2. 使用标准 80 端口
```yaml
ports:
  - "80:80"
```
- 访问地址：`http://localhost`
- 注意：可能需要管理员权限，可能与其他服务冲突

### 3. 使用自定义端口
```yaml
ports:
  - "3000:80"   # 使用端口 3000
  - "9000:80"   # 使用端口 9000
```

### 4. HTTPS 端口映射
```yaml
ports:
  - "8080:80"    # HTTP
  - "8443:443"   # HTTPS
```

## 修改端口映射

### 方法1：编辑 docker-compose.yml
直接修改 `docker-compose.yml` 文件中的 ports 配置

### 方法2：使用环境变量
在 docker-compose.yml 中使用环境变量：
```yaml
ports:
  - "${HOST_PORT:-8080}:80"
```

然后创建 `.env` 文件：
```
HOST_PORT=9000
```

### 方法3：命令行指定端口
```bash
# 使用不同端口运行
docker run -d -p 9000:80 --name zhirui-website zhirui-website

# 或者覆盖 docker-compose 的端口
docker-compose run --service-ports -e HOST_PORT=9000 zhirui-website
```

## 常用端口配置

### 开发环境
```yaml
ports:
  - "3000:80"   # 与前端开发服务器端口一致
```

### 测试环境
```yaml
ports:
  - "8080:80"   # 标准测试端口
```

### 生产环境
```yaml
ports:
  - "80:80"     # HTTP
  - "443:443"   # HTTPS
```

## 端口冲突解决

如果遇到端口冲突：

1. **查看端口占用**：
   ```bash
   # macOS/Linux
   lsof -i :8080
   
   # Windows
   netstat -ano | findstr :8080
   ```

2. **选择其他端口**：
   修改 docker-compose.yml 中的主机端口号

3. **停止冲突服务**：
   ```bash
   # 停止占用端口的进程
   kill -9 <进程ID>
   ```

## 验证端口映射

```bash
# 启动服务
docker-compose up -d

# 检查端口映射
docker-compose ps

# 测试连接
curl http://localhost:8080

# 查看容器日志
docker-compose logs zhirui-website
```
