import { useState } from "react";
import React from "react";
import axios from "axios";
import "./weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false)

  const fetchWeather = async () => {
    if (!city.trim()){
      alert("Please enter a city")
      return;
    } 
    try {
      setLoading(true)
      const response = await axios.get("https://weather-update-p3ap.onrender.com/weather", {
        params: { city }
      });
      console.log(response)
      setWeatherData(response.data.data)
      setCity("")
      setLoading(false)
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data.");
      setCity("")
      setLoading(false)
    }
  };

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
            <button className="search-button" onClick={fetchWeather}>
             {loading ? "Searching" : "Search" }
            </button>
          </div>

          {weatherData && (
            <div className="weather-info">
              <h2>City: {weatherData.city}</h2>
              <p className="temperature">Temperature: {weatherData.temperature}°C</p>
              <p className="condition">Condition: {weatherData.condition}</p>
              <p className="humidity">Humidity: {weatherData.humidity}%</p>
              <p className="wind-speed">Wind Speed: {weatherData.wind_Speed} m/s</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
