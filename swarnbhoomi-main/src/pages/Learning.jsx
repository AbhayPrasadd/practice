import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";

const topics = [
  { id: 1, title: "How to Join an FPO", image: "/fpo.jpg" },
  { id: 2, title: "Best Farming Practices", image: "/farming.jpeg" },
  { id: 3, title: "Government Schemes & Subsidies", image: "/schemes.jpeg" },
  { id: 4, title: "Market Trends & Crop Pricing", image: "/cp.png" },
  { id: 5, title: "AI-Based Farming Techniques", image: "/ai_farming.png" },
  { id: 6, title: "Organic Farming Essentials", image: "/organic.jpeg" },
  { id: 7, title: "Soil Health Management", image: "/soil.png" },
  { id: 8, title: "Efficient Water Use & Irrigation", image: "/irrigation.jpg" },
];

const Learning = () => {
  const navigate = useNavigate();

  const handleTopicClick = (id) => {
    navigate(`/dashboard/learning/${id}`);
  };

  return (
    <div className="min-h-screen p-3 sm:p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <BookOpen className="text-green-700 w-6 h-6 sm:w-7 sm:h-7" />
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">
            Learning & Guidance Hub
          </h1>
        </div>

        {/* Topic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-transform hover:scale-[1.02] overflow-hidden cursor-pointer"
              onClick={() => handleTopicClick(topic.id)}
            >
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-28 sm:h-36 object-cover"
              />
              <div className="p-2 sm:p-4">
                <h3 className="text-xs sm:text-base md:text-lg font-semibold text-center text-gray-800 leading-tight">
                  {topic.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learning;
