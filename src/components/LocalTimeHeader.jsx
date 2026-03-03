import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import { useTimeStore } from '../store/timeStore';

export const LocalTimeHeader = React.memo(() => {
  const { currentTime, localTimezone } = useTimeStore();

  const localTime = useMemo(() => {
    return currentTime.setZone(localTimezone);
  }, [currentTime, localTimezone]);

  const timeString = useMemo(() => {
    return localTime.toFormat('HH:mm:ss');
  }, [localTime]);

  const dateString = useMemo(() => {
    return localTime.toFormat('cccc, MMMM d');
  }, [localTime]);

  const utcOffset = useMemo(() => {
    return localTime.toFormat('ZZ');
  }, [localTime]);

  const cityDisplay = useMemo(() => {
    const timezoneName = localTimezone.split('/')[1] || localTimezone;
    return timezoneName.replace(/_/g, ' ');
  }, [localTimezone]);

  return (
    <header className="local-time-header">
      <div className="local-time-display">{timeString}</div>
      <div className="local-time-info">
        <span className="local-time-city">{cityDisplay}</span>
        <span>{dateString}</span>
        <span className="local-time-utc">UTC{utcOffset}</span>
      </div>
    </header>
  );
});

LocalTimeHeader.displayName = 'LocalTimeHeader';
