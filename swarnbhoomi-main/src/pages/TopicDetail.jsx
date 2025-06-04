import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { topics } from "../data/topics";

const TopicDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = topics.find((t) => t.id === parseInt(id));

  if (!topic) {
    return <div className="p-6 text-red-500">Topic not found.</div>;
  }

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-block text-blue-600 hover:underline"
      >
        ← Back to Topics
      </button>

      {/* Title & Banner */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{topic.title}</h2>
      <img
        src={topic.image}
        alt={topic.title}
        className="w-full max-h-[320px] object-cover rounded-lg shadow mb-8"
      />

      {/* Videos Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {topic.videos.map((video, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">{video.title}</h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow border border-gray-200">
              <iframe
                src={video.url}
                title={video.title}
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicDetail;
