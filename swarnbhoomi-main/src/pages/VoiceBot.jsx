import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PhoneCall,
  Mic,
  MessageSquareText,
  CloudSun,
  FileText,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const VoiceBot = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const phoneNumber = "+13239188958";

  return (
    <div className="min-h-[calc(100vh-64px)] p-4 md:p-10 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-700 mb-4 hover:underline text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          {t("Back")}
        </button>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-800">
            {t("Agri Voice Assistant")}
          </h1>
          <Mic className="h-9 w-9 text-green-600" />
        </div>

        {/* Intro */}
        <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
          {t(
            "Our AI-powered IVR (Interactive Voice Response) system allows farmers to access critical agricultural information using just a phone call. Available in regional languages, it's simple, accessible, and tailored to their needs."
          )}
        </p>

        {/* Call to Action */}
        <div className="bg-green-100 border-l-4 border-green-500 p-5 rounded mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="text-green-800 text-lg font-semibold">
            📞 {t("Toll-Free Number")}:{" "}
            <span className="font-bold text-green-900">{phoneNumber}</span>
          </div>
          <a
            href={`tel:${phoneNumber}`}
            className="bg-green-600 hover:bg-green-700 text-white text-base font-medium px-5 py-2 rounded-md shadow transition"
          >
            {t("Call Now")}
          </a>
        </div>

        {/* IVR Explanation */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("What is IVR?")}</h2>
          <p className="text-base text-gray-700 mb-3 leading-relaxed">
            <strong>Traditional IVR</strong> systems play pre-recorded messages and require users to press buttons (e.g., "Press 1 for Crop Advisory").
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            <strong>ML-based IVR</strong> uses speech recognition and natural language understanding so farmers can speak in their own words. Our assistant listens, understands, and responds contextually in their language.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard
            icon={<MessageSquareText className="text-blue-600 h-7 w-7 mt-1" />}
            title="Crop Advisory"
            description="Get voice-guided crop suggestions and best practices."
          />
          <FeatureCard
            icon={<CloudSun className="text-yellow-500 h-7 w-7 mt-1" />}
            title="Weather Forecast"
            description="Know your local weather conditions before sowing."
          />
          <FeatureCard
            icon={<FileText className="text-purple-600 h-7 w-7 mt-1" />}
            title="Government Schemes"
            description="Learn about subsidies and scheme eligibility."
          />
          <FeatureCard
            icon={<AlertTriangle className="text-red-500 h-7 w-7 mt-1" />}
            title="Emergency Help"
            description="Get help for urgent crop disease or pest attacks."
          />
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-base text-gray-500 italic">
            {t("Available in Hindi, Bengali, Marathi, Tamil, and more regional languages.")}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 bg-gray-100 p-5 rounded-xl shadow-sm">
      {icon}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-base text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default VoiceBot;
