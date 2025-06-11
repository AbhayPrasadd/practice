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
          📍 Nearby FPOs
        </button>
        <button
          className={`p-2 flex-1 ${
            activeTab === 1 ? "border-b-4 border-blue-500 font-bold" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(1)}
        >
          🔍 Search FPOs
        </button>
        <button
          className={`p-2 flex-1 ${
            activeTab === 2 ? "border-b-4 border-blue-500 font-bold" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(2)}
        >
          📖 What is FPO?
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">
        {activeTab === 0 && <FPOnearby />}
        {activeTab === 1 && <FPOlist />}
        {activeTab === 2 && <WhatIsFPO />}
      </div>
    </div>
  );
};

export default FpoPage;
