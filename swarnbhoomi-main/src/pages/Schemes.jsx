import React from "react";
import { FileText, Banknote, ShieldCheck, Landmark } from "lucide-react";

const schemes = [
  {
    name: "Pradhan Mantri Kisan MaanDhan Yojana (PM-KMY)",
    year: 2019,
    description:
      "A contributory pension scheme for small and marginal farmers, providing a monthly pension of ₹3,000 upon reaching 60 years of age.",
    category: "Pension",
    link: "#",
    icon: <ShieldCheck className="text-green-600 h-6 w-6" />,
  },
  {
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    year: 2019,
    description:
      "Provides eligible farmers with ₹6,000 annually in three equal installments to support their financial needs.",
    category: "Subsidy",
    link: "#",
    icon: <Banknote className="text-yellow-500 h-6 w-6" />,
  },
  {
    name: "Soil Health Card Scheme",
    year: 2015,
    description:
      "Provides farmers with information on the nutrient status of their soil and recommendations for improving soil health.",
    category: "Soil Health",
    link: "#",
    icon: <FileText className="text-blue-600 h-6 w-6" />,
  },
  {
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    year: 2016,
    description:
      "Offers comprehensive crop insurance against non-preventable natural risks from pre-sowing to post-harvest stages.",
    category: "Insurance",
    link: "#",
    icon: <ShieldCheck className="text-red-500 h-6 w-6" />,
  },
  {
    name: "Kisan Credit Card (KCC) Scheme",
    year: 1998,
    description:
      "Provides farmers with timely access to credit for agricultural and allied activities.",
    category: "Credit",
    link: "#",
    icon: <Banknote className="text-purple-600 h-6 w-6" />,
  },
  {
    name: "National Agriculture Market (e-NAM)",
    year: 2016,
    description:
      "A pan-India electronic trading portal that connects farmers with markets for better price realization.",
    category: "Market",
    link: "#",
    icon: <Landmark className="text-orange-600 h-6 w-6" />,
  },
];

const SchemesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-10">
        Government Schemes for Farmers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md border border-gray-100 transition"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-white bg-green-600 rounded-full px-3 py-0.5">
                {scheme.category}
              </span>
              {scheme.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              {scheme.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">Launched: {scheme.year}</p>
            <p className="text-sm text-gray-700">{scheme.description}</p>
            <a
              href={scheme.link}
              className="mt-3 inline-block text-sm text-blue-600 font-medium hover:underline"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchemesPage;
