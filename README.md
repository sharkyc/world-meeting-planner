# 🌍 世界会议时间规划工具

<div align="center">
  <img src="public/logo.svg" alt="World Meeting Planner Logo" width="200" height="280">
</div>

[English](README_EN.md) | 简体中文

> **在线演示**: [https://sharkyc.github.io/world-meeting-planner/](https://sharkyc.github.io/world-meeting-planner/) 🚀

一个优雅的跨时区会议时间规划应用，帮助全球化团队轻松找到最佳会议时间，避免时区转换的烦恼。

**✨ 新功能**: 现已支持中英文双语切换！点击右上角语言按钮即可切换。

## ✨ 功能特性

### 核心功能

#### ⏰ 实时时区显示
- **本地时间大屏显示**：顶部醒目展示当前时间和时区
- **多城市时间卡片**：横向滚动查看所有已选城市的当前时间
- **UTC 偏移量**：自动计算并显示每个城市相对于本地时区的时差
- **秒级实时更新**：所有时间每秒自动刷新
- **工作状态标识**：绿色标记表示工作时间（9:00-18:00），灰色表示休息时间

#### 📊 会议时间可视化
- **24小时时间轴**：直观展示每个城市的一天24小时分布
- **颜色区分时段**：
  - 🟢 绿色：工作时间（9:00-18:00）
  - 🟣 紫色：早晨（6:00-12:00）
  - 🟠 橙色：下午（12:00-18:00）
  - 🔵 深蓝：夜晚（18:00-6:00）
- **重叠时间标识**：黑色边框标记所有城市工作时间重叠的黄金时段
- **最佳会议时间推荐**：自动计算并显示所有城市都适合的会议时间

#### 🔍 城市搜索与管理
- **250+ 世界城市**：覆盖全球六大洲主要城市
  - 中国：北京、上海、广州、深圳、成都、杭州、西安、武汉等
  - 亚洲：东京、首尔、新加坡、曼谷、吉隆坡、雅加达、马尼拉等
  - 欧洲：伦敦、巴黎、柏林、罗马、马德里、阿姆斯特丹等
  - 北美：纽约、洛杉矶、芝加哥、旧金山、多伦多、温哥华等
  - 南美：圣保罗、布宜诺斯艾利斯、利马等
  - 非洲：开罗、约翰内斯堡、拉各斯等
  - 大洋洲：悉尼、墨尔本、奥克兰等
- **智能搜索**：支持按中文名、英文名、国家名搜索
- **实时过滤**：输入即时显示匹配结果
- **添加/删除城市**：灵活管理需要对比的城市列表

#### 🔗 分享功能
- **一键分享**：点击分享按钮自动复制包含当前城市配置的链接
- **URL 编码**：城市列表编码在 URL 参数中，便于分享
- **自动恢复**：打开分享链接自动加载相同的城市配置
- **本地存储**：城市列表自动保存到浏览器，刷新页面不丢失

#### 🌐 国际化支持
- **双语界面**：支持中文和英文界面
- **自动检测**：根据浏览器语言自动选择界面语言
- **手动切换**：点击右上角语言按钮（🇨🇳/🇺🇸）随时切换
- **本地化存储**：语言偏好保存在浏览器中

#### 📅 日历视图
- **日期选择器**：灵活选择任意日期查看会议时间
  - 前一天/后一天快速导航
  - 快捷按钮：今天、明天、下周一
  - 日历选择器：精确选择未来任意日期
- **周视图推荐**：一键查看本周7天的最佳会议时间
  - 🥇 金牌推荐：4小时以上重叠时间（最佳）
  - 🥈 银牌推荐：2-4小时重叠时间（推荐）
  - 🥉 铜牌推荐：1-2小时重叠时间（可接受）
- **智能标记**：
  - 今天高亮显示
  - 周末灰色标记
  - 无重叠时间警告提示
- **未来规划**：轻松规划下周、下月甚至更远的会议时间

## 🛠️ 技术栈

### 前端框架
- **React 18** - 现代化 UI 框架
- **Vite 7** - 极速开发构建工具
- **Zustand** - 轻量级状态管理
- **i18n** - 自定义国际化方案

### 时间处理
- **Luxon** - 强大的日期时间处理库
- **IANA 时区数据库** - 精确的全球时区数据

### UI 设计
- **极简主义设计**：工具优先、高对比度、无装饰
- **响应式布局**：完美适配桌面端、平板、手机
- **CSS 自定义属性**：统一的主题变量系统

## 🎨 设计风格

### Logo 设计理念

Logo 采用四色渐变圆环设计，象征着全球四大时区的协作：

- 🟣 **紫色渐变**（早晨 6:00-12:00）：代表新的一天的开始
- 🟢 **绿色渐变**（工作时间 9:00-18:00）：象征高效协作的生产力
- 🟠 **橙色渐变**（下午 12:00-18:00）：体现温暖的午后时光
- 🔵 **蓝色渐变**（夜晚 18:00-6:00）：表示静谧的休息时间

中心简洁的时钟网格设计，结合顶部的绿色高光点，寓意"找到最佳会议时间"的核心功能。

### 极简主义原则
- **工具优先**：功能明确，不花哨
- **高对比度**：黑白分明，清晰易读
- **无装饰**：去掉一切不必要的元素

### 色彩系统
```css
/* 基础色彩 */
--bg-primary: #ffffff;        /* 主背景 */
--bg-secondary: #f7f7f7;      /* 次级背景 */
--bg-tertiary: #e5e5e5;       /* 三级背景 */

/* 文字色彩 */
--text-primary: #000000;      /* 主文字 */
--text-secondary: #666666;    /* 次级文字 */
--text-tertiary: #999999;     /* 三级文字 */

/* 语义色彩 */
--time-work: #22c55e;         /* 工作时间 */
--time-morning: #a78bfa;      /* 早晨 */
--time-afternoon: #f59e0b;    /* 下午 */
--time-night: #1e3a8a;        /* 夜晚 */
```

## 📦 安装与运行

### 环境要求
- Node.js >= 18.x
- npm >= 9.x

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
应用将在 `http://localhost:5173` 启动

### 构建生产版本
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

## 📂 项目结构

```
world-clock-map/
├── src/
│   ├── components/           # React 组件
│   │   ├── LocalTimeHeader.jsx       # 本地时间头部
│   │   ├── CityCard.jsx              # 城市时间卡片
│   │   ├── MeetingTimeVisualizer.jsx # 会议时间可视化
│   │   ├── AddCitySection.jsx        # 添加城市区域
│   │   ├── ShareButton.jsx           # 分享按钮
│   │   └── LanguageSwitcher.jsx      # 语言切换按钮
│   ├── store/
│   │   ├── timeStore.js      # 时间状态管理
│   │   └── languageStore.js  # 语言状态管理
│   ├── i18n/
│   │   └── translations.js   # 翻译文件（中英文）
│   ├── styles/
│   │   └── global.css        # 全局样式
│   ├── App.jsx               # 主应用组件
│   └── main.jsx              # 应用入口
├── public/                   # 静态资源
├── index.html                # HTML 模板
├── package.json              # 依赖配置
├── vite.config.js           # Vite 配置
├── README.md                # 中文文档
└── README_EN.md             # 英文文档
```

## 🎯 核心算法

### 时差计算
```javascript
// 计算两个时区之间的时差（小时）
const calculateTimeDifference = (targetTimezone, localTimezone) => {
  const now = DateTime.local();
  const targetOffset = DateTime.local().setZone(targetTimezone).offset;
  const localOffset = DateTime.local().setZone(localTimezone).offset;
  return (targetOffset - localOffset) / 60;
};
```

### 最佳会议时间查找
```javascript
// 找到所有城市工作时间重叠的时段
const findBestMeetingSlots = (cities, date) => {
  const slots = [];

  for (let hour = 0; hour < 24; hour++) {
    const localTimeAtHour = date.set({ hour });
    const workingCities = cities.filter(city => {
      const cityTime = localTimeAtHour.setZone(city.timezone);
      return isWorkingHours(cityTime);
    });

    // 所有城市都在工作时间
    if (workingCities.length === cities.length) {
      slots.push({ startHour: hour, endHour: hour + 1 });
    }
  }

  return mergeConsecutiveSlots(slots);
};
```

## 🚀 使用场景

### 1. 跨国团队会议
- 团队成员分布在美国、欧洲、亚洲
- 快速找到所有成员都在工作时间的重叠时段
- 避免安排在某个城市的深夜或凌晨

### 2. 客户会议规划
- 客户在不同时区
- 提前查看对方当前时间
- 选择合适的会议时间，体现专业

### 3. 活动全球直播
- 规划全球直播时间
- 确保主要市场的观众都能观看
- 避免重要市场的深夜时段

### 4. 远程协作
- 分布式团队的日常协作
- 了解同事的本地时间
- 选择合适的时间沟通

## 💡 使用技巧

1. **添加城市**：点击底部"添加城市"按钮，搜索并选择需要对比的城市
2. **删除城市**：点击城市卡片右上角的 × 按钮
3. **查看详情**：将鼠标悬停在时间轴上查看具体时段信息
4. **分享配置**：点击右上角"分享"按钮，复制链接给团队成员
5. **最佳时间**：关注底部绿色边框的时间段，那是所有城市都适合的黄金时段
6. **规划未来会议**：
   - 使用日期选择器选择未来某天
   - 查看周视图找出本周最佳会议日
   - 点击"今天"、"明天"、"下周一"快捷按钮快速导航

## 📱 响应式设计

- **桌面端**（>1024px）：完整功能，左右布局
- **平板端**（768-1024px）：适配触摸操作，上下布局
- **移动端**（<768px）：单列布局，优化小屏幕体验

## 🌐 浏览器支持

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

## 🔒 隐私与数据

- **纯前端应用**：所有数据在本地处理，不发送到服务器
- **本地存储**：城市列表保存在浏览器 localStorage
- **无追踪**：不使用任何分析工具或追踪代码

## 🛣️ 开发路线图

### v1.1（已完成 ✅）
- [x] 中英文双语界面支持
- [x] 浏览器语言自动检测
- [x] 语言偏好本地存储

### v1.2（已完成 ✅）
- [x] 日期选择器（单日/周视图）
- [x] 周视图会议时间推荐
- [x] 智能推荐等级系统（金银铜牌）
- [x] 未来日期会议规划

### v1.3（计划中）
- [ ] 支持拖拽调整城市顺序
- [ ] 添加会议时长设置（30分钟、1小时、2小时）
- [ ] 导出会议邀请（.ics 文件）
- [ ] 深色模式
- [ ] 自定义工作时间设置
- [ ] 常用城市收藏功能

### v2.0（远期规划）
- [ ] 更多语言支持（日语、韩语、法语等）
- [ ] PWA 支持，离线使用
- [ ] 桌面小组件（Windows/macOS）
- [ ] 浏览器扩展（快速查看其他网站的时间）
- [ ] API 接口（供其他应用集成）

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发流程
1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 代码规范
- 使用 ESLint 进行代码检查
- 遵循现有的代码风格
- 添加适当的注释
- 更新相关文档

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 👨‍💻 作者

Created with ❤️ by [sharkyc](https://github.com/sharkyc)

## 🌐 在线体验

**GitHub Pages**: [https://sharkyc.github.io/world-meeting-planner/](https://sharkyc.github.io/world-meeting-planner/)

立即体验跨时区会议规划的便利！

## 🙏 致谢

- [Luxon](https://moment.github.io/luxon/) - 强大的日期时间库
- [Zustand](https://github.com/pmndrs/zustand) - 简洁的状态管理
- [Vite](https://vitejs.dev/) - 快速的构建工具
- [React](https://react.dev/) - 用户界面库

---

**让全球协作更简单！** 🌍✈️

如有问题或建议，欢迎提交 [Issue](https://github.com/yourusername/world-clock-map/issues)
