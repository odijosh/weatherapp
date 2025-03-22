import { useState } from "react";
import React from "react";
import "./weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    city: "London",
    temperature: 18,
    condition: "Cloudy",
    wind_speed: 5,
  });

  

  return (
    <div className="main">
    <div className="weather-app">
      <div className="weather-card">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Enter City..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="search-button" >
            Search
          </button>
        </div>

        <div className="weather-info">
          <h2>{weatherData.city}</h2>
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="condition">{weatherData.condition}</p>
          <p className="wind-speed">Wind Speed: {weatherData.wind_speed} m/s</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Weather;
