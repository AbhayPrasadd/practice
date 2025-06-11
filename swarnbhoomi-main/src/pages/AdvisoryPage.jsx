import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

const cropOptions = ["Wheat", "Rice", "Maize", "Paddy", "Sugarcane", "Soybean"];

const Advisory = () => {
  const [lat, setLat] = useState(() => parseFloat(localStorage.getItem("cachedLat")) || 27.1767);
  const [lng, setLng] = useState(() => parseFloat(localStorage.getItem("cachedLng")) || 78.0322);
  const [cropName, setCropName] = useState("Wheat");
  const [growthStage, setGrowthStage] = useState("Growth");
  const [language, setLanguage] = useState("Hindi");
  const [ndviData, setNdviData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [advisory, setAdvisory] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  const defaultWeather = [
    { date: "2025-06-12", maxTemp: 35, minTemp: 25, rainfall: 2 },
    { date: "2025-06-13", maxTemp: 34, minTemp: 24, rainfall: 1 },
    { date: "2025-06-14", maxTemp: 36, minTemp: 26, rainfall: 0 },
  ];

  const defaultNDVI = {
    ndvi_mean: 0.45,
    ndvi_min: 0.2,
    ndvi_max: 0.6,
    ndvi_breakdown: {
      poor_percent: 20,
      moderate_percent: 50,
      good_percent: 30,
    },
  };

  useEffect(() => {
    localStorage.setItem("cachedLat", lat.toString());
    localStorage.setItem("cachedLng", lng.toString());
  }, [lat, lng]);

  useEffect(() => {
    const fetchData = async () => {
      const cacheKey = `weather_ndvi_${lat}_${lng}`;
      const cached = localStorage.getItem(cacheKey);

      if (cached) {
        const parsed = JSON.parse(cached);
        setWeatherData(parsed.weather || defaultWeather);
        setNdviData(parsed.ndvi || defaultNDVI);
        return;
      }

      let formattedWeather = defaultWeather;
      let ndvi = defaultNDVI;

      try {
        const weatherRes = await axios.get("https://api.open-meteo.com/v1/forecast", {
          params: {
            latitude: lat,
            longitude: lng,
            daily: "temperature_2m_max,temperature_2m_min,precipitation_sum",
            forecast_days: 3,
            timezone: "auto",
          },
        });

        const daily = weatherRes.data.daily;
        formattedWeather = daily.time.map((date, i) => ({
          date,
          maxTemp: daily.temperature_2m_max[i],
          minTemp: daily.temperature_2m_min[i],
          rainfall: daily.precipitation_sum[i],
        }));
      } catch (err) {
        console.warn("⚠️ Weather fetch failed, using defaults.");
      }

      try {
        const ndviRes = await axios.get(`https://ndvi-api-server.onrender.com/ndvi?lat=${lat}&lng=${lng}`);
        ndvi = ndviRes.data;
      } catch (err) {
        console.warn("⚠️ NDVI fetch failed, using defaults.");
      }

      const combined = { weather: formattedWeather, ndvi };
      localStorage.setItem(cacheKey, JSON.stringify(combined));

      setWeatherData(formattedWeather);
      setNdviData(ndvi);
    };

    fetchData();
  }, [lat, lng]);

  const handleGetAdvice = async (topic) => {
    setLoading(true);
    setSelectedTopic(topic);
    setAdvisory("");

    try {
      const res = await axios.post("https://swarnabhumi-backend.onrender.com/api/getAdvice", {
        topic,
        cropName,
        growthStage,
        language,
        location: { lat, lng },
        weather: weatherData,
        ndvi: ndviData,
      });
      setAdvisory(res.data.advice);
    } catch (err) {
      console.error("❌ Error generating advice:", err);
      setAdvisory("⚠️ Failed to get advisory.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center mb-6">
        🌿 Smart Crop Advisory
      </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
  <input
    type="number"
    value={lat}
    onChange={(e) => setLat(parseFloat(e.target.value))}
    className="border p-2 rounded w-full"
    placeholder="Latitude"
  />
  <input
    type="number"
    value={lng}
    onChange={(e) => setLng(parseFloat(e.target.value))}
    className="border p-2 rounded w-full"
    placeholder="Longitude"
  />
  <button
    onClick={() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          },
          (err) => {
            alert("Location access denied.");
            console.error(err);
          }
        );
      } else {
        alert("Geolocation not supported.");
      }
    }}
    className="bg-green-700 text-white rounded p-2 hover:bg-green-800 transition w-full"
  >
    📍 Use My Location
  </button>
  <select
    value={cropName}
    onChange={(e) => setCropName(e.target.value)}
    className="border p-2 rounded w-full"
  >
    {["Wheat", "Rice", "Maize", "Paddy", "Sugarcane", "Soybean"].map((crop) => (
      <option key={crop} value={crop}>{crop}</option>
    ))}
  </select>
  <select
    value={growthStage}
    onChange={(e) => setGrowthStage(e.target.value)}
    className="border p-2 rounded w-full"
  >
    <option value="Sowing">Sowing</option>
    <option value="Growth">Growth</option>
    <option value="Harvesting">Harvesting</option>
  </select>
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
    className="border p-2 rounded w-full"
  >
    <option value="English">English</option>
    <option value="Hindi">Hindi</option>
  </select>
</div>



      {ndviData && (
        <div className="bg-green-50 p-4 rounded shadow mb-4">
          <h3 className="font-semibold text-green-800 mb-1">🌱 NDVI:</h3>
          <p>Mean: {ndviData.ndvi_mean}, Min: {ndviData.ndvi_min}, Max: {ndviData.ndvi_max}</p>
          {ndviData.ndvi_breakdown && (
            <p>
              Poor: {ndviData.ndvi_breakdown.poor_percent ?? 0}%,
              Moderate: {ndviData.ndvi_breakdown.moderate_percent ?? 0}%,
              Good: {ndviData.ndvi_breakdown.good_percent ?? 0}%
            </p>
          )}
        </div>
      )}

      {weatherData && (
        <div className="bg-blue-50 p-4 rounded shadow mb-4">
          <h3 className="font-semibold text-blue-800 mb-1">🌤️ 3-Day Forecast:</h3>
          {weatherData.map((day, i) => (
            <p key={i}>{day.date}: Max {day.maxTemp}°C, Min {day.minTemp}°C, Rain: {day.rainfall}mm</p>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
        {["Crop Health", "Weather Alert", "General Advisory"].map((topic) => (
          <button
            key={topic}
            onClick={() => handleGetAdvice(topic)}
            className={`p-2 rounded font-medium ${
              selectedTopic === topic ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-green-100"
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-600 rounded shadow">
        <strong className="block text-yellow-700 mb-1">📢 Advisory:</strong>
        {loading ? (
          <div className="flex items-center gap-2 text-yellow-800">
            <Loader2 className="animate-spin h-5 w-5" /> Generating...
          </div>
        ) : (
          <p className="text-yellow-800 whitespace-pre-line">{advisory}</p>
        )}
      </div>
    </div>
  );
};

export default Advisory;
