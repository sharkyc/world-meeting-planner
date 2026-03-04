import React, { useState } from 'react';
import { useTimeStore, encodeCitiesToUrl } from '../store/timeStore';
import { useLanguageStore } from '../store/languageStore';

export const ShareButton = React.memo(() => {
  const { cities } = useTimeStore();
  const { translate } = useLanguageStore();
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    try {
      // 生成分享链接
      const encoded = encodeCitiesToUrl(cities);
      const url = `${window.location.origin}${window.location.pathname}?c=${encoded}`;

      // 复制到剪贴板
      await navigator.clipboard.writeText(url);

      // 显示成功提示
      setCopied(true);
      setShowToast(true);

      // 2秒后隐藏提示
      setTimeout(() => {
        setCopied(false);
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert(translate('shareError'));
    }
  };

  return (
    <>
      <button
        className="share-btn"
        onClick={handleShare}
        disabled={cities.length === 0}
        title={cities.length === 0 ? translate('shareTooltip') : translate('share')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
          <polyline points="16 6 12 2 8 6"></polyline>
          <line x1="12" y1="2" x2="12" y2="15"></line>
        </svg>
        {translate('share')}
      </button>

      {showToast && (
        <div className={`toast toast-${copied ? 'success' : 'error'}`}>
          {copied ? translate('shareSuccess') : translate('shareError')}
        </div>
      )}
    </>
  );
});

ShareButton.displayName = 'ShareButton';
