import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AgroRent from "./AgroRentPage";
import AgroListing from "./AgroListing";

const AgroRentTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen max-w-8xl ">
   

      {/* Tabs */}
      <div className="flex border-b border-gray-300 ">
        <button
          onClick={() => setActiveTab(0)}
          className={`flex-1 p-3 text-sm font-medium text-center transition-all duration-200 ${
            activeTab === 0 ? "border-b-4 border-green-600 text-green-700" : "text-gray-500"
          }`}
        >
          📋 Available Equipment
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`flex-1 p-3 text-sm font-medium text-center transition-all duration-200 ${
            activeTab === 1 ? "border-b-4 border-green-600 text-green-700" : "text-gray-500"
          }`}
        >
          👤 My Listings
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 0 && <AgroRent />}
        {activeTab === 1 && <AgroListing />}
      </div>
    </div>
  );
};

export default AgroRentTab;
