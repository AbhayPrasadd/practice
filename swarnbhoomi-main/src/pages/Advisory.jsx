import React, { useState, useEffect } from "react";
import axios from "axios";

const AdvisoryPage = () => {
  const [lat, setLat] = useState(27.1767);
  const [lng, setLng] = useState(78.0322);
  const [ndviData, setNdviData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [advisory, setAdvisory] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  // Fetch NDVI & Weather data on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ndviRes = await axios.get(`http://localhost:5000/ndvi?lat=${lat}&lng=${lng}`);
        setNdviData(ndviRes.data);

        const weatherRes = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,precipitation_sum&timezone=auto`);
        setWeatherData(weatherRes.data.daily);
      } catch (err) {
        console.error("Error fetching NDVI or weather data", err);
      }
    };
    fetchData();
  }, [lat, lng]);

  const handleAdvice = async (topic) => {
    setLoading(true);
    setSelectedTopic(topic);
    setAdvisory("");

    try {
      const res = await axios.post("http://localhost:5000/getAdvice", {
        topic,
        ndvi: ndviData,
        weather: weatherData,
        location: { lat, lng },
      });
      setAdvisory(res.data.advice);
    } catch (err) {
      setAdvisory("❌ Failed to fetch advisory.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4">🌿 Smart Crop Advisory</h2>

      {/* Display Weather */}
      {weatherData && (
        <div className="bg-blue-50 p-4 rounded shadow">
          <p><strong>📍 Location:</strong> {lat}, {lng}</p>
          <p><strong>🌤️ Next Day Forecast:</strong> Temp: {weatherData.temperature_2m_max[0]}°C, Rain: {weatherData.precipitation_sum[0]} mm</p>
        </div>
      )}

      {/* Display NDVI */}
      {ndviData && (
        <div className="bg-green-50 p-4 rounded shadow">
          <p><strong>🌿 NDVI:</strong> Mean: {ndviData.ndvi_mean}, Min: {ndviData.ndvi_min}, Max: {ndviData.ndvi_max}</p>
          <p><strong>🌱 Status:</strong> Poor: {ndviData.ndvi_breakdown.poor_percent}%, Moderate: {ndviData.ndvi_breakdown.moderate_percent}%, Good: {ndviData.ndvi_breakdown.good_percent}%</p>
        </div>
      )}

      {/* Advice Buttons */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {["Crop Health", "Irrigation", "Fertilizer", "Pest"].map((topic) => (
          <button
            key={topic}
            onClick={() => handleAdvice(topic)}
            className={`p-3 rounded font-medium ${selectedTopic === topic ? "bg-green-700 text-white" : "bg-gray-200 hover:bg-green-100"}`}
          >
            {topic} Advice
          </button>
        ))}
      </div>

      {/* Advisory Output */}
      <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded shadow">
        <strong>🧠 Advisory:</strong>
        <p>{loading ? "Generating advice..." : advisory}</p>
      </div>
    </div>
  );
};

export default AdvisoryPage;
