# 📤 GitHub Pages 部署指南

## 🎯 部署步骤

### 第一步：在 GitHub 上创建仓库

1. **访问 GitHub**
   - 打开 https://github.com
   - 登录你的账号

2. **创建新仓库**
   - 点击右上角的 `+` → `New repository`
   - 填写仓库信息：
     - **Repository name**: `world-meeting-planner`（或你喜欢的名字）
     - **Description**: `一个优雅的跨时区会议时间规划应用`
     - **Public**: ✅ 选择公开（免费用户必须选择公开才能使用 GitHub Pages）
   - **不要**勾选 "Add a README file"（我们已经有了）
   - 点击 **Create repository**

3. **复制仓库 URL**
   - 创建后，GitHub 会显示仓库地址
   - 复制 HTTPS URL（类似：`https://github.com/username/world-meeting-planner.git`）

### 第二步：推送代码到 GitHub

在项目目录运行以下命令（替换 `YOUR_USERNAME` 和 `REPO_NAME`）：

```bash
# 1. 重命名分支为 main
git branch -M main

# 2. 添加远程仓库（替换下面的 URL）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 3. 推送代码到 GitHub
git push -u origin main
```

**示例：**
```bash
git branch -M main
git remote add origin https://github.com/johndoe/world-meeting-planner.git
git push -u origin main
```

### 第三步：配置 GitHub Pages

#### 方法 1：使用 GitHub Actions（推荐，自动部署）✨

1. **进入仓库设置**
   - 在仓库页面，点击 **Settings**（⚙️）
   - 左侧菜单找到 **Pages**
   - 在 "Build and deployment" 下

2. **配置构建源**
   - **Source**: 选择 **GitHub Actions**
   - 点击 **Save**

3. **查看部署状态**
   - 点击顶部的 **Actions** 标签
   - 你会看到 "Deploy to GitHub Pages" 工作流正在运行
   - 等待约 1-2 分钟，工作流完成后显示绿色 ✓

4. **访问你的网站**
   - 部署成功后，访问：`https://YOUR_USERNAME.github.io/REPO_NAME/`
   - 例如：`https://johndoe.github.io/world-meeting-planner/`

#### 方法 2：手动部署（备用方案）

如果 GitHub Actions 不可用，可以使用手动方式：

1. **安装 gh-pages 分支工具**
   ```bash
   npm install -g gh-pages
   ```

2. **部署到 gh-pages 分支**
   ```bash
   npm run build
   gh-pages -d dist
   ```

3. **在 GitHub 设置中配置**
   - Settings → Pages
   - Source 选择 **Deploy from a branch**
   - Branch 选择 **gh-pages** 和 **/ (root)**
   - 点击 Save

### 第四步：验证部署

1. **等待部署完成**
   - GitHub Actions 通常需要 1-2 分钟
   - 在 Actions 页面查看进度

2. **访问网站**
   - 你的网站地址：`https://YOUR_USERNAME.github.io/REPO_NAME/`

3. **测试功能**
   - [ ] 页面正常加载
   - [ ] 可以添加城市
   - [ ] 时间显示正确
   - [ ] 分享功能正常

## 🔄 更新网站

每次代码更新后，只需推送代码：

```bash
git add .
git commit -m "Update feature"
git push
```

GitHub Actions 会自动重新部署！

## 🌐 自定义域名（可选）

### 1. 添加 CNAME 文件

在项目根目录创建 `CNAME` 文件：
```
your-domain.com
```

### 2. 配置 DNS

在你的域名提供商处添加：

| 类型 | 名称 | 值 |
|------|------|-----|
| CNAME | @ | YOUR_USERNAME.github.io |
| CNAME | www | YOUR_USERNAME.github.io |

### 3. 在 GitHub 启用自定义域名

- Settings → Pages
- 在 "Custom domain" 输入你的域名
- 点击 Save

## 📊 部署状态查看

### 查看部署日志

1. 进入仓库
2. 点击 **Actions** 标签
3. 点击最近的工作流
4. 查看详细日志

### 常见问题

**Q: 部署后页面空白？**
- 检查 Actions 日志，看是否有错误
- 确认构建成功（显示绿色 ✓）

**Q: 样式丢失？**
- 等待几分钟，CDN 可能需要时间
- 清除浏览器缓存

**Q: 404 错误？**
- 确认仓库是 Public
- 检查 Pages 设置是否启用
- 等待 DNS 传播（最多 24 小时）

## 🎉 完成！

你的世界会议时间规划工具已经部署到 GitHub Pages！

**分享你的网站：**
```
https://YOUR_USERNAME.github.io/world-meeting-planner/
```

## 📞 需要帮助？

- [GitHub Pages 文档](https://docs.github.com/pages)
- [GitHub Actions 文档](https://docs.github.com/actions)
- 提交 Issue 寻求帮助

---

**祝你部署顺利！** 🚀
