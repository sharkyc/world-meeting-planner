# 🚀 部署指南

本文档介绍如何将世界会议时间规划工具部署到各种平台。

## 📦 部署前准备

### 1. 构建生产版本

```bash
npm run build
```

构建完成后，`dist` 目录包含所有需要部署的文件：
- `index.html` - 入口文件
- `assets/` - CSS、JS 和其他静态资源

## 🌐 部署平台

### 方式 1: GitHub Pages（推荐，免费）

#### 自动部署（推荐）

1. **将代码推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **在 GitHub 上启用 Pages**
   - 进入仓库的 **Settings** → **Pages**
   - Source 选择 **GitHub Actions**
   - 项目已包含 GitHub Actions 配置，会自动部署

3. **访问网站**
   - 部署完成后访问：`https://<username>.github.io/<repo-name>/`

#### 手动部署

1. **构建项目**
   ```bash
   npm run build
   ```

2. **推送到 gh-pages 分支**
   ```bash
   git checkout -b gh-pages
   git add -f dist
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. **在 GitHub 设置中启用 gh-pages 分支**

---

### 方式 2: Vercel（推荐，免费）

#### 通过 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **部署**
   ```bash
   vercel
   ```
   按提示操作即可，项目已包含 `vercel.json` 配置

#### 通过 Vercel 网站

1. 访问 [vercel.com](https://vercel.com)
2. 导入你的 Git 仓库
3. Vercel 会自动检测配置并部署
4. 几秒钟后获得一个 `.vercel.app` 域名

---

### 方式 3: Netlify（推荐，免费）

#### 通过 Netlify CLI

1. **安装 Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **部署**
   ```bash
   netlify deploy --prod
   ```
   项目已包含 `netlify.toml` 配置

#### 通过 Netlify 网站

1. 访问 [netlify.com](https://www.netlify.com)
2. 点击 "Add new site" → "Deploy manually"
3. 拖拽 `dist` 文件夹到上传区域
4. 几秒钟后获得一个 `.netlify.app` 域名

#### 持续部署

1. 将 Git 仓库连接到 Netlify
2. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
3. 每次推送代码，Netlify 自动重新部署

---

### 方式 4: Cloudflare Pages（免费）

1. 访问 [dash.cloudflare.com](https://dash.cloudflare.com)
2. 进入 **Pages** → **Create a project**
3. 连接 Git 仓库或上传 `dist` 文件夹
4. 配置构建设置：
   - Build command: `npm run build`
   - Build output directory: `dist`
5. 部署完成

---

### 方式 5: 传统 Web 服务器

#### Nginx

1. **构建项目**
   ```bash
   npm run build
   ```

2. **上传文件**
   ```bash
   scp -r dist/* user@server:/var/www/html/
   ```

3. **配置 Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

#### Apache

1. **构建项目**
   ```bash
   npm run build
   ```

2. **上传文件到服务器**

3. **创建 .htaccess**（在 dist 目录）
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

---

### 方式 6: Docker

1. **创建 Dockerfile**（已包含在项目中）
   ```dockerfile
   FROM node:18-alpine as builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=builder /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **构建镜像**
   ```bash
   docker build -t world-clock:latest .
   ```

3. **运行容器**
   ```bash
   docker run -d -p 80:80 world-clock:latest
   ```

---

### 方式 7: 静态文件托管服务

#### Surge.sh

```bash
npm install -g surge
npm run build
surge dist
```

#### Firebase Hosting

1. **安装 Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **初始化**
   ```bash
   firebase init hosting
   ```

3. **配置 firebase.json**
   ```json
   {
     "hosting": {
       "public": "dist",
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **部署**
   ```bash
   firebase deploy
   ```

---

## 🔧 环境变量（可选）

如果需要配置环境变量，创建 `.env.production`：

```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=World Meeting Planner
```

构建时会自动加载。

---

## 📊 性能优化建议

### 1. 启用 Gzip 压缩

服务器配置启用 gzip：
- Nginx: `gzip on;`
- Apache: `mod_deflate`
- Vercel/Netlify: 自动启用

### 2. 配置 CDN

将 `dist/assets` 目录上传到 CDN：
- AWS CloudFront
- Cloudflare CDN
- 阿里云 CDN

### 3. 浏览器缓存

配置静态资源缓存：
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

---

## ✅ 部署验证

部署完成后，检查：

1. **基本功能**
   - [ ] 页面正常加载
   - [ ] 可以添加城市
   - [ ] 时间正确显示
   - [ ] 分享功能正常

2. **性能**
   - [ ] 首屏加载时间 < 3s
   - [ ] Lighthouse 分数 > 90

3. **兼容性**
   - [ ] Chrome 浏览器
   - [ ] Firefox 浏览器
   - [ ] Safari 浏览器
   - [ ] 移动端浏览器

---

## 🌐 自定义域名

### GitHub Pages

1. 在仓库根目录添加 `CNAME` 文件：
   ```
   your-domain.com
   ```

2. 在域名提供商处添加 DNS 记录：
   - 类型：CNAME
   - 名称：@
   - 值：`<username>.github.io`

### Vercel/Netlify

在平台设置中添加自定义域名，按提示配置 DNS 即可。

---

## 🔄 自动更新部署

### GitHub Actions（推荐）

项目已包含 GitHub Actions 配置，每次推送到 `main` 分支自动部署。

### Webhook 集成

在 Vercel/Netlify 中配置 Git webhook，推送代码自动触发部署。

---

## 📞 常见问题

### Q: 部署后页面空白？
A: 检查服务器是否配置了 SPA 路由（所有路由返回 index.html）

### Q: 刷新页面 404？
A: 配置服务器 rewrite 规则，将所有请求指向 index.html

### Q: 静态资源 404？
A: 检查 base 路径配置，在 `vite.config.js` 中设置正确的 `base`

### Q: 构建失败？
A: 检查 Node.js 版本，建议使用 18.x 或更高版本

---

## 📚 更多资源

- [Vite 部署指南](https://vitejs.dev/guide/build.html)
- [GitHub Pages 文档](https://docs.github.com/pages)
- [Vercel 文档](https://vercel.com/docs)
- [Netlify 文档](https://docs.netlify.com)

---

**祝你部署顺利！** 🎉
