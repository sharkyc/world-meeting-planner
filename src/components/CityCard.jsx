import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import { useTimeStore, isWorkingHours, getTimeOfDay, formatUTCOffset } from '../store/timeStore';
import { useLanguageStore } from '../store/languageStore';

export const CityCard = React.memo(({ city }) => {
  const { currentTime, getTimeDifference, removeCity } = useTimeStore();
  const { translate } = useLanguageStore();

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

  const timeLabels = useMemo(() => {
    return {
      morning: translate('timeAxis.morning'),
      afternoon: translate('timeAxis.afternoon'),
      night: translate('timeAxis.night'),
      working: translate('timeAxis.working')
    };
  }, [translate]);

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
          aria-label={`${translate('removeCity')} ${city.name}`}
        >
          ×
        </button>
      </div>

      <div className="city-card-time">{timeString}</div>

      <div className="city-card-diff">
        {city.country} · {timeDiff}
      </div>

      <div className={`city-card-status ${working ? 'working' : 'offline'}`}>
        {working ? `💼 ${translate('working')}` : `🌙 ${translate('offline')}`}
        <span> · </span>
        {timeOfDay === 'Morning' && `☀️ ${timeLabels.morning}`}
        {timeOfDay === 'Afternoon' && `🌤️${timeLabels.afternoon}`}
        {timeOfDay === 'Night' && `🌙${timeLabels.night}`}
      </div>
    </div>
  );
});

CityCard.displayName = 'CityCard';
