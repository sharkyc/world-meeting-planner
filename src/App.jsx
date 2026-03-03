import React, { useEffect, useMemo } from 'react';
import { DateTime } from 'luxon';
import { LocalTimeHeader } from './components/LocalTimeHeader';
import { CityCard } from './components/CityCard';
import { MeetingTimeVisualizer } from './components/MeetingTimeVisualizer';
import { AddCitySection } from './components/AddCitySection';
import { ShareButton } from './components/ShareButton';
import { useTimeStore, decodeCitiesFromUrl } from './store/timeStore';
import './styles/global.css';

function App() {
  const { cities, setCurrentTime, setCities } = useTimeStore();

  // 全局时间更新（单一定时器）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(DateTime.local());
    }, 1000);

    return () => clearInterval(timer);
  }, [setCurrentTime]);

  // 从 URL 参数加载城市
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encodedCities = params.get('c');

    if (encodedCities) {
      const urlCities = decodeCitiesFromUrl(encodedCities);
      if (urlCities.length > 0) {
        setCities(urlCities);
        // 清除 URL 参数，避免重复加载
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, [setCities]);

  // 保存城市到localStorage
  useEffect(() => {
    if (cities.length > 0) {
      localStorage.setItem('saved-cities', JSON.stringify(cities));
    }
  }, [cities]);

  const hasCities = cities.length > 0;

  return (
    <div className="app-container">
      {/* 顶部：本地时间大号显示和分享按钮 */}
      <div className="header-section">
        <LocalTimeHeader />
        <ShareButton />
      </div>

      {/* 中部：已选城市对比卡片 */}
      {hasCities && (
        <div className="cities-container">
          <div className="cities-scroll">
            {cities.map(city => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      )}

      {/* 下部：24小时时间轴重叠可视化 */}
      <MeetingTimeVisualizer />

      {/* 底部：添加城市按钮 */}
      <AddCitySection />
    </div>
  );
}

export default App;
