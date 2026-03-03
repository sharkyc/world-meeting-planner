#!/bin/bash

# 世界会议时间规划工具 - 快速部署脚本

echo "🌍 世界会议时间规划工具 - 部署脚本"
echo "========================================"
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未安装 Node.js"
    echo "请访问 https://nodejs.org/ 下载安装"
    exit 1
fi

echo "✓ Node.js 版本: $(node -v)"
echo ""

# 安装依赖
echo "📦 安装依赖..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ 依赖安装失败"
    exit 1
fi

echo "✓ 依赖安装完成"
echo ""

# 构建生产版本
echo "🔨 构建生产版本..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

echo "✓ 构建完成"
echo ""

# 显示构建产物信息
echo "📊 构建产物:"
echo "  - dist/index.html: $(cat dist/index.html | wc -c) bytes"
echo "  - dist/assets/: $(du -sh dist/assets | cut -f1)"
echo ""

# 询问部署方式
echo "🚀 选择部署方式:"
echo "  1) 预览本地构建 (Preview)"
echo "  2) 部署到 Surge (surge.sh)"
echo "  3) 部署到 Netlify (需要登录)"
echo "  4) 构建 Docker 镜像"
echo "  5) 退出"
echo ""
read -p "请选择 (1-5): " choice

case $choice in
  1)
    echo ""
    echo "🔍 启动预览服务器..."
    npm run preview
    ;;
  2)
    echo ""
    echo "📤 部署到 Surge..."
    if ! command -v surge &> /dev/null; then
      echo "安装 Surge CLI..."
      npm install -g surge
    fi
    surge dist
    ;;
  3)
    echo ""
    echo "📤 部署到 Netlify..."
    if ! command -v netlify &> /dev/null; then
      echo "安装 Netlify CLI..."
      npm install -g netlify-cli
    fi
    netlify deploy --prod --dir=dist
    ;;
  4)
    echo ""
    echo "🐳 构建 Docker 镜像..."
    if ! command -v docker &> /dev/null; then
      echo "❌ 错误: 未安装 Docker"
      echo "请访问 https://docker.com/ 下载安装"
      exit 1
    fi
    docker build -t world-clock:latest .
    echo "✓ Docker 镜像构建完成"
    echo ""
    echo "运行容器:"
    echo "  docker run -d -p 80:80 world-clock:latest"
    ;;
  5)
    echo ""
    echo "👋 再见！"
    exit 0
    ;;
  *)
    echo ""
    echo "❌ 无效选择"
    exit 1
    ;;
esac

echo ""
echo "✅ 部署完成！"
echo ""
echo "📚 更多部署方式请查看 DEPLOYMENT.md"
