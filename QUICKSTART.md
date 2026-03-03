# 🚀 快速开始

## 方式 1: 本地运行

```bash
# 1. 克隆或下载项目
git clone <your-repo-url>
cd world-clock-map

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 打开浏览器访问
# http://localhost:5173
```

## 方式 2: 快速部署

### 使用部署脚本（推荐）

**Windows:**
```bash
deploy.bat
```

**Linux/Mac:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### 手动部署

```bash
# 1. 构建
npm run build

# 2. 预览
npm run preview

# 访问 http://localhost:4173
```

## 方式 3: 一键部署到云平台

### Vercel（最简单）

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 部署
vercel
```

访问 [vercel.com](https://vercel.com) 获取更多信息。

### Netlify

```bash
# 1. 安装 Netlify CLI
npm i -g netlify-cli

# 2. 部署
netlify deploy --prod --dir=dist
```

访问 [netlify.com](https://www.netlify.com) 获取更多信息。

### Surge.sh

```bash
# 1. 安装 Surge
npm i -g surge

# 2. 部署
npm run build
surge dist
```

### GitHub Pages

1. 推送代码到 GitHub
2. 在仓库设置中启用 GitHub Pages
3. 选择 GitHub Actions 作为构建源
4. 自动部署完成

## 方式 4: Docker 部署

```bash
# 1. 构建镜像
docker build -t world-meeting-planner .

# 2. 运行容器
docker run -d -p 80:80 world-meeting-planner

# 3. 访问
# http://localhost
```

## 📦 构建产物说明

构建完成后，`dist` 目录包含：

```
dist/
├── index.html              # 入口 HTML (0.46 KB)
├── vite.svg                # 图标资源
└── assets/
    ├── index-xxx.css      # 样式文件 (26 KB, gzip: 8.66 KB)
    └── index-xxx.js       # JavaScript (298 KB, gzip: 93.84 KB)
```

**总大小：** 约 325 KB（gzip 压缩后约 102 KB）

## 🎯 下一步

- 查看 [README.md](README.md) 了解完整功能
- 查看 [DEPLOYMENT.md](DEPLOYMENT.md) 了解详细部署指南
- 开始添加城市，规划会议时间！

## ❓ 常见问题

**Q: 构建失败？**
```bash
# 清理缓存重试
rm -rf node_modules dist
npm install
npm run build
```

**Q: 端口被占用？**
```bash
# 使用其他端口
npm run dev -- --port 3000
```

**Q: 样式不正确？**
```bash
# 确保构建后再预览
npm run build
npm run preview
```

## 📞 需要帮助？

- 提交 [Issue](https://github.com/yourusername/world-meeting-planner/issues)
- 查看 [文档](DEPLOYMENT.md)
- 联系作者

---

**祝你使用愉快！** 🎉
