import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FileText,
  Banknote,
  Leaf,
  Users,
  Droplet,
  Wrench,
  ArrowLeft,
} from "lucide-react";

const SchemesPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const schemeCategories = [
    {
      title: t("agri_schemes"),
      description: t("agri_schemes_desc"),
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      link: "/dashboard/schemes/agriculture",
    },
    {
      title: t("irrigation_schemes"),
      description: t("irrigation_schemes_desc"),
      icon: <Droplet className="w-10 h-10 text-blue-500" />,
      link: "/dashboard/schemes/irrigation",
    },
    {
      title: t("horticulture_schemes"),
      description: t("horticulture_schemes_desc"),
      icon: <FileText className="w-10 h-10 text-orange-500" />,
      link: "/dashboard/schemes/horticulture",
    },
    {
      title: t("instrument_schemes"),
      description: t("instrument_schemes_desc"),
      icon: <Wrench className="w-10 h-10 text-gray-600" />,
      link: "/dashboard/schemes/machines",
    },
    {
      title: t("allied_schemes"),
      description: t("allied_schemes_desc"),
      icon: <Users className="w-10 h-10 text-blue-600" />,
      link: "/dashboard/schemes/animal",
    },
    {
      title: t("other_schemes"),
      description: t("other_schemes_desc"),
      icon: <Banknote className="w-10 h-10 text-yellow-500" />,
      link: "/dashboard/schemes/others",
    },
  ];

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6">
      {/* Back Button */}
      <div className="flex items-center mb-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-green-700 hover:text-green-900 flex items-center gap-1"
        >
          <ArrowLeft size={20} /> <span className="text-sm">{t("back")}</span>
        </button>
      </div>

      <h3 className="text-2xl font-bold text-center text-green-800 mb-8">
        {t("govt_schemes")}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {schemeCategories.map((category, idx) => (
          <div
            key={idx}
            onClick={() => handleCardClick(category.link)}
            className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition p-4 sm:p-6 cursor-pointer text-center"
          >
            <div className="flex justify-center mb-4">{category.icon}</div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
              {category.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchemesPage;
