import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

function WeatherCard({ weather }) {
  if (!weather) return null;
  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow-xl w-80 text-center">
      <h2 className="text-xl font-bold">{weather.name}, {weather.sys.country}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />
      <p className="text-3xl font-bold">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize">{weather.weather[0].description}</p>
      <div className="flex justify-between mt-4">
        <p>💧 {weather.main.humidity}%</p>
        <p>🌬 {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (q) => {
    const query = q ?? city;
    if (!query) return setError("Please enter a city name");
    setError("");
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&units=metric&appid=${API_KEY}`
      );
      if (!res.ok) {
        if (res.status === 404) throw new Error("City not found");
        throw new Error("Failed to fetch weather");
      }
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🌤 Weather Dashboard</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKey}
          className="px-4 py-2 rounded-lg text-black"
        />
        <button
          onClick={() => fetchWeather()}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {error && <p className="text-red-200 mb-4">{error}</p>}

      {weather ? <WeatherCard weather={weather} /> : (
        <p className="text-white/90">Search for a city to see the weather.</p>
      )}
    </div>
  );
}
