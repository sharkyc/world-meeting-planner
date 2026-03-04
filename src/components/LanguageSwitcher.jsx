import React from 'react';
import { useLanguageStore } from '../store/languageStore';

export const LanguageSwitcher = React.memo(() => {
  const { language, setLanguage, translate } = useLanguageStore();

  const handleSwitch = () => {
    const newLang = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLang);
  };

  return (
    <button
      className="language-switcher"
      onClick={handleSwitch}
      title={language === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      <span className="lang-icon">
        {language === 'zh' ? '🇨🇳' : '🇺🇸'}
      </span>
      <span className="lang-text">
        {language === 'zh' ? 'EN' : '中文'}
      </span>
    </button>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';
