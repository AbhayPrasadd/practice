import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import {
  CloudSun,
  Wind,
  Thermometer,
  Droplet,
  AlertCircle,
} from "lucide-react";

const Weather = () => {
  const [location, setLocation] = useState("Loading...");
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [advice, setAdvice] = useState("");
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(true);

  const API_KEY = "8b75356541d14871aa0164352252503";
  const CACHE_KEY = "weatherDataCache";
  const CACHE_EXPIRY_MINUTES = 30;

  useEffect(() => {
    const fetchWeather = async (city) => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5`
        );
        const data = await response.json();
        setWeatherData(data.current);
        setForecast(data.forecast.forecastday);
        generateAdvice(data);

        // Save to localStorage with timestamp
        const cacheData = {
          timestamp: Date.now(),
          data,
          location: city,
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));

        // Optional: auto-delete cache after expiry
        setTimeout(() => {
          localStorage.removeItem(CACHE_KEY);
        }, CACHE_EXPIRY_MINUTES * 60 * 1000);
      } catch (error) {
        console.error("Weather API error:", error.message);
      }
    };

    const generateAdvice = (data) => {
      const today = data.forecast.forecastday[0];
      let adviceMsg = "Weather is moderate. Monitor crops regularly.";
      let alertMsg = "";

      if (today.day.daily_will_it_rain) {
        adviceMsg =
          "Rain expected today. Avoid spraying pesticides and plan irrigation.";
      }

      for (let day of data.forecast.forecastday) {
        if (day.day.condition.text.toLowerCase().includes("storm")) {
          alertMsg = `Severe storm expected on ${day.date}. Take precautions!`;
          break;
        }
      }

      setAdvice(adviceMsg);
      setAlert(alertMsg);
    };

    const fetchLocationAndWeather = async () => {
      const user = auth.currentUser;
      if (!user) {
        setLocation("Unknown");
        setLoading(false);
        return;
      }

      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          const city = userData.district || "Delhi";
          setLocation(`${userData.district}, ${userData.state}`);

          // Check for cached data
          const cached = localStorage.getItem(CACHE_KEY);
          if (cached) {
            const parsed = JSON.parse(cached);
            const ageMinutes = (Date.now() - parsed.timestamp) / 60000;

            if (
              ageMinutes < CACHE_EXPIRY_MINUTES &&
              parsed.location === city
            ) {
              setWeatherData(parsed.data.current);
              setForecast(parsed.data.forecast.forecastday);
              generateAdvice(parsed.data);
              setLoading(false);
              return;
            }
          }

          // If not cached or expired
          await fetchWeather(city);
        } else {
          setLocation("Unknown");
        }
      } catch (err) {
        console.error("Error fetching user location:", err);
        setLocation("Error");
      }

      setLoading(false);
    };

    fetchLocationAndWeather();
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center text-xl font-semibold text-gray-600">
        Fetching data...
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-8">
          {location}
        </h1>

        {/* Current Weather + Advice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
              Current Weather
            </h2>
            <div className="flex items-center justify-center gap-6">
              <CloudSun className="h-20 w-20 text-yellow-500" />
              <div className="space-y-2 text-lg font-medium">
                <p className="text-2xl text-gray-800 font-semibold">
                  {weatherData?.condition.text}
                </p>
                <p className="text-gray-600 flex items-center">
                  <Thermometer className="h-5 w-5 mr-2 text-red-500" />
                  {weatherData?.temp_c}°C
                </p>
                <p className="text-gray-600 flex items-center">
                  <Droplet className="h-5 w-5 mr-2 text-blue-500" />
                  {weatherData?.humidity}%
                </p>
                <p className="text-gray-600 flex items-center">
                  <Wind className="h-5 w-5 mr-2 text-gray-700" />
                  {weatherData?.wind_kph} km/h
                </p>
              </div>
            </div>
          </div>

          {/* Advice and Alert */}
          <div className="bg-white border p-4 shadow-md hover:shadow-xl transition-transform transform hover:scale-105 text-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Weather Advice
            </h2>
            <p className="text-gray-700 text-lg font-medium">{advice}</p>
            {alert && (
              <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-xl flex items-center justify-center shadow-sm">
                <AlertCircle className="h-6 w-6 mr-2" />
                <span className="font-semibold">{alert}</span>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300" />

        {/* Forecast Table */}
        <div className="bg-white border p-6 shadow-md overflow-x-auto hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
            Weather Forecast
          </h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-100 text-gray-700">
                <th className="p-3">Date</th>
                <th className="p-3">Condition</th>
                <th className="p-3">Temp (°C)</th>
                <th className="p-3">Humidity</th>
                <th className="p-3">Wind</th>
              </tr>
            </thead>
            <tbody>
              {forecast.map((day, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-blue-50 text-gray-800 font-medium"
                >
                  <td className="p-3">{day.date}</td>
                  <td className="p-3">{day.day.condition.text}</td>
                  <td className="p-3 text-blue-600">{day.day.avgtemp_c}°C</td>
                  <td className="p-3 text-green-600">{day.day.avghumidity}%</td>
                  <td className="p-3 text-gray-700">{day.day.maxwind_kph} km/h</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Weather;
