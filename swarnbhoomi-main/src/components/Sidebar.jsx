import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  Leaf,
  BarChart3,
  Settings,
  Network,
  Users,
  ShoppingCart,
  MessageSquare,
  BadgeIndianRupee,
  ClipboardList,
  UserCheck,
} from "lucide-react";

const Sidebar = ({ isSidebarOpen }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <Home size={20} /> },
    { name: "Advisory", path: "/dashboard/advisory", icon: <UserCheck size={20} /> },
    { name: "Soil Health", path: "/dashboard/soiladvisory", icon: <Leaf size={20} /> },
    { name: "FPO", path: "/dashboard/fpo", icon: <Users size={20} /> },
    { name: "Mandi Rates", path: "/dashboard/market-prices", icon: <BadgeIndianRupee size={20} /> },
    { name: "Market", path: "/dashboard/market", icon: <ShoppingCart size={20} /> },
    { name: "Schemes", path: "/dashboard/schemes", icon: <ClipboardList size={20} /> },
    { name: "Learning", path: "/dashboard/learning", icon: <BookOpen size={20} /> },
    { name: "Community", path: "/dashboard/community", icon: <MessageSquare size={20} /> },
  ];

  return (
    <div
      className={`bg-green-900 text-white h-screen p-4 transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <ul className="space-y-4 mt-16">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg ${
                location.pathname === item.path ? "bg-green-700" : "hover:bg-green-800"
              }`}
            >
              {item.icon}
              <span
                className={`${
                  isSidebarOpen ? "block" : "hidden"
                } transition-all duration-300`}
              >
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
