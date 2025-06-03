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
  X
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Sidebar = ({ setIsSidebarOpen }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = useMemo(
    () => [
      { name: t("dashboard"), path: "/dashboard", icon: <Home size={20} /> },
      { name: t("advisory"), path: "/dashboard/advisory", icon: <UserCheck size={20} /> },
      { name: t("soil_health"), path: "/dashboard/soiladvisory", icon: <Leaf size={20} /> },
      { name: t("fpo"), path: "/dashboard/fpo", icon: <Users size={20} /> },
      { name: t("mandi_rates"), path: "/dashboard/market-prices", icon: <BadgeIndianRupee size={20} /> },
      { name: t("market"), path: "/dashboard/market", icon: <ShoppingCart size={20} /> },
      { name: t("schemes"), path: "/dashboard/schemes", icon: <ClipboardList size={20} /> },
      { name: t("learning"), path: "/dashboard/learning", icon: <BookOpen size={20} /> },
      { name: t("community"), path: "/dashboard/community", icon: <MessageSquare size={20} /> }
    ],
    [t]
  );

return (
  <div className="bg-green-900 text-white h-full w-64 p-4 pt-20 md:pt-24">
    {/* Logo + Close for Mobile */}
    <div className="md:hidden flex justify-between items-center mb-4 absolute top-4 left-4 right-4">
      <img src="/logo-preview.png" alt="Logo" className="h-10 w-auto" />
      <button onClick={() => setIsSidebarOpen(false)} className="text-white">
        <X size={24} />
      </button>
    </div>

    {/* Sidebar Links */}
    <ul className="space-y-3">
      {menuItems.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            className={`flex items-center space-x-3 p-3 rounded-lg text-base ${
              location.pathname === item.path
                ? "bg-green-700"
                : "hover:bg-green-800"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);


};

export default Sidebar;
