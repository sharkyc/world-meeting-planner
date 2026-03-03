import React, { useMemo } from 'react';
import { useTimeStore, generateTimelineSegments, isWorkingHours, getTimeOfDay } from '../store/timeStore';

export const MeetingTimeVisualizer = React.memo(() => {
  const { cities, currentTime, getBestMeetingSlots, getTimeDifference } = useTimeStore();

  const bestSlots = useMemo(() => {
    return getBestMeetingSlots();
  }, [cities, currentTime, getBestMeetingSlots]);

  const allSegments = useMemo(() => {
    return cities.map(city => ({
      city,
      segments: generateTimelineSegments(city, currentTime, bestSlots)
    }));
  }, [cities, currentTime, bestSlots]);

  const timeLabels = useMemo(() => {
    const labels = [];
    for (let i = 0; i < 24; i += 3) {
      labels.push(i);
    }
    return labels;
  }, []);

  if (cities.length < 2) {
    return (
      <div className="meeting-visualizer">
        <div className="visualizer-header">
          <div>
            <div className="visualizer-title">会议时间规划</div>
            <div className="visualizer-subtitle">添加至少2个城市以查看最佳会议时间</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="meeting-visualizer">
      <div className="visualizer-header">
        <div>
          <div className="visualizer-title">会议时间规划</div>
          <div className="visualizer-subtitle">
            绿色表示工作时间（9:00-18:00），黑色边框表示所有城市重叠时间
          </div>
        </div>
      </div>

      <div className="timeline-container">
        {/* 时间轴标签 */}
        <div className="time-axis">
          {timeLabels.map(hour => (
            <div key={hour} className="time-axis-label">
              {hour.toString().padStart(2, '0')}:00
            </div>
          ))}
        </div>

        {/* 城市时间条 */}
        {allSegments.map(({ city, segments }) => (
          <div key={city.id} className="city-timeline">
            <div className="city-timeline-name">{city.name}</div>
            <div className="city-timeline-bar">
              {segments.map((segment, index) => {
                let segmentClass = 'timeline-segment';

                if (segment.isWorkingHours) {
                  segmentClass += ' working';
                } else {
                  segmentClass += ` ${segment.timeOfDay.toLowerCase()}`;
                }

                if (segment.isOverlap) {
                  segmentClass += ' overlap';
                }

                return (
                  <div
                    key={index}
                    className={segmentClass}
                    title={`${segment.hour}:00 - ${segment.hour + 1}:00 ${segment.isWorkingHours ? '(工作时间)' : '(休息时间)'}`}
                  />
                );
              })}
            </div>
          </div>
        ))}

        {/* 最佳会议时间指示 */}
        {bestSlots.length > 0 && (
          <div className="best-meeting-indicator">
            <div className="best-meeting-label">✓ 最佳会议时间（所有城市工作时间重叠）</div>
            <div className="best-meeting-slots">
              {bestSlots.map((slot, index) => {
                const start = slot.startHour.toString().padStart(2, '0');
                const end = slot.endHour.toString().padStart(2, '0');
                return (
                  <div key={index} className="meeting-slot">
                    {start}:00 - {end}:00
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

MeetingTimeVisualizer.displayName = 'MeetingTimeVisualizer';
