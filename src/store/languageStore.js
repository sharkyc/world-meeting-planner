import { create } from 'zustand';
import { t } from '../i18n/translations';

// 检测浏览器语言
export const detectBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;

  // 检查是否是中文（zh-CN, zh-TW, zh-HK 等）
  if (browserLang.startsWith('zh')) {
    return 'zh';
  }

  // 默认返回英文
  return 'en';
};

// 获取本地存储的语言设置
export const getStoredLanguage = () => {
  try {
    const stored = localStorage.getItem('app-language');
    if (stored && (stored === 'zh' || stored === 'en')) {
      return stored;
    }
  } catch (e) {
    console.error('Failed to get stored language:', e);
  }
  return null;
};

// 创建语言 store
export const useLanguageStore = create((set, get) => ({
  language: getStoredLanguage() || detectBrowserLanguage(),

  setLanguage: (lang) => {
    set({ language: lang });
    try {
      localStorage.setItem('app-language', lang);
    } catch (e) {
      console.error('Failed to save language:', e);
    }
  },

  // 翻译函数
  translate: (key, params = {}) => {
    const { language } = get();
    return t(key, language, params);
  },

  // 切换语言
  toggleLanguage: () => {
    const { language } = get();
    const newLang = language === 'zh' ? 'en' : 'zh';
    get().setLanguage(newLang);
    return newLang;
  }
}));
