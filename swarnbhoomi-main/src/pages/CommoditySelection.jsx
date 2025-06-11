import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const crops = [
  { name: "mango", image: "/fruits/mango.jpeg" },
  { name: "apple", image: "/fruits/apple.jpeg" },
  { name: "guava", image: "/fruits/guava.jpeg" },
  { name: "banana", image: "/fruits/banana.jpeg" },
  { name: "pomegranate", image: "/fruits/pomegranate.jpeg" },
  { name: "papaya", image: "/fruits/papaya.jpeg" },

  { name: "onion", image: "/vegetables/onion.jpg" },
  { name: "tomato", image: "/vegetables/tomato.jpg" },
  { name: "potato", image: "/vegetables/potato.jpg" },
  { name: "brinjal", image: "/vegetables/brinjal.jpg" },
  { name: "cabbage", image: "/vegetables/cabbage.jpg" },
  { name: "cauliflower", image: "/vegetables/cauliflower.jpg" },
  { name: "carrot", image: "/vegetables/carrot.jpg" },
  { name: "peas", image: "/vegetables/peas.jpg" },

  { name: "groundnut", image: "/oilseeds/groundnut.jpeg" },
  { name: "soyabean", image: "/oilseeds/soyabean.jpeg" },

  { name: "garlic", image: "/spices/garlic.jpeg" },
  { name: "ginger", image: "/spices/ginger.jpeg" },
  { name: "green_chilli", image: "/spices/chilli.jpeg" },

  { name: "wheat", image: "/cereals/wheat.jpeg" },
];

const CommoditySelection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = (commodity) => {
    navigate(`/dashboard/commodity/${commodity}`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
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
            <p className="mt-4 text-lg font-medium text-gray-700">{t(crop.name)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommoditySelection;