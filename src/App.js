import React, { useState } from 'react';
import { getWeather } from './api/weather';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    const data = await getWeather(city);
    if (data) {
      setWeather(data);
    } else {
      setError('City not found');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
