// src/pages/SchemesPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Banknote, ShieldCheck, Landmark, Leaf, Users, Droplet, Wrench } from "lucide-react";

const schemeCategories = [
  {
    title: "🌾 Agriculture Schemes",
    description: "Support for crop production, irrigation, and soil health.",
    icon: <Leaf className="text-green-600 w-6 h-6" />,
    link: "/schemes/category/agriculture"
  },
  {
    title: "💧 Irrigation Schemes",
    description: "Schemes focused on water resource management and irrigation.",
    icon: <Droplet className="text-blue-400 w-6 h-6" />,
    link: "/schemes/category/irrigation"
  },
  {
    title: "🥕 Horticulture Schemes",
    description: "Schemes promoting fruits, vegetables, and flower farming.",
    icon: <FileText className="text-orange-500 w-6 h-6" />,
    link: "/schemes/category/horticulture"
  },
  {
    title: "🔧 Agriculture Instruments",
    description: "Subsidies and support for tools, machines, and modern equipment.",
    icon: <Wrench className="text-gray-600 w-6 h-6" />,
    link: "/schemes/category/instruments"
  },
  {
    title: "🐄 Allied Sector Schemes",
    description: "Support for animal husbandry, fisheries, and poultry.",
    icon: <Users className="text-blue-600 w-6 h-6" />,
    link: "/schemes/category/allied"
  },
  {
    title: "📋 Other Schemes",
    description: "General support, market reforms, and financial inclusion schemes.",
    icon: <Banknote className="text-yellow-600 w-6 h-6" />,
    link: "/schemes/category/others"
  }
];

const SchemesPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 md:px-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-10">
        🏛️ Government Schemes for Farmers
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {schemeCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition cursor-pointer"
            onClick={() => handleCardClick(category.link)}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                {category.icon}
                {category.title}
              </div>
              <span className="text-sm text-gray-500">➔</span>
            </div>
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchemesPage;
