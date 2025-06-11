import React, { useState } from "react";
import CommoditySelection from "./CommoditySelection";
import MandiPriceFetcher from "./MandiPriceFetcher";

const MandiPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full p-4">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">🏪 Mandi Dashboard</h1>

      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        <button
          className={`p-3 flex-1 text-sm md:text-base transition ${
            activeTab === 0 ? "border-b-4 border-green-600 font-semibold text-green-700" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(0)}
        >
          🌾 Select by Crop
        </button>
        <button
          className={`p-3 flex-1 text-sm md:text-base transition ${
            activeTab === 1 ? "border-b-4 border-green-600 font-semibold text-green-700" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(1)}
        >
          📊 Search by Filters
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 max-w-6xl mx-auto">
        {activeTab === 0 && <CommoditySelection />}
        {activeTab === 1 && <MandiPriceFetcher />}
      </div>
    </div>
  );
};

export default MandiPage;
