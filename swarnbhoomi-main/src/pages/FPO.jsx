import React, { useState } from "react";
import FPOlist from "./FPOlist";
import FPOnearby from "./FPOnearby";
import WhatIsFPO from "./WhatIsFpo"; // New component

const FpoPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full p-4">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`p-2 flex-1 ${
            activeTab === 0 ? "border-b-4 border-blue-500 font-bold" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(0)}
        >
          📖 What is FPO?
        </button>
        <button
          className={`p-2 flex-1 ${
            activeTab === 1 ? "border-b-4 border-blue-500 font-bold" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(1)}
        >
          📍 Nearby FPOs
        </button>
        <button
          className={`p-2 flex-1 ${
            activeTab === 2 ? "border-b-4 border-blue-500 font-bold" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(2)}
        >
          🔍 Search FPOs
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">
        {activeTab === 0 && <WhatIsFPO/>}
        {activeTab === 1 && <FPOnearby  />}
        {activeTab === 2 && <FPOlist/>}
      </div>
    </div>
  );
};

export default FpoPage;
