# 🌐 全球时间协作工具 - 产品设计文档

## 📋 信息架构 (Information Architecture)

### 页面层级结构
```
Global Time Tool
├── Header (本地时间展示)
├── City Comparison Cards (城市对比卡片)
├── Meeting Time Visualizer (会议时间可视化)
├── Quick Actions (快速操作)
└── Add City Modal (添加城市)
```

### 核心功能优先级
1. **P0** - 本地时间显示
2. **P0** - 城市对比卡片
3. **P0** - 会议时间重叠可视化
4. **P1** - 添加/移除城市
5. **P1** - 拖动排序
6. **P2** - 地图选择城市
7. **P2** - 搜索城市
8. **P2** - 导出会议时间

---

## 🏗 组件结构设计

### 组件树
```
App
├── GlobalHeader
│   ├── LocalTimeDisplay
│   └── QuickActions
├── CityCardsContainer
│   ├── CityCard (repeated)
│   │   ├── TimeDisplay
│   │   ├── TimeDifference
│   │   ├── WorkStatusIndicator
│   │   └── RemoveButton
│   └── DraggableWrapper
├── MeetingTimeVisualizer
│   ├── TimeAxis (24小时轴)
│   ├── CityTimeBar (城市时间条)
│   ├── WorkHoursOverlay (工作时间高亮)
│   ├── OverlapIndicator (重叠指示)
│   └── BestMeetingSlot (最佳会议时段)
├── AddCitySection
│   ├── QuickAddButton
│   ├── SearchInput
│   └── MapModal (optional)
└── MeetingTimeExporter
```

### 组件职责划分

#### 1. GlobalHeader (头部组件)
**职责**: 显示本地时间，提供全局操作
**Props**: `localTime`, `timezone`
**State**: 无
**Features**:
- 超大号本地时间显示
- 星期、日期、UTC偏移
- 秒级更新（可选）

#### 2. CityCard (城市卡片)
**职责**: 显示单个城市的时间信息
**Props**:
```typescript
interface CityCardProps {
  city: City;
  localTime: DateTime;
  onRemove: (id: string) => void;
  onDrag?: (id: string) => void;
}
```
**Features**:
- 城市名 + 国家
- 当前时间（大号）
- 与本地时差
- 工作时间状态（9-18点高亮）
- 时段指示（Morning/Afternoon/Night）
- 移除按钮

#### 3. MeetingTimeVisualizer (会议时间可视化) ⭐核心
**职责**: 可视化多个城市的工作时间重叠
**Props**:
```typescript
interface MeetingTimeVisualizerProps {
  cities: City[];
  localTime: DateTime;
  onSlotClick?: (slot: TimeSlot) => void;
}
```
**Features**:
- 24小时横向时间轴
- 每个城市独立时间条
- 工作时间（9-18）高亮显示
- 自动计算重叠区域
- 标记最佳会议时间
- 点击时间段选择会议时间

#### 4. AddCitySection (添加城市)
**职责**: 提供添加城市的入口
**Features**:
- 快速添加按钮
- 搜索框
- 常用城市快捷列表
- 地图选择（可选）

---

## 🎨 视觉系统设计

### 设计原则
1. **极简主义** - 去除所有装饰性元素
2. **高对比度** - 确保信息清晰可读
3. **语义化颜色** - 颜色传达信息，而非装饰
4. **大字体** - 时间显示优先级最高

### 颜色系统
```css
/* 基础色彩 */
--bg-primary: #ffffff;        /* 主背景 - 纯白 */
--bg-secondary: #f7f7f7;      /* 次级背景 - 浅灰 */
--bg-tertiary: #e5e5e5;       /* 三级背景 - 中灰 */

/* 文字色彩 */
--text-primary: #000000;      /* 主文字 - 纯黑 */
--text-secondary: #666666;    /* 次要文字 - 深灰 */
--text-tertiary: #999999;     /* 三级文字 - 中灰 */

/* 语义色彩 - 时间段 */
--time-morning: #a78bfa;      /* 清晨 - 紫色 */
--time-work: #22c55e;         /* 工作时间 - 绿色 */
--time-afternoon: #f59e0b;    /* 下午 - 橙色 */
--time-night: #1e3a8a;        /* 深夜 - 深蓝 */

/* 交互色彩 */
--accent-primary: #000000;    /* 主强调色 - 黑 */
--border-light: #e5e5e5;      /* 浅边框 */
--border-medium: #d4d4d4;     /* 中边框 */

/* 状态色彩 */
--status-working: #22c55e;    /* 工作中 - 绿 */
--status-offline: #94a3b8;    /* 休息中 - 灰 */
```

### 字体系统
```css
/* 时间字体 - 等宽字体 */
--font-time: 'SF Mono', 'Roboto Mono', 'Menlo', monospace;

/* UI字体 */
--font-ui: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* 字号层级 */
--text-xxl: 4rem;      /* 64px - 本地时间 */
--text-xl: 2.5rem;     /* 40px - 城市时间 */
--text-lg: 1.25rem;    /* 20px - 城市名 */
--text-md: 1rem;       /* 16px - 正文 */
--text-sm: 0.875rem;   /* 14px - 辅助信息 */
--text-xs: 0.75rem;    /* 12px - 标签 */
```

### 间距系统
```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
```

---

## 📐 页面布局设计

### 布局线框图
```
┌─────────────────────────────────────────────┐
│           HEADER: 本地时间显示               │
│  New York    14:32:45    Fri    UTC-4       │
├─────────────────────────────────────────────┤
│                                             │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐   │
│  │London│  │Tokyo │  │Paris │  │Sydney│   │
│  │19:32 │  │04:32 │  │20:32 │  │05:32 │   │
│  │ +5h  │  │ -10h │  │ +6h  │  │ -9h  │   │
│  │ Work │  │Night │  │ Work │  │Night │   │
│  └──────┘  └──────┘  └──────┘  └──────┘   │
│         横向滚动 + 拖动排序                   │
├─────────────────────────────────────────────┤
│                                             │
│  24小时时间轴重叠可视化                       │
│                                             │
│  London  ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░│
│  Tokyo   ░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓░░░░│
│  Paris   ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░│
│  Sydney  ░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓░░░░│
│           ─────────────────                │
│           最佳会议时间                       │
├─────────────────────────────────────────────┤
│          [+ 添加城市]                        │
└─────────────────────────────────────────────┘
```

### 响应式断点
```css
/* Mobile */
@media (max-width: 640px) {
  /* 单列布局 */
  /* 时间轴可横向滚动 */
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  /* 2列卡片布局 */
}

/* Desktop */
@media (min-width: 1025px) {
  /* 3-4列卡片布局 */
  /* 完整时间轴显示 */
}
```

---

## 🧮 核心算法设计

### 1. 时差计算算法
```typescript
function calculateTimeDifference(
  targetTimezone: string,
  localTimezone: string
): number {
  const targetOffset = getTimezoneOffset(targetTimezone);
  const localOffset = getTimezoneOffset(localTimezone);
  return (targetOffset - localOffset) / 60; // 返回小时差
}

function getTimezoneOffset(timezone: string): number {
  const now = DateTime.local().setZone(timezone);
  return now.offset;
}
```

### 2. 工作时间判断算法
```typescript
function isWorkingHours(dateTime: DateTime): boolean {
  const hour = dateTime.hour;
  return hour >= 9 && hour < 18;
}

function getTimeOfDay(dateTime: DateTime): 'Morning' | 'Afternoon' | 'Night' {
  const hour = dateTime.hour;
  if (hour >= 6 && hour < 12) return 'Morning';
  if (hour >= 12 && hour < 18) return 'Afternoon';
  return 'Night';
}
```

### 3. 最佳会议时间算法 ⭐核心
```typescript
interface TimeSlot {
  startHour: number;  // 0-23
  endHour: number;    // 1-24
  overlapCount: number;
  cities: string[];
}

function findBestMeetingSlots(
  cities: City[],
  date: DateTime
): TimeSlot[] {
  const slots: TimeSlot[] = [];

  // 遍历每个小时
  for (let hour = 0; hour < 24; hour++) {
    const workingCities: string[] = [];

    // 检查每个城市在该小时是否工作时间
    cities.forEach(city => {
      const cityTime = date.setZone(city.timezone).set({ hour });
      if (isWorkingHours(cityTime)) {
        workingCities.push(city.id);
      }
    });

    // 如果所有城市都在工作，标记为最佳时间
    if (workingCities.length === cities.length && cities.length > 1) {
      slots.push({
        startHour: hour,
        endHour: hour + 1,
        overlapCount: cities.length,
        cities: workingCities
      });
    }
  }

  return slots;
}

// 合并连续的时间段
function mergeConsecutiveSlots(slots: TimeSlot[]): TimeSlot[] {
  if (slots.length === 0) return [];

  const merged: TimeSlot[] = [slots[0]];

  for (let i = 1; i < slots.length; i++) {
    const last = merged[merged.length - 1];
    const current = slots[i];

    if (last.endHour === current.startHour) {
      last.endHour = current.endHour;
    } else {
      merged.push(current);
    }
  }

  return merged;
}
```

### 4. 时间轴渲染算法
```typescript
interface TimeBarSegment {
  hour: number;
  isWorkingHours: boolean;
  timeOfDay: 'Morning' | 'Afternoon' | 'Night';
  isOverlap: boolean;
}

function generateTimeBarSegments(
  city: City,
  date: DateTime,
  bestSlots: TimeSlot[]
): TimeBarSegment[] {
  const segments: TimeBarSegment[] = [];

  for (let hour = 0; hour < 24; hour++) {
    const cityTime = date.setZone(city.timezone).set({ hour });
    const isOverlap = bestSlots.some(slot =>
      hour >= slot.startHour && hour < slot.endHour
    );

    segments.push({
      hour,
      isWorkingHours: isWorkingHours(cityTime),
      timeOfDay: getTimeOfDay(cityTime),
      isOverlap
    });
  }

  return segments;
}
```

---

## ⚡ 性能优化方案

### 1. 时间更新优化
```typescript
// ❌ 错误：每个城市单独定时器
cities.forEach(city => {
  setInterval(() => updateTime(city), 1000);
});

// ✅ 正确：单一全局定时器
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(DateTime.local());
  }, 1000);

  return () => clearInterval(timer);
}, []);

// 所有城市组件使用 memo，仅在时间变化时重渲染
const CityCard = memo(({ city, currentTime }) => {
  const cityTime = currentTime.setZone(city.timezone);
  return <div>{cityTime.toFormat('HH:mm')}</div>;
});
```

### 2. 组件懒加载
```typescript
// 地图组件按需加载
const MapModal = lazy(() => import('./MapModal'));

function AddCitySection() {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <button onClick={() => setShowMap(true)}>添加城市</button>
      {showMap && (
        <Suspense fallback={<Loading />}>
          <MapModal onClose={() => setShowMap(false)} />
        </Suspense>
      )}
    </>
  );
}
```

### 3. 虚拟滚动优化（大量城市时）
```typescript
import { FixedSizeGrid } from 'react-window';

function CityCardsList({ cities }) {
  return (
    <FixedSizeGrid
      columnCount={Math.ceil(cities.length / 2)}
      columnWidth={300}
      height={600}
      rowCount={2}
      rowHeight={200}
      width={1200}
    >
      {({ columnIndex, rowIndex, style }) => {
        const city = cities[columnIndex + rowIndex * 2];
        return (
          <div style={style}>
            <CityCard city={city} />
          </div>
        );
      }}
    </FixedSizeGrid>
  );
}
```

### 4. 状态管理优化（Zustand）
```typescript
import create from 'zustand';

interface TimeStore {
  cities: City[];
  currentTime: DateTime;
  addCity: (city: City) => void;
  removeCity: (id: string) => void;
  reorderCities: (from: number, to: number) => void;
}

const useTimeStore = create<TimeStore>((set) => ({
  cities: initialCities,
  currentTime: DateTime.local(),

  addCity: (city) => set((state) => ({
    cities: [...state.cities, city]
  })),

  removeCity: (id) => set((state) => ({
    cities: state.cities.filter(c => c.id !== id)
  })),

  reorderCities: (from, to) => set((state) => {
    const newCities = [...state.cities];
    const [removed] = newCities.splice(from, 1);
    newCities.splice(to, 0, removed);
    return { cities: newCities };
  })
}));
```

---

## 🔌 可扩展性设计

### 1. 主题系统扩展
```typescript
interface Theme {
  colors: Record<string, string>;
  spacing: Record<string, number>;
  typography: Record<string, string>;
}

const themes: Record<string, Theme> = {
  light: { /* 当前主题 */ },
  dark: { /* 深色主题 */ },
  highContrast: { /* 高对比度主题 */ }
};
```

### 2. 多语言支持
```typescript
const translations = {
  zh: {
    'working_hours': '工作时间',
    'best_meeting_time': '最佳会议时间',
    'add_city': '添加城市'
  },
  en: {
    'working_hours': 'Working Hours',
    'best_meeting_time': 'Best Meeting Time',
    'add_city': 'Add City'
  }
};

function useTranslation(locale: string) {
  return (key: string) => translations[locale][key] || key;
}
```

### 3. 插件系统架构
```typescript
interface Plugin {
  name: string;
  component: React.ComponentType;
  toolbarIcon?: React.ReactNode;
}

function App() {
  const plugins: Plugin[] = [
    {
      name: 'export',
      component: ExportButton,
      toolbarIcon: <ExportIcon />
    },
    {
      name: 'calendar',
      component: CalendarSync,
      toolbarIcon: <CalendarIcon />
    }
  ];

  return (
    <div>
      {plugins.map(plugin => (
        <plugin.component key={plugin.name} />
      ))}
    </div>
  );
}
```

### 4. 数据持久化
```typescript
// localStorage 持久化
function persistCities(cities: City[]) {
  localStorage.setItem('saved-cities', JSON.stringify(cities));
}

function loadCities(): City[] {
  const saved = localStorage.getItem('saved-cities');
  return saved ? JSON.parse(saved) : defaultCities;
}

// IndexedDB 大量数据
// 导出/导入功能
// 云端同步（未来扩展）
```

---

## 📊 数据流设计

### 状态流向
```
User Action
    ↓
Zustand Store
    ↓
Component Props
    ↓
Render
    ↓
UI Update
```

### 单向数据流示例
```typescript
// 1. 用户点击添加城市
<button onClick={() => addCity(newCity)} />

// 2. Action 触发 Store 更新
const addCity = (city: City) => {
  useTimeStore.getState().addCity(city);
}

// 3. Store 更新触发重渲染
const cities = useTimeStore(state => state.cities);

// 4. UI 自动更新
return cities.map(city => <CityCard key={city.id} city={city} />);
```

---

## 🎯 迁移计划

### Phase 1: 核心重构（Week 1）
- [ ] 搭建新 UI 样式系统
- [ ] 实现本地时间显示组件
- [ ] 实现城市卡片组件
- [ ] 重构状态管理（Zustand）

### Phase 2: 时间轴可视化（Week 2）
- [ ] 实现基础时间轴
- [ ] 实现工作时间高亮
- [ ] 实现重叠检测算法
- [ ] 实现最佳会议时间标记

### Phase 3: 交互功能（Week 3）
- [ ] 实现拖拽排序
- [ ] 实现搜索添加城市
- [ ] 实现地图选择（可选）
- [ ] 实现移除城市

### Phase 4: 优化与扩展（Week 4）
- [ ] 性能优化
- [ ] 多语言支持
- [ ] 导出功能
- [ ] PWA 支持

---

## 📚 参考资料

### 竞品分析
- **World Time Buddy** - 时间轴参考
- **Every Time Zone** - 简洁UI参考
- **Savvy Time** - 会议规划参考

### 设计参考
- Linear (无装饰高对比)
- Notion (信息密度)
- Apple Human Interface Guidelines

---

**版本**: v1.0
**最后更新**: 2026-03-03
**设计师**: Claude (Product Designer + Frontend Architect)
