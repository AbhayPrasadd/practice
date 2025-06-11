import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { topics } from "../data/topics";
import { Tab } from "@headlessui/react";
import { ArrowLeft, FileText, Video, HelpCircle } from "lucide-react";

const TopicDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = topics.find((t) => t.id === parseInt(id));

  if (!topic) {
    return <div className="p-4 sm:p-6 text-red-500">Topic not found.</div>;
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        {/* Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:underline text-sm sm:text-base"
          >
            <ArrowLeft size={18} /> Back to Topics
          </button>
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 text-center sm:text-left">
          {topic.title}
        </h2>

        {/* Tab Navigation */}
        <Tab.Group>
          <Tab.List className="flex flex-wrap sm:flex-nowrap justify-start gap-2 sm:gap-4 border-b border-gray-300 pb-2 overflow-x-auto">
            {["Videos", "Downloads", "FAQs"].map((label, idx) => (
              <Tab key={idx} as={React.Fragment}>
                {({ selected }) => (
                  <button
                    className={`px-3 py-2 text-xs sm:text-sm rounded-t font-medium transition border-b-2 flex items-center gap-1 whitespace-nowrap ${
                      selected
                        ? "text-green-700 border-green-600"
                        : "text-gray-600 border-transparent hover:border-gray-300"
                    }`}
                  >
                    {label === "Videos" && <Video className="w-4 h-4" />}
                    {label === "Downloads" && <FileText className="w-4 h-4" />}
                    {label === "FAQs" && <HelpCircle className="w-4 h-4" />}
                    {label}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-4">
            <Tab.Panel>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {topic.videos?.length > 0 ? (
                  topic.videos.map((video, index) => (
                    <div key={index} className="bg-white rounded shadow p-3">
                      <h4 className="text-sm font-semibold mb-2 text-gray-800">{video.title}</h4>
                      <div className="aspect-video rounded overflow-hidden">
                        <iframe
                          src={video.url}
                          title={video.title}
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-600">No videos available.</p>
                )}
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="bg-white p-3 sm:p-4 rounded shadow text-sm text-gray-700">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a href="/docs/sample-guide.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                      Download PDF Guide
                    </a>
                  </li>
                  <li>
                    Additional resources coming soon.
                  </li>
                </ul>
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="bg-white p-3 sm:p-4 rounded shadow text-sm text-gray-700 space-y-3">
                <div>
                  <strong>Q: What is an FPO?</strong>
                  <p>A: FPO stands for Farmer Producer Organisation, which helps small farmers to organize and grow collectively.</p>
                </div>
                <div>
                  <strong>Q: How can I join?</strong>
                  <p>A: Contact your local agriculture department or registered FPOs in your district.</p>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default TopicDetail;