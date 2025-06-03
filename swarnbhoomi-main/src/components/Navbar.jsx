import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Bell } from "lucide-react";
import { useTranslation } from "react-i18next"; // ✅ Import i18next hook

// Custom Popover Component
const Popover = ({ children, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative text-white p-2">
        {children}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
          {content}
        </div>
      )}
    </div>
  );
};

// Custom Dropdown Menu Component
const DropdownMenu = ({ children, menuItems }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center space-x-2">
        {children}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-50">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100"
              onClick={() => {
                if (item === "Logout") navigate("/");
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Avatar Component
const Avatar = ({ src, fallback }) => (
  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
    {src ? <img src={src} alt="User" className="w-full h-full object-cover" /> : <span>{fallback}</span>}
  </div>
);

// Main Navbar
const Navbar = ({ setIsSidebarOpen }) => {
  const { t, i18n } = useTranslation(); // ✅ Hook
  const [notifications] = useState([
    t("notification1"),
    t("notification2"),
    t("notification3"),
    t("notification3"),
  ]);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-green-900 shadow-md flex items-center justify-between px-6 z-50">
      <button className="text-white p-2 z-50" onClick={() => setIsSidebarOpen((prev) => !prev)}>
        <Menu className="h-6 w-6" />
      </button>

      {/* Optional Title */}
      <div className="text-xl font-semibold text-white">{t("dashboard")}</div>

      <div className="flex items-center gap-6">
        {/* Language Selector */}
        <select
          onChange={handleLanguageChange}
          className="text-black rounded p-1 bg-white"
          defaultValue={i18n.language}
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
        </select>

        {/* Notifications */}
        <Popover
          content={
            <div>
              <div className="text-lg font-semibold text-gray-700">{t("notifications")}</div>
              <ul className="mt-2 space-y-2">
                {notifications.length > 0 ? (
                  notifications.map((note, index) => (
                    <li key={index} className="text-gray-600 text-sm border-b py-1">
                      {note}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 text-sm">{t("no_notifications")}</li>
                )}
              </ul>
            </div>
          }
        >
          <Bell className="h-8 w-8" />
        </Popover>

        {/* Profile Dropdown */}
        <DropdownMenu menuItems={[t("profile"), t("settings"), t("logout")]}>
          <Avatar src="/dashboard/profile.png" fallback="U" />
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
