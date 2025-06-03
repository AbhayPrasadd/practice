import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import BottomTabBar from "./BottomTabBar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at top */}
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />

      {/* Page content */}
      <div className="flex flex-1">
        <main className="w-full overflow-auto pt-16 md:ml-64">
          <Outlet />
        </main>
      </div>

     
     {/* Sidebar for mobile (slides in from left, ABOVE navbar and bottom bar) */}
<div
  className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 bg-green-900 md:hidden ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
</div>


      {/* Sidebar always visible on desktop (left side) */}
      <div className="hidden md:block fixed top-0 left-0 w-64 h-full z-30">
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Bottom tab bar (visible only on mobile) */}
      <div className="md:hidden z-30">
        <BottomTabBar />
      </div>
    </div>
  );
};

export default Layout;
