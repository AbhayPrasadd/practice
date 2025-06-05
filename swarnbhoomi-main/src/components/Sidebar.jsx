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
  X,
  User,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Sidebar = ({ setIsSidebarOpen }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = useMemo(
    () => [
      { name: t("Profile"), path: "/dashboard/profile", icon: <User size={20} /> },
      { name: t("Dashboard"), path: "/dashboard", icon: <Home size={20} /> },
      { name: t("Advisory"), path: "/dashboard/advisory", icon: <UserCheck size={20} /> },
      { name: t("Soil Health"), path: "/dashboard/soiladvisory", icon: <Leaf size={20} /> },
      { name: t("Fpo"), path: "/dashboard/fpo", icon: <Users size={20} /> },
      { name: t("Mandi Rates"), path: "/dashboard/market-prices", icon: <BadgeIndianRupee size={20} /> },
      { name: t("Agri-Rent"), path: "/dashboard/market", icon: <ShoppingCart size={20} /> },
      { name: t("Schemes"), path: "/dashboard/schemes", icon: <ClipboardList size={20} /> },
      { name: t("Learning"), path: "/dashboard/learning", icon: <BookOpen size={20} /> },
      { name: t("Community"), path: "/dashboard/community", icon: <MessageSquare size={20} /> },
       { name: t("Mandi Price"), path: "/dashboard/mandiPriceFetcher", icon: <MessageSquare size={20} /> },
     
    ],
    [t]
  );

  return (
    <div className="bg-green-900 text-white h-full w-64 p-4 pt-20 md:pt-24 relative">

      {/* Logo and Close button (mobile only) */}
      <div className="md:hidden absolute top-4 left-4 right-4 flex justify-between items-center">
        <img src="/logo-preview.png" alt="Logo" className="h-9 w-auto" />
        <button onClick={() => setIsSidebarOpen(false)} className="text-white">
          <X size={24} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm md:text-lg font-medium transition-all ${
              location.pathname === item.path
                ? "bg-green-700 text-white"
                : "hover:bg-green-800 text-white/90"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
