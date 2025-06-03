import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next"; // ✅ Import the hook

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { t } = useTranslation(); // ✅ Initialize translator (optional for now)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main content area */}
      <div className="flex flex-col flex-1 bg-gray-100 transition-all duration-300 overflow-auto">
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />

        {/* Page Content */}
        <div className="p-6 pt-16 h-full overflow-y-auto">
          {/* You can use t('some_key') here for titles if needed */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
