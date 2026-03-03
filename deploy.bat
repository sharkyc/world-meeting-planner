@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: 世界会议时间规划工具 - 快速部署脚本 (Windows)

echo.
echo 🌍 世界会议时间规划工具 - 部署脚本
echo ========================================
echo.

:: 检查 Node.js
where node >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误: 未安装 Node.js
    echo 请访问 https://nodejs.org/ 下载安装
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✓ Node.js 版本: %NODE_VERSION%
echo.

:: 安装依赖
echo 📦 安装依赖...
call npm install

if errorlevel 1 (
    echo ❌ 依赖安装失败
    pause
    exit /b 1
)

echo ✓ 依赖安装完成
echo.

:: 构建生产版本
echo 🔨 构建生产版本...
call npm run build

if errorlevel 1 (
    echo ❌ 构建失败
    pause
    exit /b 1
)

echo ✓ 构建完成
echo.

:: 显示构建产物信息
echo 📊 构建产物:
echo   - dist/ 目录已生成
echo.

:: 询问部署方式
echo 🚀 选择部署方式:
echo   1) 预览本地构建 (Preview)
echo   2) 退出
echo.
set /p choice="请选择 (1-2): "

if "%choice%"=="1" (
    echo.
    echo 🔍 启动预览服务器...
    echo 访问 http://localhost:4173
    echo.
    call npm run preview
) else if "%choice%"=="2" (
    echo.
    echo 👋 再见！
    pause
    exit /b 0
) else (
    echo.
    echo ❌ 无效选择
    pause
    exit /b 1
)

echo.
echo ✅ 完成！
echo.
echo 📚 更多部署方式请查看 DEPLOYMENT.md
pause
