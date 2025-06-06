import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { CloudSun, BarChart3, Leaf, Bell, FileText, ShoppingBag } from "lucide-react";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          setUserData(data);
          fetchWeatherData(data.district);
        }
      }
      setLoading(false);
    };

    const fetchWeatherData = async (city) => {
      const apiKey = "8b75356541d14871aa0164352252503";
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Weather fetch error:", error.message);
      }
    };

    fetchUserData();
  }, []);

  const generateSuggestions = () => {
    if (!weatherData || !userData?.primaryCrops) return null;
    const temp = weatherData.current.temp_c;
    const condition = weatherData.current.condition.text.toLowerCase();
    const crops = Object.values(userData.primaryCrops).flat();
    let suggestions = [];

    crops.forEach((crop) => {
      if (temp > 30 && condition.includes("sun")) {
        suggestions.push(`${crop}: Consider irrigating regularly due to high temperature.`);
      } else if (condition.includes("rain")) {
        suggestions.push(`${crop}: Check for water logging and fungal diseases.`);
      } else if (temp < 15) {
        suggestions.push(`${crop}: Protect from frost, ensure proper mulching.`);
      } else {
        suggestions.push(`${crop}: Weather is moderate. Monitor growth regularly.`);
      }
    });

    return suggestions.slice(0, 3);
  };

  if (loading) {
    return <div className="p-4 bg-gray-100 min-h-screen text-sm">{t("loading")}</div>;
  }

  return (
    <div className="p-3 sm:p-4 bg-gray-100 min-h-screen max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          {t("welcome")}, {userData?.fullName || t("farmer")} 👋
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          {userData?.district}, {userData?.state}
        </p>
      </div>

      {/* Weather Section */}
      <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md mb-5">
        {weatherData ? (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <img src={weatherData.current.condition.icon} alt="Weather Icon" className="h-12 w-12 sm:h-16 sm:w-16" />
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-black">
                  {weatherData.location.name}, {weatherData.location.country}
                </h2>
                <p className="text-sm sm:text-lg text-black font-medium">Temperature: {weatherData.current.temp_c}°C</p>
                <p className="text-sm sm:text-lg text-black font-medium">{weatherData.current.condition.text}</p>
              </div>
            </div>
            <div className="mt-2 sm:mt-0 sm:w-1/2">
              <h3 className="text-sm sm:text-lg font-semibold text-black mb-2">{t("Suggestions")}</h3>
              {generateSuggestions()?.map((suggestion, index) => (
                <p key={index} className="text-xs sm:text-sm text-green-700">• {suggestion}</p>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm">{t("loading_weather")}</p>
        )}
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        <Link to="/dashboard/weather" className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:bg-gray-100 transition flex flex-col justify-center text-center sm:text-left">
          <CloudSun className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500 mb-2 mx-auto sm:mx-0" />
          <h3 className="text-sm sm:text-base font-semibold">{t("weather_forecast")}</h3>
          <p className="text-[11px] sm:text-sm text-gray-600">{t("weather_tip")}</p>
        </Link>

        <Link to="/dashboard/advisory" className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:bg-gray-100 transition flex flex-col justify-center text-center sm:text-left">
          <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mb-2 mx-auto sm:mx-0" />
          <h3 className="text-sm sm:text-base font-semibold">{t("advisory_schemes")}</h3>
          <p className="text-[11px] sm:text-sm text-gray-600">{t("advisory_tip")}</p>
        </Link>

        <Link to="/dashboard/mycrop" className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:bg-gray-100 transition flex flex-col justify-center text-center sm:text-left">
          <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mb-2 mx-auto sm:mx-0" />
          <h3 className="text-sm sm:text-base font-semibold">{t("market_prices")}</h3>
          <p className="text-[11px] sm:text-sm text-gray-600">{t("price_tip")}</p>
        </Link>

        <Link to="/dashboard/voiceBot" className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:bg-gray-100 transition flex flex-col justify-center text-center sm:text-left">
          <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mb-2 mx-auto sm:mx-0" />
          <h3 className="text-sm sm:text-base font-semibold">{t("crop_planner")}</h3>
          <p className="text-[11px] sm:text-sm text-gray-600">{t("crop_tip")}</p>
        </Link>

        <Link to="/dashboard/farmeralerts" className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:bg-gray-100 transition flex flex-col justify-center text-center sm:text-left">
          <Bell className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mb-2 mx-auto sm:mx-0" />
          <h3 className="text-sm sm:text-base font-semibold">{t("farming_alerts")}</h3>
          <p className="text-[11px] sm:text-sm text-gray-600">{t("alert_tip")}</p>
        </Link>

        <Link to="/dashboard/inventory" className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:bg-gray-100 transition flex flex-col justify-center text-center sm:text-left">
          <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 mb-2 mx-auto sm:mx-0" />
          <h3 className="text-sm sm:text-base font-semibold">{t("inventory_management")}</h3>
          <p className="text-[11px] sm:text-sm text-gray-600">{t("inventory_tip")}</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
