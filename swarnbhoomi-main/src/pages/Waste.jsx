import React, { useState } from "react";
import {
  Recycle,
  Lightbulb,
  MapPin,
  Download,
  Search,
  PlusCircle
} from "lucide-react";
import { useTranslation } from "react-i18next";

const wasteOptions = [
  {
    id: 1,
    type: "Crop Residue",
    method: "Composting",
    use: "Organic Fertilizer",
    tips: ["Layer green and brown waste", "Keep moist but not wet"],
    description:
      "Crop residues like straw and husks can be composted to enrich the soil with nutrients. Composting helps reduce methane emissions and produces a sustainable source of fertilizer."
  },
  {
    id: 2,
    type: "Animal Dung",
    method: "Biogas Production",
    use: "Cooking Gas & Slurry",
    tips: ["Use dome-type digester", "Mix in equal water proportion"],
    description:
      "Animal dung is a valuable bioresource. Through anaerobic digestion, it can produce biogas for fuel and slurry for soil enrichment. It reduces dependency on fossil fuels."
  },
  {
    id: 3,
    type: "Poultry Waste",
    method: "Vermicompost",
    use: "Soil Conditioner",
    tips: ["Use red wigglers", "Keep in shade and moist"],
    description:
      "Poultry droppings are high in nitrogen. Using them in vermicomposting improves microbial activity and enhances soil texture, helping retain moisture."
  },
  {
    id: 4,
    type: "Fruit Peels",
    method: "Natural Pesticide",
    use: "Insect Repellent Spray",
    tips: ["Mix with neem & ferment", "Spray weekly"],
    description:
      "Fruit peels, when combined with neem leaves and fermented, act as a natural pesticide. This eco-friendly spray reduces the need for chemical inputs."
  }
];

const Waste = () => {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const [marketList, setMarketList] = useState([]);
  const { t } = useTranslation();

  const filtered = wasteOptions.filter((waste) =>
    waste.type.toLowerCase().includes(query.toLowerCase()) ||
    waste.method.toLowerCase().includes(query.toLowerCase()) ||
    waste.use.toLowerCase().includes(query.toLowerCase())
  );

  const handleSellClick = (type) => {
    const newEntry = prompt(
      t("enter_listing", { type })
    );
    if (newEntry) {
      setMarketList((prev) => [...prev, { type, detail: newEntry }]);
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Recycle className="w-6 h-6 text-green-700" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {t("waste_title")}
          </h1>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder={t("search_placeholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm"
          />
          <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>

        {/* Waste Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {filtered.map((waste) => (
            <div
              key={waste.id}
              onClick={() => setSelected(waste)}
              className={`cursor-pointer rounded-lg border p-4 text-center shadow-sm hover:shadow-md transition ${
                selected?.id === waste.id ? "bg-green-100 border-green-500" : "bg-white"
              }`}
            >
              <Lightbulb className="mx-auto mb-2 w-5 h-5 text-yellow-500" />
              <h3 className="text-sm font-semibold text-gray-700">
                {t(`waste.${waste.id}.type`)}
              </h3>
              <p className="text-xs text-gray-500">{t(`waste.${waste.id}.method`)}</p>
            </div>
          ))}
        </div>

        {/* Detail Panel */}
        {selected && (
          <div className="bg-white border-l-4 border-green-600 p-5 rounded-lg shadow-sm">
            <h2 className="text-lg font-bold text-green-800 mb-2">
              {t(`waste.${selected.id}.method`)} {t("for")} {t(`waste.${selected.id}.type`)}
            </h2>
            <p className="text-sm text-gray-700 italic mb-3">
              {t(`waste.${selected.id}.description`)}
            </p>
            <h4 className="font-semibold text-gray-800 mb-1">{t("end_use")}</h4>
            <p className="text-sm text-gray-600 mb-3">{t(`waste.${selected.id}.use`)}</p>

            <h4 className="font-semibold text-gray-800 mb-1">{t("tips")}</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {selected.tips.map((_, idx) => (
                <li key={idx}>{t(`waste.${selected.id}.tips.${idx}`)}</li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="/docs/waste2wealth-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-green-700 underline"
              >
                <Download className="w-4 h-4 mr-1" /> {t("full_guide")}
              </a>
              <button className="inline-flex items-center text-sm text-blue-700 underline">
                <MapPin className="w-4 h-4 mr-1" /> {t("find_local_buyer")}
              </button>
              <button
                onClick={() => handleSellClick(selected.type)}
                className="inline-flex items-center text-sm text-purple-700 underline"
              >
                <PlusCircle className="w-4 h-4 mr-1" /> {t("add_listing")}
              </button>
            </div>
          </div>
        )}

        {/* Listings */}
        {marketList.length > 0 && (
          <div className="mt-8 bg-white p-4 rounded shadow border-t border-gray-200">
            <h3 className="text-md font-semibold mb-2 text-gray-700">
              {t("your_listings")}
            </h3>
            <ul className="text-sm list-disc list-inside text-gray-600 space-y-1">
              {marketList.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.type}:</strong> {item.detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Waste;
