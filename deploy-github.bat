@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: GitHub Pages 快速部署脚本

echo.
echo ===============================================
echo 🚀 GitHub Pages 部署向导
echo ===============================================
echo.

:: 检查是否已初始化 Git
if not exist .git (
    echo ❌ 错误: 尚未初始化 Git 仓库
    echo.
    echo 请先运行以下命令：
    echo   git init
    echo   git add .
    echo   git commit -m "Initial commit"
    echo.
    pause
    exit /b 1
)

:: 检查是否已配置远程仓库
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo.
    echo 📝 步骤 1: 在 GitHub 上创建仓库
    echo ===============================================
    echo.
    echo 1. 访问 https://github.com/new
    echo 2. 创建新仓库（Repository name: world-meeting-planner）
    echo 3. 选择 Public（必须公开才能使用 GitHub Pages）
    echo 4. 不要勾选 "Add a README file"
    echo 5. 点击 "Create repository"
    echo.
    pause

    echo.
    set /p GITHUB_URL="📌 请输入你的仓库 URL (例如: https://github.com/username/world-meeting-planner.git): "

    if "!GITHUB_URL!"=="" (
        echo ❌ 未输入仓库 URL
        pause
        exit /b 1
    )

    echo.
    echo 🔗 添加远程仓库...
    git remote add origin !GITHUB_URL!

    if errorlevel 1 (
        echo ❌ 添加远程仓库失败
        pause
        exit /b 1
    )

    echo ✓ 远程仓库添加成功
) else (
    echo ✓ 已配置远程仓库
    git remote get-url origin
    echo.
)

:: 重命名分支为 main
git branch -M main

echo.
echo 📤 推送代码到 GitHub...
echo ===============================================
echo.
echo 正在推送代码...
git push -u origin main

if errorlevel 1 (
    echo.
    echo ❌ 推送失败！可能的原因：
    echo   1. 仓库 URL 不正确
    echo   2. 需要身份验证
    echo.
    echo 解决方案：
    echo   1. 检查仓库 URL 是否正确
    echo   2. 使用 GitHub Token 进行身份验证
    echo.
    pause
    exit /b 1
)

echo.
echo ✓ 代码推送成功！
echo.
echo.
echo 🎉 下一步：配置 GitHub Pages
echo ===============================================
echo.
echo 1. 访问你的 GitHub 仓库
echo 2. 点击 Settings (⚙️)
echo 3. 左侧菜单找到 "Pages"
echo 4. 在 "Build and deployment" 下：
echo    - Source 选择: GitHub Actions
echo    - 点击 Save
echo 5. 点击顶部的 "Actions" 查看部署进度
echo 6. 等待 1-2 分钟，工作流完成后访问：
echo.
echo    https://YOUR_USERNAME.github.io/world-meeting-planner/
echo.
echo 📚 详细说明请查看: GITHUB_PAGES_GUIDE.md
echo.
pause
