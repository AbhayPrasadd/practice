import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  Leaf,
  Users,
  ShoppingCart,
  MessageSquare,
  BadgeIndianRupee,
  ClipboardList,
  UserCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Sidebar = ({ isSidebarOpen }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = useMemo(() => [
    { name: t("dashboard"), path: "/dashboard", icon: <Home size={20} /> },
    { name: t("advisory"), path: "/dashboard/advisory", icon: <UserCheck size={20} /> },
    { name: t("soil_health"), path: "/dashboard/soiladvisory", icon: <Leaf size={20} /> },
    { name: t("fpo"), path: "/dashboard/fpo", icon: <Users size={20} /> },
    { name: t("mandi_rates"), path: "/dashboard/market-prices", icon: <BadgeIndianRupee size={20} /> },
    { name: t("market"), path: "/dashboard/market", icon: <ShoppingCart size={20} /> },
    { name: t("schemes"), path: "/dashboard/schemes", icon: <ClipboardList size={20} /> },
    { name: t("learning"), path: "/dashboard/learning", icon: <BookOpen size={20} /> },
    { name: t("community"), path: "/dashboard/community", icon: <MessageSquare size={20} /> },
  ], [t]); // ✅ Add t to deps so it updates on language change

  return (
    <div className={`bg-green-900 text-white h-screen p-4 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-20"}`}>
      <ul className="space-y-4 mt-16">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg ${location.pathname === item.path ? "bg-green-700" : "hover:bg-green-800"}`}
            >
              {item.icon}
              <span className={`${isSidebarOpen ? "block" : "hidden"} transition-all duration-300`}>
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
