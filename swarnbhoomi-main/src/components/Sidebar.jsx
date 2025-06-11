import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  Users,
  ShoppingCart,
  MessageSquare,
  BadgeIndianRupee,
  ClipboardList,
  UserCheck,
  X,
  Trash2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Sidebar = ({ setIsSidebarOpen }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = useMemo(
    () => [
      { name: t("Dashboard"), path: "/dashboard", icon: <Home size={20} /> },
      { name: t("Advisory"), path: "/dashboard/advisoryPage", icon: <UserCheck size={20} /> },
      { name: t("Agro-Rent"), path: "/dashboard/agroRentTab", icon: <ShoppingCart size={20} /> },
      { name: t("Bazar Bhaav"), path: "/dashboard/mandiPage", icon: <BadgeIndianRupee size={20} /> },
      { name: t("Soil Health"), path: "/dashboard/soilAdvisory", icon: <UserCheck size={20} /> },
      { name: t("Fpo Search"), path: "/dashboard/fpoPage", icon: <Users size={20} /> },
      { name: t("Schemes"), path: "/dashboard/schemes", icon: <ClipboardList size={20} /> },
      { name: t("Krishi Parivar"), path: "/dashboard/communityPage", icon: <MessageSquare size={20} /> },
      { name: t("Learning"), path: "/dashboard/learningPage", icon: <BookOpen size={20} /> },
      { name: t("Waste"), path: "/dashboard/waste", icon: <Trash2 size={20} /> },
    ],
    [t]
  );

  return (
    <div className="bg-green-900 text-white h-full w-64 p-4 pt-20 md:pt-24 flex flex-col justify-between">
      {/* Top Section: Logo and Navigation */}
      <div>
        {/* Mobile Logo + Close Button */}
        <div className="md:hidden absolute top-2 left-4 right-2 flex justify-between items-center">
          <img src="/swarnbhoomi-logo.png" alt="SwLogo" className="h-18 w-auto" />
          <button onClick={() => setIsSidebarOpen(false)} className="text-white">
            <X size={22} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1 mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm md:text-base font-medium transition-all ${
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

      {/* Bottom Section: Version Info */}
      <div className="text-center text-xs text-white/60 mt-6 mb-2">
        <hr className="border-white/20 my-2" />
        
        <p>CarbonClad © 2025</p>
        <p>Version 1.0.0</p>
      </div>
    </div>
  );
};

export default Sidebar;
