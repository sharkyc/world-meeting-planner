import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import { useTimeStore } from '../store/timeStore';
import { useLanguageStore } from '../store/languageStore';

export const WeekView = React.memo(() => {
  const { cities, getWeeklyBestSlots } = useTimeStore();
  const { translate, language } = useLanguageStore();

  // 获取一周的最佳时段数据
  const weeklySlots = useMemo(() => {
    return getWeeklyBestSlots();
  }, [cities, getWeeklyBestSlots]);

  // 日期格式化
  const formatDate = (date) => {
    if (language === 'zh') {
      return date.toFormat('MM月dd日');
    }
    return date.toFormat('MMM d');
  };

  // 星期几
  const getWeekday = (date) => {
    const weekdays = {
      zh: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    };
    return weekdays[language][date.weekday - 1] || date.weekdayShort;
  };

  // 计算推荐等级
  const getRecommendationLevel = (dayData) => {
    const totalSlots = dayData.slots.reduce((sum, slot) => {
      return sum + (slot.endHour - slot.startHour);
    }, 0);

    if (totalSlots >= 4) return 'gold'; // 4小时以上 - 金牌
    if (totalSlots >= 2) return 'silver'; // 2-4小时 - 银牌
    if (totalSlots >= 1) return 'bronze'; // 1-2小时 - 铜牌
    return null; // 不足1小时 - 不推荐
  };

  // 判断是否是今天
  const isToday = (date) => {
    return date.hasSame(DateTime.local(), 'day');
  };

  // 判断是否是周末
  const isWeekend = (date) => {
    return date.weekday >= 6;
  };

  if (cities.length < 2) {
    return (
      <div className="week-view-placeholder">
        <p>{translate('addAtLeastTwoCities')}</p>
      </div>
    );
  }

  return (
    <div className="week-view">
      <div className="week-view-header">
        <h3 className="week-view-title">
          {translate('weeklyBestTime')}
        </h3>
        <p className="week-view-subtitle">
          {translate('weeklyBestTimeDesc')}
        </p>
      </div>

      <div className="week-grid">
        {weeklySlots.map((dayData, index) => {
          const level = getRecommendationLevel(dayData);
          const today = isToday(dayData.date);
          const weekend = isWeekend(dayData.date);

          return (
            <div
              key={index}
              className={`week-day ${today ? 'today' : ''} ${weekend ? 'weekend' : ''}`}
            >
              <div className="day-header">
                <div className="day-date">
                  {getWeekday(dayData.date)} · {formatDate(dayData.date)}
                </div>
                {level && (
                  <div className={`recommendation-badge ${level}`}>
                    {level === 'gold' && '🥇'}
                    {level === 'silver' && '🥈'}
                    {level === 'bronze' && '🥉'}
                  </div>
                )}
                {today && <span className="today-badge-small">{translate('today')}</span>}
              </div>

              {dayData.slots.length > 0 ? (
                <div className="day-slots">
                  {dayData.slots.map((slot, slotIndex) => {
                    const start = slot.startHour.toString().padStart(2, '0');
                    const end = slot.endHour.toString().padStart(2, '0');
                    return (
                      <div key={slotIndex} className="day-slot">
                        <span className="slot-time">
                          {start}:00 - {end}:00
                        </span>
                        <span className="slot-duration">
                          {slot.endHour - slot.startHour} {translate('hours')}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="day-no-slots">
                  <span className="no-slots-icon">⚠️</span>
                  <span className="no-slots-text">
                    {translate('noOverlap')}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="week-legend">
        <div className="legend-item">
          <span className="legend-icon">🥇</span>
          <span className="legend-text">{translate('goldRecommendation')}</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon">🥈</span>
          <span className="legend-text">{translate('silverRecommendation')}</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon">🥉</span>
          <span className="legend-text">{translate('bronzeRecommendation')}</span>
        </div>
      </div>
    </div>
  );
});

WeekView.displayName = 'WeekView';
