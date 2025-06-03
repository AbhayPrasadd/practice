import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { CloudSun, BarChart3, Leaf, Bell, FileText, ShoppingBag } from "lucide-react";
import { useTranslation } from "react-i18next"; // ✅ i18n

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation(); // ✅ translation hook

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="p-6 bg-gray-100 min-h-screen">{t("loading")}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <div className="mb-3">
        <h1 className="text-2xl font-bold text-gray-800">
          {t("welcome")}, {userData?.fullName || t("farmer")} 👋
        </h1>
        <p className="text-gray-600">{userData?.district}, {userData?.state}</p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,_auto)]">

        {/* Weather Forecast */}
        <Link to="/dashboard/weather" className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 min-h-[200px] hover:bg-gray-100 transition">
          <CloudSun className="h-16 w-16 text-yellow-500" />
          <div>
            <h3 className="text-2xl font-semibold">{t("weather_forecast")}</h3>
            <p className="text-gray-600">{t("weather_tip")}</p>
          </div>
        </Link>

        {/* Advisory & Government Schemes */}
        <Link to="/dashboard/advisory" className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 min-h-[250px] hover:bg-gray-100 transition">
          <FileText className="h-16 w-16 text-blue-500" />
          <div>
            <h3 className="text-2xl font-semibold">{t("advisory_schemes")}</h3>
            <p className="text-gray-600">{t("advisory_tip")}</p>
          </div>
        </Link>

        {/* Market Prices */}
        <Link to="/dashboard/mycrop" className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 min-h-[250px] hover:bg-gray-100 transition">
          <BarChart3 className="h-16 w-16 text-green-500" />
          <div>
            <h3 className="text-2xl font-semibold">{t("market_prices")}</h3>
            <p className="text-gray-600">{t("price_tip")}</p>
          </div>
        </Link>

        {/* Crop Planner */}
        <Link to="/dashboard/cropplanner" className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 min-h-[250px] hover:bg-gray-100 transition">
          <Leaf className="h-16 w-16 text-green-600" />
          <div>
            <h3 className="text-2xl font-semibold">{t("crop_planner")}</h3>
            <p className="text-gray-600">{t("crop_tip")}</p>
          </div>
        </Link>

        {/* Farming Alerts */}
        <Link to="/dashboard/farmeralerts" className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 min-h-[250px] hover:bg-gray-100 transition">
          <Bell className="h-16 w-16 text-red-500" />
          <div>
            <h3 className="text-2xl font-semibold">{t("farming_alerts")}</h3>
            <p className="text-gray-600">{t("alert_tip")}</p>
          </div>
        </Link>

        {/* Inventory Management */}
        <Link to="/dashboard/inventory" className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 min-h-[250px] hover:bg-gray-100 transition">
          <ShoppingBag className="h-16 w-16 text-orange-500" />
          <div>
            <h3 className="text-2xl font-semibold">{t("inventory_management")}</h3>
            <p className="text-gray-600">{t("inventory_tip")}</p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Dashboard;
