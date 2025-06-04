import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import BottomTabBar from "./BottomTabBar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />

      {/* Mobile Sidebar (over everything) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 bg-green-900 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed top-0 left-0 w-64 h-full z-30">
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Page Content */}
      {/* Change the css of main content from left side from here */}
        <div className="flex-1 pt-16 md:ml-60 flex">
           <main className="flex-1 px-4 pb-20 overflow-y-auto h-[calc(100vh-4rem)]">
             <Outlet />
           </main>
        </div>


      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Bottom Bar */}
      <div className="md:hidden z-30">
        <BottomTabBar />
      </div>
    </div>
  );
};

export default Layout;
