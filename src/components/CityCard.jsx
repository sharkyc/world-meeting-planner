import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import { useTimeStore, isWorkingHours, getTimeOfDay, formatUTCOffset } from '../store/timeStore';

export const CityCard = React.memo(({ city }) => {
  const { currentTime, getTimeDifference, removeCity } = useTimeStore();

  const cityTime = useMemo(() => {
    return currentTime.setZone(city.timezone);
  }, [currentTime, city.timezone]);

  const timeString = useMemo(() => {
    return cityTime.toFormat('HH:mm');
  }, [cityTime]);

  const timeDiff = useMemo(() => {
    const diff = getTimeDifference(city.timezone);
    const sign = diff >= 0 ? '+' : '';
    return `${sign}${diff}h`;
  }, [city.timezone, getTimeDifference]);

  const working = useMemo(() => {
    return isWorkingHours(cityTime);
  }, [cityTime]);

  const timeOfDay = useMemo(() => {
    return getTimeOfDay(cityTime);
  }, [cityTime]);

  const handleRemove = () => {
    removeCity(city.id);
  };

  return (
    <div className="city-card">
      <div className="city-card-header">
        <div className="city-card-name">{city.name}</div>
        <button
          className="city-card-remove"
          onClick={handleRemove}
          aria-label={`移除${city.name}`}
        >
          ×
        </button>
      </div>

      <div className="city-card-time">{timeString}</div>

      <div className="city-card-diff">
        {city.country} · {timeDiff}
      </div>

      <div className={`city-card-status ${working ? 'working' : 'offline'}`}>
        {working ? '💼 工作时间' : '🌙 休息时间'}
        <span> · </span>
        {timeOfDay === 'Morning' && '☀️ 上午'}
        {timeOfDay === 'Afternoon' && '🌤️下午'}
        {timeOfDay === 'Night' && '🌙夜晚'}
      </div>
    </div>
  );
});

CityCard.displayName = 'CityCard';
