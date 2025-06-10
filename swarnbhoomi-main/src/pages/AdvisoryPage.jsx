import React, { useState, useEffect } from "react";
import axios from "axios";

const Advisory = () => {
  const [lat, setLat] = useState(() => {
    const saved = localStorage.getItem("cachedLat");
    return saved ? parseFloat(saved) : 27.1767;
  });

  const [lng, setLng] = useState(() => {
    const saved = localStorage.getItem("cachedLng");
    return saved ? parseFloat(saved) : 78.0322;
  });

  const [cropName, setCropName] = useState("Wheat");
  const [growthStage, setGrowthStage] = useState("Growth");
  const [language, setLanguage] = useState("English");
  const [ndviData, setNdviData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [advisory, setAdvisory] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    localStorage.setItem("cachedLat", String(lat));
    localStorage.setItem("cachedLng", String(lng));
  }, [lat, lng]);

  useEffect(() => {
    const fetchData = async () => {
      const cacheKey = `weather_ndvi_${lat}_${lng}`;
      const cached = localStorage.getItem(cacheKey);

      if (cached) {
        const parsed = JSON.parse(cached);
        setWeatherData(parsed.weather);
        setNdviData(parsed.ndvi);
        return;
      }

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
        const formattedWeather = daily.time.map((date, i) => ({
          date,
          maxTemp: daily.temperature_2m_max[i],
          minTemp: daily.temperature_2m_min[i],
          rainfall: daily.precipitation_sum[i],
        }));

        const ndviRes = await axios.get(`http://127.0.0.1:5000/ndvi?lat=${lat}&lng=${lng}`);

        const combined = {
          weather: formattedWeather,
          ndvi: ndviRes.data,
        };

        localStorage.setItem(cacheKey, JSON.stringify(combined));

        setWeatherData(formattedWeather);
        setNdviData(ndviRes.data);
      } catch (err) {
        console.error("❌ Error fetching data:", err);
      }
    };

    fetchData();
  }, [lat, lng]);

  const handleGetAdvice = async (topic) => {
    setLoading(true);
    setSelectedTopic(topic);
    setAdvisory("");

    try {
      const res = await axios.post("http://localhost:5001/getAdvice", {
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
    <div className="max-w-4xl mx-auto p-4 space-y-6 text-sm sm:text-base">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-green-800">🌿 Smart Crop Advisory</h2>

      {/* Input Fields */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
  <input
    type="number"
    value={lat}
    onChange={(e) => setLat(parseFloat(e.target.value))}
    className="border p-2 rounded"
    placeholder="Latitude"
  />
  <input
    type="number"
    value={lng}
    onChange={(e) => setLng(parseFloat(e.target.value))}
    className="border p-2 rounded"
    placeholder="Longitude"
  />
  <input
    type="text"
    value={cropName}
    onChange={(e) => setCropName(e.target.value)}
    className="border p-2 rounded"
    placeholder="Crop Name"
  />
  <select
    value={growthStage}
    onChange={(e) => setGrowthStage(e.target.value)}
    className="border p-2 rounded"
  >
    <option value="Sowing">Sowing</option>
    <option value="Growth">Growth</option>
    <option value="Harvesting">Harvesting</option>
  </select>
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
    className="border p-2 rounded"
  >
    <option value="English">English</option>
    <option value="Hindi">Hindi</option>
  </select>
</div>


      {/* NDVI Info */}
      {ndviData && (
        <div className="bg-green-50 p-3 rounded shadow">
          <h3 className="font-semibold">🌱 NDVI:</h3>
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

      {/* Weather Info */}
      {weatherData && (
        <div className="bg-blue-50 p-3 rounded shadow">
          <h3 className="font-semibold">🌤️ 3-Day Forecast:</h3>
          {weatherData.map((day, i) => (
            <p key={i}>{day.date}: Max {day.maxTemp}°C, Min {day.minTemp}°C, Rain: {day.rainfall}mm</p>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {["Crop Health", "Weather Alert", "General Advisory"].map((topic) => (
          <button
            key={topic}
            onClick={() => handleGetAdvice(topic)}
            className={`p-2 rounded font-medium text-sm ${selectedTopic === topic ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-green-100"}`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Advisory Display */}
      <div className="p-3 bg-yellow-50 border-l-4 border-yellow-600 rounded shadow">
        <strong>📢 Advisory:</strong>
        <p className="mt-1">{loading ? "⏳ Generating..." : advisory}</p>
      </div>
    </div>
  );
};

export default Advisory;
