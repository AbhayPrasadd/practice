import React, { useState } from "react";
import { Menu, Bell, LogOut, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Navbar = ({ setIsSidebarOpen }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <>
      <Toaster position="top-right" />
      <nav className="fixed top-0 left-0 w-full h-16 bg-green-900 shadow-md z-40 px-4 sm:px-6">
        <div className="flex items-center justify-between h-full">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-3">
            <button
              className="text-white p-2 md:hidden hover:bg-white/10 rounded-full"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <img src="/swarnbhoomi-logo.png" alt="Logo" className="h-16 w-auto hidden sm:block" />
          </div>

          {/* Right: Bell + Avatar */}
          <div className="flex items-center gap-3">
            {/* Notification Icon */}
            <div className="relative">
              <button
                className="text-white p-2 hover:bg-white/10 rounded-full"
                onClick={() => setNotifOpen(!notifOpen)}
              >
                <Bell className="h-6 w-6" />
              </button>
              {notifOpen && (
                <div className="absolute right-0 mt-2 w-80 max-h-[400px] overflow-auto bg-white rounded-xl shadow-2xl p-4 z-50 animate-fade-in">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-800">🔔 Notifications</h4>
                    <button
                      onClick={() => setNotifications([])}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Clear All
                    </button>
                  </div>
                  {notifications.length > 0 ? (
                    <ul className="space-y-3">
                      {notifications.map((n, i) => (
                        <li
                          key={i}
                          className="p-3 bg-gray-50 border rounded-lg shadow-sm hover:bg-gray-100 transition-all"
                        >
                          <div className="font-medium text-gray-900">{n.title}</div>
                          <div className="text-gray-700 text-sm">{n.body}</div>
                          <div className="text-xs text-gray-500 mt-1">{n.time}</div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-sm">No new notifications</p>
                  )}
                </div>
              )}
            </div>

            {/* Avatar Dropdown */}
            <div className="relative">
              <button onClick={() => setAvatarOpen(!avatarOpen)}>
                <img
                  src="https://api.dicebear.com/7.x/initials/svg?seed=U"
                  alt="Avatar"
                  className="h-9 w-9 rounded-full border-2 border-white shadow"
                />
              </button>
              {avatarOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-xl z-50">
                  <ul className="py-2 text-sm text-gray-700">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                      onClick={() => {
                        navigate("/dashboard/profilePage");
                        setAvatarOpen(false);
                      }}
                    >
                      <User size={16} /> Profile
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                      onClick={() => navigate("/")}
                    >
                      <LogOut size={16} /> Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
