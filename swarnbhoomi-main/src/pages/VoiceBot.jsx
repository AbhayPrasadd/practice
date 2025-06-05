import React from "react";
import { PhoneCall, Mic, MessageSquareText, CloudSun, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

const VoiceBot = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-green-800">
            {t("Agri Voice Assistant")}
          </h1>
          <Mic className="h-8 w-8 text-green-600" />
        </div>

        <p className="text-gray-700 text-sm md:text-base mb-4">
          {t("Our voice-based IVR system helps farmers access agricultural advisory, weather forecasts, and government schemes in their local language. Just give us a call and interact with our AI-powered assistant.")}
        </p>

        <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded mb-6">
          <p className="text-green-800 font-medium text-sm md:text-base">
            📞 {t("Toll-Free Number")}: <span className="font-bold">1800-123-AGRI</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 bg-gray-100 p-4 rounded">
            <MessageSquareText className="text-blue-600 h-6 w-6 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">{t("Crop Advisory")}</h3>
              <p className="text-sm text-gray-600">{t("Get voice-guided crop suggestions and best practices.")}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-100 p-4 rounded">
            <CloudSun className="text-yellow-500 h-6 w-6 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">{t("Weather Forecast")}</h3>
              <p className="text-sm text-gray-600">{t("Know your local weather conditions before sowing.")}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-100 p-4 rounded">
            <FileText className="text-purple-600 h-6 w-6 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">{t("Government Schemes")}</h3>
              <p className="text-sm text-gray-600">{t("Learn about subsidies and scheme eligibility.")}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-100 p-4 rounded">
            <PhoneCall className="text-red-500 h-6 w-6 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">{t("Emergency Help")}</h3>
              <p className="text-sm text-gray-600">{t("Get help for urgent crop disease or pest attacks.")}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            {t("Available in Hindi, Bengali, Marathi, and more languages.")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoiceBot;
