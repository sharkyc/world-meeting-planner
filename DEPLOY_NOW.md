# 🚀 立即部署到 GitHub Pages

## 快速部署步骤（5分钟完成）

### 第一步：创建 GitHub 仓库（2分钟）

1. **访问** https://github.com/new
2. **填写**：
   - Repository name: `world-meeting-planner`
   - Description: `跨时区会议时间规划工具`
   - ✅ Public（必须公开）
   - ❌ 不要勾选 "Add a README file"
3. **点击** "Create repository"
4. **复制**仓库 URL（类似：`https://github.com/你的用户名/world-meeting-planner.git`）

### 第二步：推送代码（1分钟）

在项目目录运行：

```bash
# 1. 添加远程仓库（替换成你的 URL）
git remote add origin https://github.com/你的用户名/world-meeting-planner.git

# 2. 推送代码
git push -u origin main
```

### 第三步：启用 GitHub Pages（2分钟）

1. **打开**你的 GitHub 仓库
2. **点击** Settings (⚙️) 菜单
3. **左侧**找到 "Pages"
4. **Source** 选择 "GitHub Actions"
5. **点击** Save

### 第四步：等待部署（1-2分钟）

1. **点击**仓库顶部的 "Actions" 标签
2. **等待**工作流完成（显示绿色 ✓）
3. **访问**你的网站：
   ```
   https://你的用户名.github.io/world-meeting-planner/
   ```

## ✅ 完成！

你的世界会议时间规划工具现在在线了！

## 🔄 后续更新

每次修改代码后，只需：

```bash
git add .
git commit -m "更新说明"
git push
```

GitHub Actions 会自动重新部署！

## ❓ 遇到问题？

### 推送失败？
```bash
# 检查远程仓库
git remote -v

# 重新添加
git remote remove origin
git remote add origin <你的仓库URL>
git push -u origin main
```

### 找不到 Pages 设置？
- 确保仓库是 Public（公开）
- 刷新页面重试

### 部署失败？
- 查看 Actions 日志了解详细错误
- 确保 `.github/workflows/deploy.yml` 文件存在

## 📚 更多文档

- `GITHUB_PAGES_GUIDE.md` - 详细部署指南
- `DEPLOYMENT.md` - 其他部署方式（Vercel、Netlify 等）
- `QUICKSTART.md` - 快速开始指南

---

**祝你部署成功！** 🎉
