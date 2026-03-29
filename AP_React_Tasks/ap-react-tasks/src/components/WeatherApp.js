import React, { useState } from "react";

// Free API key from openweathermap - using a demo key
// User should replace with their own key from openweathermap.org
const API_KEY = "YOUR_API_KEY_HERE";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  function search() {
    if (!city.trim()) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.cod !== 200) {
          setError("City not found");
          setWeather(null);
        } else {
          setError("");
          setWeather(data);
        }
      })
      .catch(() => setError("Error fetching data"));
  }

  return (
    <div>
      <h2>Task 15 - Weather App</h2>
      <p style={{ color: "orange" }}>⚠️ Replace YOUR_API_KEY_HERE in WeatherApp.js with your OpenWeatherMap API key.</p>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={search}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <div>
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
