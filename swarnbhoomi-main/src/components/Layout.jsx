import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main content area */}
      <div className="flex flex-col flex-1 bg-gray-100 transition-all duration-300 overflow-auto">
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <div className="p-6 pt-16 h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
