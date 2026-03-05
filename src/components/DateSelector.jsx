import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import { useTimeStore } from '../store/timeStore';
import { useLanguageStore } from '../store/languageStore';

export const DateSelector = React.memo(() => {
  const { selectedDate, goToToday, goToNextDay, goToPrevDay, setSelectedDate } = useTimeStore();
  const { translate, language } = useLanguageStore();

  // 格式化日期显示
  const formattedDate = useMemo(() => {
    if (language === 'zh') {
      return selectedDate.toFormat('yyyy年MM月dd日');
    }
    return selectedDate.toFormat('MMMM d, yyyy');
  }, [selectedDate, language]);

  // 获取星期几
  const weekday = useMemo(() => {
    const weekdays = {
      zh: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    };
    return weekdays[language][selectedDate.weekday - 1] || selectedDate.weekdayLong;
  }, [selectedDate, language]);

  // 判断是否是今天
  const isToday = useMemo(() => {
    return selectedDate.hasSame(DateTime.local(), 'day');
  }, [selectedDate]);

  // 快捷按钮处理
  const handleGoToToday = () => {
    goToToday();
  };

  const handleGoToTomorrow = () => {
    setSelectedDate(DateTime.local().plus({ days: 1 }));
  };

  const handleGoToNextWeek = () => {
    // 下周一
    const nextMonday = DateTime.local().plus({ weeks: 1 }).startOf('week');
    setSelectedDate(nextMonday);
  };

  // 日期选择器改变
  const handleDateChange = (e) => {
    const newDate = DateTime.fromISO(e.target.value);
    if (newDate.isValid) {
      setSelectedDate(newDate);
    }
  };

  // ISO 格式用于 date input
  const isoDate = selectedDate.toISODate();

  return (
    <div className="date-selector">
      <div className="date-display">
        <button
          className="date-nav-btn"
          onClick={goToPrevDay}
          aria-label={translate('prevDay')}
        >
          ‹
        </button>

        <div className="date-info">
          <div className="date-text">{formattedDate}</div>
          <div className="weekday-text">{weekday}</div>
          {isToday && (
            <span className="today-badge">
              {translate('today')}
            </span>
          )}
        </div>

        <button
          className="date-nav-btn"
          onClick={goToNextDay}
          aria-label={translate('nextDay')}
        >
          ›
        </button>
      </div>

      <div className="date-shortcuts">
        <button
          className="shortcut-btn"
          onClick={handleGoToToday}
        >
          {translate('today')}
        </button>
        <button
          className="shortcut-btn"
          onClick={handleGoToTomorrow}
        >
          {translate('tomorrow')}
        </button>
        <button
          className="shortcut-btn"
          onClick={handleGoToNextWeek}
        >
          {translate('nextMonday')}
        </button>
      </div>

      <div className="date-picker-container">
        <input
          type="date"
          className="date-picker"
          value={isoDate}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
});

DateSelector.displayName = 'DateSelector';
