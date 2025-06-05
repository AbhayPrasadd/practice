// src/pages/CommoditySelection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const crops = [
  { name: "Mango", image: "/vegetables/mango.jpg" },
  { name: "Wheat", image: "/vegetables/wheat.jpg" },
  { name: "Onion", image: "/vegetables/onion.jpg" },
  { name: "Tomato", image: "/vegetables/tomato.jpg" },
  { name: "Potato", image: "/vegetables/potato.jpg" },
  { name: "Green Chilli", image: "/vegetables/greenchilli.jpg" },
  { name: "Soyabean", image: "/vegetables/soyabean.jpg" },
  { name: "Groundnut", image: "/vegetables/groundnut.jpg" },
  { name: "Brinjal", image: "/vegetables/brinjal.jpg" },
  { name: "Apple", image: "/vegetables/apple.jpg" },
  { name: "Banana", image: "/vegetables/banana.jpg" },
  { name: "Grapes", image: "/vegetables/grapes.jpg" },
  { name: "Cabbage", image: "/vegetables/cabbage.jpg" },
  { name: "Cauliflower", image: "/vegetables/cauliflower.jpg" },
  { name: "Carrot", image: "/vegetables/carrot.jpg" },
  { name: "Peas", image: "/vegetables/peas.jpg" },
  { name: "Garlic", image: "/vegetables/garlic.jpg" },
  { name: "Ginger", image: "/vegetables/ginger.jpg" },
  { name: "Papaya", image: "/vegetables/papaya.jpg" },
  { name: "Pomegranate", image: "/vegetables/pomegranate.jpg" }
];

const CommoditySelection = () => {
  const navigate = useNavigate();

  const handleClick = (commodity) => {
    // Use full path since this route is nested under /dashboard
    navigate(`/dashboard/commodity/${commodity}`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">🌾 Select a Crop to View Mandi Prices</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {crops.map((crop) => (
          <div
            key={crop.name}
            onClick={() => handleClick(crop.name)}
            className="cursor-pointer p-4 bg-white border rounded shadow hover:shadow-lg transition text-center"
          >
            <img
              src={crop.image}
              alt={crop.name}
              className="w-28 h-28 object-cover mx-auto rounded-full"
            />
            <p className="mt-4 text-lg font-medium text-gray-700">{crop.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommoditySelection;
