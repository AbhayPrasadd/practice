import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FPOlist from "./FPOlist";
import FPOnearby from "./FPOnearby";
import WhatIsFPO from "./WhatIsFpo";

const FpoPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`p-2 flex-1 ${
            activeTab === 0 ? "border-b-4 border-blue-500 font-bold" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(0)}
        >
          📍 {t("fpo_nearby_tab")}
        </button>
        <button
          className={`p-2 flex-1 ${
            activeTab === 1 ? "border-b-4 border-blue-500 font-bold" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(1)}
        >
          🔍 {t("fpo_search_tab")}
        </button>
        <button
          className={`p-2 flex-1 ${
            activeTab === 2 ? "border-b-4 border-blue-500 font-bold" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(2)}
        >
          📖 {t("fpo_what_is_tab")}
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
