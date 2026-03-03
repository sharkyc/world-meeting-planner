import React, { useState } from 'react';
import { useTimeStore, encodeCitiesToUrl } from '../store/timeStore';

export const ShareButton = React.memo(() => {
  const { cities } = useTimeStore();
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
      alert('复制失败，请手动复制链接');
    }
  };

  return (
    <>
      <button
        className="share-btn"
        onClick={handleShare}
        disabled={cities.length === 0}
        title={cities.length === 0 ? '请先添加城市' : '复制分享链接'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
          <polyline points="16 6 12 2 8 6"></polyline>
          <line x1="12" y1="2" x2="12" y2="15"></line>
        </svg>
        分享
      </button>

      {showToast && (
        <div className={`toast toast-${copied ? 'success' : 'error'}`}>
          {copied ? '✓ 链接已复制到剪贴板' : '复制失败'}
        </div>
      )}
    </>
  );
});

ShareButton.displayName = 'ShareButton';
