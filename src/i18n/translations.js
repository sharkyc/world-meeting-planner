// 语言翻译文件

export const translations = {
  zh: {
    // 页面标题
    appTitle: '世界会议时间规划工具',

    // 本地时间头部
    localTime: '本地时间',

    // 城市卡片
    removeCity: '删除',
    working: '工作中',
    offline: '离线',

    // 会议时间可视化
    meetingPlanner: '会议时间规划',
    meetingPlannerSubtitle: '添加至少2个城市以查看最佳会议时间',
    meetingPlannerDesc: '绿色表示工作时间（9:00-18:00），黑色边框表示所有城市重叠时间',
    timeAxis: {
      morning: '早晨',
      afternoon: '下午',
      night: '夜晚',
      working: '工作'
    },
    bestMeetingTime: '✓ 最佳会议时间（所有城市工作时间重叠）',

    // 添加城市
    addCity: '添加城市',
    selectCity: '选择城市',
    searchPlaceholder: '搜索城市（中文名/英文名/国家）...',
    searchResultCount: '找到 {{count}} 个城市',
    noResults: '未找到匹配的城市',
    noCitiesYet: '暂无城市，请添加城市',

    // 分享按钮
    share: '分享',
    shareTooltip: '请先添加城市',
    shareSuccess: '✓ 链接已复制到剪贴板',
    shareError: '复制失败',

    // 时间单位
    hours: '小时',
    minutes: '分钟',

    // 状态
    loading: '加载中...',
    saving: '保存中...',
    saved: '已保存'
  },

  en: {
    // Page title
    appTitle: 'World Meeting Planner',

    // Local time header
    localTime: 'Local Time',

    // City card
    removeCity: 'Remove',
    working: 'Working',
    offline: 'Offline',

    // Meeting time visualizer
    meetingPlanner: 'Meeting Time Planner',
    meetingPlannerSubtitle: 'Add at least 2 cities to see best meeting times',
    meetingPlannerDesc: 'Green indicates working hours (9:00-18:00), black border shows overlap for all cities',
    timeAxis: {
      morning: 'Morning',
      afternoon: 'Afternoon',
      night: 'Night',
      working: 'Working'
    },
    bestMeetingTime: '✓ Best Meeting Time (All cities in working hours)',

    // Add city
    addCity: 'Add City',
    selectCity: 'Select City',
    searchPlaceholder: 'Search cities (Chinese/English/Country)...',
    searchResultCount: 'Found {{count}} cities',
    noResults: 'No matching cities found',
    noCitiesYet: 'No cities yet, please add cities',

    // Share button
    share: 'Share',
    shareTooltip: 'Add cities first',
    shareSuccess: '✓ Link copied to clipboard',
    shareError: 'Copy failed',

    // Time units
    hours: 'hours',
    minutes: 'minutes',

    // Status
    loading: 'Loading...',
    saving: 'Saving...',
    saved: 'Saved'
  }
};

// 获取翻译函数
export const t = (key, lang = 'zh', params = {}) => {
  const keys = key.split('.');
  let value = translations[lang];

  for (const k of keys) {
    value = value?.[k];
    if (!value) return key;
  }

  // 替换参数 {{param}}
  if (typeof value === 'string' && params) {
    Object.keys(params).forEach(param => {
      value = value.replace(`{{${param}}}`, params[param]);
    });
  }

  return value;
};
