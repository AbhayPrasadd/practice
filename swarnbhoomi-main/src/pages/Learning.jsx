import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, ArrowLeft } from "lucide-react";

const topics = [
  { id: 1, title: "How to Join an FPO", image: "/learningPage/fpo.png" },
  { id: 2, title: "Best Farming Practices", image: "/learningPage/farming.jpeg" },
  { id: 3, title: "Government Schemes & Subsidies", image: "/learningPage/schemes.jpeg" },
  { id: 4, title: "Market Trends & Crop Pricing", image: "/learningPage/cp.png" },
  { id: 5, title: "AI-Based Farming Techniques", image: "/learningPage/ai_farming.png" },
  { id: 6, title: "Organic Farming Essentials", image: "/learningPage/organic-farming.jpeg" },
  { id: 7, title: "Soil Health Management", image: "/learningPage/soil-health.jpeg" },
  { id: 8, title: "Efficient Water Use & Irrigation", image: "/learningPage/water.jpg" },
];

const Learning = () => {
  const navigate = useNavigate();

  const handleTopicClick = (id) => {
    navigate(`/dashboard/learning/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-5 px-3 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-green-700 hover:text-green-900 flex items-center gap-1"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Back</span>
          </button>
        </div>

        {/* Header */}
        <div className="flex items-center gap-2 mb-6 border-b pb-2 animate-fade-in">
          <BookOpen className="text-green-700 w-6 h-6 sm:w-7 sm:h-7" />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Learning & Guidance Hub
          </h1>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              className="bg-white border border-gray-200 rounded-md hover:border-green-500 transition duration-300 ease-in-out transform hover:-translate-y-1 will-change-transform shadow-sm hover:shadow-md cursor-pointer"
              onClick={() => handleTopicClick(topic.id)}
              style={{
                animation: `fadeInUp 0.4s ease-out`,
                animationDelay: `${index * 80}ms`,
                animationFillMode: "forwards",
              }}
            >
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-28 sm:h-36 object-cover"
              />
              <div className="p-3">
                <h3 className="text-xs sm:text-base font-semibold text-center text-gray-800 leading-snug">
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
