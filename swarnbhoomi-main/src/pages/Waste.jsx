import React, { useState } from "react";
import {
  Recycle,
  Leaf,
  Flame,
  Droplet,
  BookOpen,
  Lightbulb,
  MapPin,
  Download,
  Search,
  PlusCircle
} from "lucide-react";

const wasteOptions = [
  { id: 1, type: "Crop Residue", method: "Composting", use: "Organic Fertilizer", tips: ["Layer green and brown waste", "Keep moist but not wet"] },
  { id: 2, type: "Animal Dung", method: "Biogas Production", use: "Cooking Gas & Slurry", tips: ["Use dome-type digester", "Mix in equal water proportion"] },
  { id: 3, type: "Poultry Waste", method: "Vermicompost", use: "Soil Conditioner", tips: ["Use red wigglers", "Keep in shade and moist"] },
  { id: 4, type: "Fruit Peels", method: "Natural Pesticide", use: "Insect Repellent Spray", tips: ["Mix with neem & ferment", "Spray weekly"] },
];

const Waste = () => {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const [marketList, setMarketList] = useState([]);

  const filtered = wasteOptions.filter(waste =>
    waste.type.toLowerCase().includes(query.toLowerCase()) ||
    waste.method.toLowerCase().includes(query.toLowerCase()) ||
    waste.use.toLowerCase().includes(query.toLowerCase())
  );

  const handleSellClick = (type) => {
    const newEntry = prompt(`Enter your listing for ${type} (e.g., 20kg cow dung at ₹200):`);
    if (newEntry) {
      setMarketList(prev => [...prev, { type, detail: newEntry }]);
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Recycle className="w-6 h-6 text-green-700" />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Waste to Wealth: Smart Waste Solutions</h1>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search by waste type, method or use..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm"
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
                selected?.id === waste.id ? "bg-green-50 border-green-500" : "bg-gray-50"
              }`}
            >
              <Lightbulb className="mx-auto mb-2 w-5 h-5 text-yellow-500" />
              <h3 className="text-sm font-semibold text-gray-700">{waste.type}</h3>
              <p className="text-xs text-gray-500">{waste.method}</p>
            </div>
          ))}
        </div>

        {/* Info Panel */}
        {selected && (
          <div className="bg-green-50 p-4 rounded-lg shadow border border-green-300">
            <h2 className="text-lg font-bold text-green-800 mb-2">
              {selected.method} for {selected.type}
            </h2>
            <p className="text-sm text-gray-700 mb-2">
              Transform <strong>{selected.type}</strong> into <strong>{selected.use}</strong> using <strong>{selected.method}</strong>. Improve soil health, reduce waste and earn more.
            </p>
            <div className="mb-3">
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Practical Tips:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {selected.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <a
                href="/docs/waste2wealth-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-green-700 underline"
              >
                <Download className="w-4 h-4 mr-1" /> Full Guide
              </a>
              <button className="inline-flex items-center text-sm text-blue-700 underline">
                <MapPin className="w-4 h-4 mr-1" /> Find Local Buyer / Support
              </button>
              <button
                onClick={() => handleSellClick(selected.type)}
                className="inline-flex items-center text-sm text-purple-700 underline"
              >
                <PlusCircle className="w-4 h-4 mr-1" /> Add Listing to Sell
              </button>
            </div>
          </div>
        )}

        {/* Marketplace List */}
        {marketList.length > 0 && (
          <div className="mt-8 bg-white p-4 rounded shadow border-t border-gray-200">
            <h3 className="text-md font-semibold mb-2 text-gray-700">Your Waste Listings</h3>
            <ul className="text-sm list-disc list-inside text-gray-600 space-y-1">
              {marketList.map((item, idx) => (
                <li key={idx}><strong>{item.type}:</strong> {item.detail}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Waste;
