import React from "react";

const topics = [
  { id: 1, title: "How to Join an FPO", image: "/fpo.jpg" },
  { id: 2, title: "Best Farming Practices", image: "/farming.jpeg" },
  { id: 3, title: "Government Schemes & Subsidies", image: "/schemes.jpeg" },
  { id: 4, title: "Market Trends & Crop Pricing", image: "/cp.png" },
  { id: 5, title: "AI-Based Farming Techniques", image: "/ai_farming.png" },
];

const Learning = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Learning & Guidance Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map(topic => (
          <div 
            key={topic.id} 
            className="border p-4 rounded shadow-lg cursor-pointer transition transform hover:scale-105 hover:shadow-xl"
          >
            <img src={topic.image} alt={topic.title} className="w-full h-50 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2 text-center">{topic.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;