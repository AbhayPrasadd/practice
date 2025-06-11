import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CommoditySelection from "./CommoditySelection";
import MandiPriceFetcher from "./MandiPriceFetcher";

const MandiPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="w-full p-4">
      {/* Back Button */}
      <div className="flex items-center mb-2">
        <button onClick={() => navigate("/dashboard")} className="text-green-700 hover:text-green-900 flex items-center gap-1">
          <ArrowLeft size={20} /> <span className="text-sm">Back</span>
        </button>
      </div>

      <h1 className="text-xl sm:text-2xl font-bold text-center text-green-800 mb-4">🏪 Mandi Dashboard</h1>

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
