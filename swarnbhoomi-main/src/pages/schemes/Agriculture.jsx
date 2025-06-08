// src/pages/schemes/Agriculture.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";

const agricultureSchemes = [
  {
    title: "PM–Kisan Samman Nidhi (PM–KISAN)",
    benefit: "₹6,000/year income support in 3 installments",
    description: "Financial assistance to all landholding farmers to support crop and family needs.",
    sources: ["thetractoradda.com", "jaankaarbharat.com", "schemes.vikaspedia.in"],
  },
  {
    title: "Kisan Credit Card (KCC)",
    benefit: "Low-interest credit line for farmers",
    description: "Credit support for crop production and allied activities like dairy, poultry, fisheries.",
    sources: ["jaankaarbharat.com", "thetractoradda.com", "mahindrafarmmachinery.com"],
  },
  {
    title: "Rashtriya Krishi Vikas Yojana (RKVY)",
    benefit: "Grants for modernizing agriculture",
    description: "Helps states invest in farm infrastructure, innovation, and post-harvest tech.",
    sources: ["timesofindia.indiatimes.com", "mahindrafarmmachinery.com"],
  },
  {
    title: "Paramparagat Krishi Vikas Yojana (PKVY)",
    benefit: "Subsidies for organic farming",
    description: "Promotes chemical-free farming with certification and cluster-based models.",
    sources: ["mahindrafarmmachinery.com", "thetractoradda.com"],
  },
  {
    title: "National Mission for Sustainable Agriculture (NMSA)",
    benefit: "Climate-resilient agriculture practices",
    description: "Supports sustainable farming, water conservation, and agroforestry.",
    sources: ["odihort.nic.in", "agricoaching.co.in", "agri-horti.assam.gov.in"],
  },
  {
    title: "PM Kisan Maan Dhan Yojana (PM–KMY)",
    benefit: "₹3,000/month pension after age 60",
    description: "Voluntary pension scheme for small and marginal farmers.",
    sources: ["doh.gujarat.gov.in", "pib.gov.in", "officerspulse.com"],
  },
];

const Agriculture = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-green-700 hover:text-green-900 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-green-800 text-center mb-8">
        🌾 Agriculture Schemes
      </h1>

      {/* Scheme Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {agricultureSchemes.map((scheme, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 hover:border-green-400 hover:shadow-md transition p-5 rounded-md flex justify-between items-center cursor-pointer"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{scheme.title}</h2>
              <p className="text-sm text-green-700 font-medium mt-1">{scheme.benefit}</p>
              <p className="text-sm text-gray-600 mt-1">{scheme.description}</p>
              <p className="text-xs text-gray-400 mt-2">
                Sources: {scheme.sources.join(", ")}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agriculture;
