import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader2, Download, Volume2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const cropOptions = ["Wheat", "Rice", "Maize", "Paddy", "Sugarcane", "Soybean"];

const Advisory = () => {
  const { t } = useTranslation();
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

      const res = await axios.post("https://swarnabhumi-backend.onrender.com/api/getAdvice", payload);
      setAdvisoryText(res.data.advice || t("no_advisory"));
    } catch (error) {
      console.error("❌ Advisory generation failed:", error);
      setAdvisoryText(t("fetch_failed"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center">{t("smart_crop_advisory")}</h2>

      {/* Form Inputs */}
      <div className="grid grid-cols-1 gap-4">
        {/* Row 1: Latitude + Longitude + Location Button */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t("latitude")}</label>
            <input
              value={latitude}
              onChange={(e) => setLatitude(parseFloat(e.target.value))}
              className="border p-2 w-full text-sm"
              type="number"
              placeholder={t("latitude")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t("longitude")}</label>
            <input
              value={longitude}
              onChange={(e) => setLongitude(parseFloat(e.target.value))}
              className="border p-2 w-full text-sm"
              type="number"
              placeholder={t("longitude")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t("location")}</label>
            <button
              onClick={() => {
                navigator.geolocation.getCurrentPosition(
                  (pos) => {
                    setLatitude(pos.coords.latitude);
                    setLongitude(pos.coords.longitude);
                  },
                  () => alert(t("location_denied"))
                );
              }}
              className="bg-green-700 text-white p-2 w-full hover:bg-green-800 text-sm"
            >
              {t("Get My Location")}
            </button>
          </div>
        </div>

        {/* Row 2: Language + Crop + Stage */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t("language")}</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border p-2 w-full text-sm">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t("crop")}</label>
            <select value={crop} onChange={(e) => setCrop(e.target.value)} className="border p-2 w-full text-sm">
              {cropOptions.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t("stage")}</label>
            <select value={stage} onChange={(e) => setStage(e.target.value)} className="border p-2 w-full text-sm">
              <option>{t("sowing")}</option>
              <option>{t("growth")}</option>
              <option>{t("harvesting")}</option>
            </select>
          </div>
        </div>
      </div>

      {/* NDVI and Weather */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-green-100 p-4 shadow-sm space-y-2">
          <h3 className="font-semibold text-green-900">{t("ndvi_overview")}</h3>
          {ndviData ? (
            <>
              <p>{t("mean")}: {ndviData.ndvi_mean || "-"}, {t("min")}: {ndviData.ndvi_min || "-"}, {t("max")}: {ndviData.ndvi_max || "-"}</p>
              {ndviData.ndvi_breakdown ? (
                <p>{t("poor")}: {ndviData.ndvi_breakdown.poor_percent ?? 0}%, {t("moderate")}: {ndviData.ndvi_breakdown.moderate_percent ?? 0}%, {t("good")}: {ndviData.ndvi_breakdown.good_percent ?? 0}%</p>
              ) : <p>{t("no_ndvi_data")}</p>}
            </>
          ) : <p>{t("ndvi_unavailable")}</p>}
        </div>

        <div className="bg-blue-100 p-4 shadow-sm space-y-1">
          <h3 className="font-semibold text-blue-900">{t("weather_update")}</h3>
          {weatherData ? weatherData.map((d, i) => (
            <p key={i}>{d.date}: {t("max")}: {d.maxTemp}°C, {t("min")}: {d.minTemp}°C, {t("rain")}: {d.rainfall}mm</p>
          )) : <p>{t("weather_unavailable")}</p>}
        </div>
      </div>

      {/* Advisory Buttons */}
      <div className="flex flex-wrap justify-center gap-1 mt-4">
        {["Crop Health", "Weather Alert", "General Advisory"].map((topic) => (
          <button
            key={topic}
            onClick={() => fetchAdvisory(topic)}
            className={`px-2 py-2 text-sm font-medium transition-all ${
              selectedTopic === topic
                ? "bg-green-700 text-white shadow"
                : "bg-gray-100 text-gray-800 hover:bg-green-200"
            }`}
          >
            {t(topic.toLowerCase().replace(/ /g, "_"))}
          </button>
        ))}
      </div>

      {/* Advisory Output */}
      <div className="relative p-4 bg-yellow-100 border-l-4 border-yellow-600 shadow-md">
        <strong className="block text-yellow-800 mb-2 text-base">{t("advisory")}: 📢</strong>
        {isLoading ? (
          <div className="flex items-center gap-2 text-yellow-800 text-sm">
            <Loader2 className="animate-spin h-5 w-5" /> {t("generating")}
          </div>
        ) : (
          <p className="text-yellow-900 whitespace-pre-line text-sm leading-relaxed">{advisoryText}</p>
        )}
        <div className="absolute top-2 right-2 flex gap-3">
          <button className="text-yellow-700 hover:text-yellow-900" title={t("save")}>
            <Download size={18} />
          </button>
          <button className="text-yellow-700 hover:text-yellow-900" title={t("listen")}>
            <Volume2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
