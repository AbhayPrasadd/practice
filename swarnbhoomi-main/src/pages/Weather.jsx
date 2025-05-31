import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { CloudSun, Wind, Thermometer, Droplet, AlertCircle } from "lucide-react";

const Weather = () => {
  const [location, setLocation] = useState("Loading...");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      const user = auth.currentUser;
      if (!user) {
        setLocation("Unknown Location");
        setLoading(false);
        return;
      }

      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setLocation(`${userData.district}, ${userData.state}`);
        } else {
          setLocation("Unknown Location");
        }

        const mockWeatherData = {
          current: {
            temperature: "30°C",
            condition: "Sunny",
            humidity: "50%",
            windSpeed: "10 km/h",
          },
          forecast: [
            { day: "Monday", condition: "Rainy", temperature: "25°C", humidity: "70%", windSpeed: "15 km/h" },
            { day: "Tuesday", condition: "Sunny", temperature: "32°C", humidity: "45%", windSpeed: "10 km/h" },
            { day: "Wednesday", condition: "Cloudy", temperature: "28°C", humidity: "60%", windSpeed: "12 km/h" },
            { day: "Thursday", condition: "Stormy", temperature: "22°C", humidity: "85%", windSpeed: "20 km/h" },
            { day: "Friday", condition: "Sunny", temperature: "31°C", humidity: "40%", windSpeed: "9 km/h" },
          ],
          advice: "Due to upcoming rain on Monday, avoid pesticide spraying. Plan irrigation accordingly.",
          alert: "Severe storm expected on Thursday. Take necessary precautions.",
        };

        setWeatherData(mockWeatherData);
      } catch (error) {
        console.error("Error fetching location:", error);
        setLocation("Error fetching location");
      }
      setLoading(false);
    };

    fetchLocationAndWeather();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-xl font-semibold text-gray-600">Fetching data...</div>;
  }

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-8">{location}</h1>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Current Weather */}
          <div className="bg-white border p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Current Weather</h2>
            <div className="flex items-center justify-center gap-6">
              <CloudSun className="h-20 w-20 text-yellow-500" />
              <div className="space-y-2 text-lg font-medium">
                <p className="text-2xl text-gray-800 font-semibold">{weatherData?.current.condition}</p>
                <p className="text-gray-600 flex items-center">
                  <Thermometer className="h-5 w-5 mr-2 text-red-500" /> {weatherData?.current.temperature}
                </p>
                <p className="text-gray-600 flex items-center">
                  <Droplet className="h-5 w-5 mr-2 text-blue-500" /> {weatherData?.current.humidity}
                </p>
                <p className="text-gray-600 flex items-center">
                  <Wind className="h-5 w-5 mr-2 text-gray-700" /> {weatherData?.current.windSpeed}
                </p>
              </div>
            </div>
          </div>

          {/* Advice + Alert */}
          <div className="bg-white border p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 text-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Weather Advice</h2>
            <p className="text-gray-700 text-lg font-medium">{weatherData?.advice}</p>
            {weatherData?.alert && (
              <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-xl flex items-center justify-center shadow-sm">
                <AlertCircle className="h-6 w-6 mr-2" /> <span className="font-semibold">{weatherData.alert}</span>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-300" />

        {/* Forecast Table */}
        <div className="bg-white border p-6 rounded-2xl shadow-md overflow-x-auto hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">5-Day Weather Forecast</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-100 text-gray-700">
                <th className="p-3">Day</th>
                <th className="p-3">Condition</th>
                <th className="p-3">Temperature</th>
                <th className="p-3">Humidity</th>
                <th className="p-3">Wind Speed</th>
              </tr>
            </thead>
            <tbody>
              {weatherData?.forecast.map((day, index) => (
                <tr key={index} className="hover:bg-blue-50 text-gray-800 font-medium">
                  <td className="p-3">{day.day}</td>
                  <td className="p-3">{day.condition}</td>
                  <td className="p-3 text-blue-600">{day.temperature}</td>
                  <td className="p-3 text-green-600">{day.humidity}</td>
                  <td className="p-3 text-gray-700">{day.windSpeed}</td>
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
