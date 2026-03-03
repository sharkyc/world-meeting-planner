import React, { useState } from 'react';
import { useTimeStore, cityData } from '../store/timeStore';

export const AddCitySection = React.memo(() => {
  const { cities, addCity } = useTimeStore();
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const availableCities = React.useMemo(() => {
    const notAdded = cityData.filter(city => !cities.some(c => c.id === city.id));

    if (!searchQuery.trim()) {
      return notAdded;
    }

    const query = searchQuery.toLowerCase();
    return notAdded.filter(city =>
      city.name.toLowerCase().includes(query) ||
      city.nameEn.toLowerCase().includes(query) ||
      city.country.toLowerCase().includes(query)
    );
  }, [cities, searchQuery]);

  const handleAddCity = (city) => {
    addCity(city);
    setShowModal(false);
    setSearchQuery('');
  };

  const handleOpenModal = () => {
    setSearchQuery('');
    setShowModal(true);
  };

  return (
    <div className="add-city-section">
      <button
        className="add-city-btn"
        onClick={handleOpenModal}
      >
        <span>+</span>
        添加城市
      </button>

      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => {
            setShowModal(false);
            setSearchQuery('');
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>选择城市</h2>
              <button
                className="modal-close"
                onClick={() => {
                  setShowModal(false);
                  setSearchQuery('');
                }}
              >
                ×
              </button>
            </div>

            <div className="modal-search">
              <input
                type="text"
                className="search-input"
                placeholder="搜索城市（中文名/英文名/国家）..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <div className="search-result-count">
                  找到 {availableCities.length} 个城市
                </div>
              )}
            </div>

            <div className="city-list">
              {availableCities.length === 0 ? (
                <div className="no-results">
                  未找到匹配的城市
                </div>
              ) : (
                availableCities.map(city => (
                  <button
                    key={city.id}
                    className="city-list-item"
                    onClick={() => handleAddCity(city)}
                  >
                    <div className="city-list-name">{city.name}</div>
                    <div className="city-list-info">
                      {city.nameEn} · {city.country}
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

AddCitySection.displayName = 'AddCitySection';
