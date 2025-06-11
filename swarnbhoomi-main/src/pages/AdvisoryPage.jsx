import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader2, Download, Volume2 } from "lucide-react";
import DialogFlowMessenger from "../components/DialogFlowMessenger";

const cropOptions = ["Wheat", "Rice", "Maize", "Paddy", "Sugarcane", "Soybean"];

const Advisory = () => {
  const [latitude, setLatitude] = useState(() => parseFloat(localStorage.getItem("cachedLat")) || 21.8294671);
  const [longitude, setLongitude] = useState(() => parseFloat(localStorage.getItem("cachedLng")) || 86.2584791);
  const [crop, setCrop] = useState("Wheat");
  const [stage, setStage] = useState("Growth");
  const [language, setLanguage] = useState("Hindi");
  const [ndviData, setNdviData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [advisoryText, setAdvisoryText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  const defaultWeather = [
    { date: "2025-06-12", maxTemp: 35, minTemp: 25, rainfall: 2 },
    { date: "2025-06-13", maxTemp: 34, minTemp: 24, rainfall: 1 },
    { date: "2025-06-14", maxTemp: 36, minTemp: 26, rainfall: 0 }
  ];

  const defaultNDVI = {
    ndvi_mean: 0.45,
    ndvi_min: 0.2,
    ndvi_max: 0.6,
    ndvi_breakdown: {
      poor_percent: 20,
      moderate_percent: 50,
      good_percent: 30
    }
  };

  useEffect(() => {
    localStorage.setItem("cachedLat", latitude.toString());
    localStorage.setItem("cachedLng", longitude.toString());
  }, [latitude, longitude]);

  useEffect(() => {
    const fetchWeatherAndNDVI = async () => {
      const cacheKey = `weather_ndvi_${latitude}_${longitude}`;
      const cached = localStorage.getItem(cacheKey);

      if (cached) {
        const parsed = JSON.parse(cached);
        setWeatherData(parsed.weather || defaultWeather);
        setNdviData(parsed.ndvi || defaultNDVI);
        return;
      }

      let weather = defaultWeather;
      let ndvi = defaultNDVI;

      try {
        const weatherRes = await axios.get("https://api.open-meteo.com/v1/forecast", {
          params: {
            latitude,
            longitude,
            daily: "temperature_2m_max,temperature_2m_min,precipitation_sum",
            forecast_days: 3,
            timezone: "auto"
          }
        });
        const daily = weatherRes.data.daily;
        weather = daily.time.map((date, i) => ({
          date,
          maxTemp: daily.temperature_2m_max[i],
          minTemp: daily.temperature_2m_min[i],
          rainfall: daily.precipitation_sum[i]
        }));
      } catch (error) {
        console.warn("⚠️ Weather API failed. Using default data.", error.message);
      }

      try {
        const ndviRes = await axios.get("https://ndvi-api-server.onrender.com/ndvi", {
          params: { lat: latitude, lng: longitude }
        });
        const response = ndviRes.data;
        console.log("✅ NDVI response:", response);

        if (
          response &&
          typeof response.ndvi_mean === "number" &&
          typeof response.ndvi_min === "number" &&
          typeof response.ndvi_max === "number" &&
          response.ndvi_breakdown
        ) {
          ndvi = response;
        } else {
          console.warn("⚠️ NDVI response incomplete. Using defaults.");
        }
      } catch (error) {
        console.warn("⚠️ NDVI API failed. Using default data.", error.message);
      }

      localStorage.setItem(cacheKey, JSON.stringify({ weather, ndvi }));
      setWeatherData(weather);
      setNdviData(ndvi);
    };

    fetchWeatherAndNDVI();
  }, [latitude, longitude]);

  const fetchAdvisory = async (topic) => {
    setIsLoading(true);
    setSelectedTopic(topic);
    setAdvisoryText("");

    try {
      const payload = {
        topic,
        cropName: crop,
        growthStage: stage,
        language,
        location: { lat: latitude, lng: longitude },
        weather: weatherData,
        ndvi: ndviData
      };

      console.log("🛰️ Sending payload:", payload);

      const res = await axios.post("https://swarnabhumi-backend.onrender.com/api/getAdvice", payload);
      setAdvisoryText(res.data.advice || "No advisory generated.");
    } catch (error) {
      console.error("❌ Advisory generation failed:", error);
      setAdvisoryText("⚠️ Failed to get advisory.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center mb-4">Smart Crop Advisory 🌿</h2>

      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mb-4">
        <input value={latitude} onChange={(e) => setLatitude(parseFloat(e.target.value))} className="border p-2 rounded w-full text-sm" placeholder="Latitude" type="number" />
        <input value={longitude} onChange={(e) => setLongitude(parseFloat(e.target.value))} className="border p-2 rounded w-full text-sm" placeholder="Longitude" type="number" />
        <button onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              setLatitude(pos.coords.latitude);
              setLongitude(pos.coords.longitude);
            },
            (err) => alert("Location access denied")
          );
        }} className="bg-green-700 text-white rounded p-2 hover:bg-green-800 col-span-2 sm:col-span-2 text-sm">Add Farm Location</button>
        <select value={crop} onChange={(e) => setCrop(e.target.value)} className="border p-2 rounded w-full text-sm">
          {cropOptions.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={stage} onChange={(e) => setStage(e.target.value)} className="border p-2 rounded w-full text-sm">
          <option>Sowing</option><option>Growth</option><option>Harvesting</option>
        </select>
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border p-2 rounded w-full text-sm">
          <option>English</option><option>Hindi</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-green-50 p-4 rounded shadow">
          <h3 className="font-semibold text-green-800 mb-1">NDVI Overview 🌱</h3>
          {ndviData ? (
            <>
              <p>Mean: {ndviData.ndvi_mean || "-"}, Min: {ndviData.ndvi_min || "-"}, Max: {ndviData.ndvi_max || "-"}</p>
              {ndviData.ndvi_breakdown ? (
                <p>Poor: {ndviData.ndvi_breakdown.poor_percent ?? 0}%, Moderate: {ndviData.ndvi_breakdown.moderate_percent ?? 0}%, Good: {ndviData.ndvi_breakdown.good_percent ?? 0}%</p>
              ) : <p>No NDVI Data, Please Add Farm Location or change latitude and longitude for advisory Demo.</p>}
            </>
          ) : <p>NDVI data not available.</p>}
        </div>

        <div className="bg-blue-50 p-4 rounded shadow">
          <h3 className="font-semibold text-blue-800 mb-1">Weather Updatem 🌤️ </h3>
          {weatherData ? weatherData.map((d, i) => (
            <p key={i}>{d.date}: Max {d.maxTemp}°C, Min {d.minTemp}°C, Rain: {d.rainfall}mm</p>
          )) : <p>No weather data available.</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        {["Crop Health", "Weather Alert", "General Advisory"].map((topic) => (
          <button
            key={topic}
            onClick={() => fetchAdvisory(topic)}
            className={`p-2 rounded font-medium ${selectedTopic === topic ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-green-100"}`}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="relative p-4 bg-yellow-50 border-l-4 border-yellow-600 rounded shadow">
        <strong className="block text-yellow-700 mb-1">Advisory: 📢 </strong>
        {isLoading ? (
          <div className="flex items-center gap-2 text-yellow-800">
            <Loader2 className="animate-spin h-5 w-5" /> Generating...
          </div>
        ) : (
          <p className="text-yellow-800 whitespace-pre-line">{advisoryText}</p>
        )}
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="text-yellow-700 hover:text-yellow-900" title="Save">
            <Download size={18} />
          </button>
          <button className="text-yellow-700 hover:text-yellow-900" title="Listen">
            <Volume2 size={18} />
          </button>
        </div>
      </div>

      <DialogFlowMessenger />
    </div>
  );
};

export default Advisory;
