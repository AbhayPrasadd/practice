import React from "react";
import { useNavigate } from "react-router-dom";

const crops = [

  //fruits
  { name: "Mango", image: "/fruits/mango.jpeg" },
  { name: "Apple", image: "/fruits/apple.jpeg" },
  { name: "Guava", image: "/fruits/guava.jpeg" },
  { name: "Banana", image: "/fruits/banana.jpeg" },
  { name: "Pomegranate", image: "/fruits/pomegranate.jpeg" },
  { name: "Papaya", image: "/fruits/papaya.jpeg" },

 //vegetables
  { name: "Onion", image: "/vegetables/onion.jpg" },
  { name: "Tomato", image: "/vegetables/tomato.jpg" },
  { name: "Potato", image: "/vegetables/potato.jpg" },

  { name: "Brinjal", image: "/vegetables/brinjal.jpg" },
  { name: "Cabbage", image: "/vegetables/cabbage.jpg" },
  { name: "Cauliflower", image: "/vegetables/cauliflower.jpg" },
  { name: "Carrot", image: "/vegetables/carrot.jpg" },
  { name: "Peas", image: "/vegetables/peas.jpg" },

  //oilseeds
  { name: "Groundnut", image: "/oilseeds/groundnut.jpeg" },
  { name: "Soyabean", image: "/oilseeds/soyabean.jpeg" },

  //spices
  { name: "Garlic", image: "/spices/garlic.jpeg" },
  { name: "Ginger", image: "/spices/ginger.jpeg" },
  { name: "Green Chilli", image: "/spices/chilli.jpeg" },

  //crops 
  { name: "Wheat", image: "/cereals/wheat.jpeg" },
 
];

const CommoditySelection = () => {
  const navigate = useNavigate();

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
            <p className="mt-4 text-lg font-medium text-gray-700">{crop.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommoditySelection;
