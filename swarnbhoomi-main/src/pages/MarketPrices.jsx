import { useState } from "react";

const marketData = [
  { State: "Gujarat", District: "Gandhinagar", Market: "Mansa", Commodity: "Potato", Price: "₹2500", Image: "/vegetables/potato.jpg"},
  { State: "Maharashtra", District: "Mumbai", Market: "Vashi", Commodity: "Onion", Price: "₹2000", Image: "/vegetables/onion.jpg" },
  { State: "Andhra Pradesh", District: "Chittoor", Market: "Chittoor Yard", Commodity: "Tomato", Price: "₹1300", Image: "/vegetables/tomato.jpg" },
  { State: "Punjab", District: "Ludhiana", Market: "Ludhiana Mandi", Commodity: "Wheat", Price: "₹2200", Image: "/vegetables/wheat.jpg"},
  { State: "Rajasthan", District: "Jaipur", Market: "Jaipur Mandi", Commodity: "Mustard", Price: "₹2800", Image: "/vegetables/mustard.jpg" },
  { State: "West Bengal", District: "Kolkata", Market: "Kolkata Market", Commodity: "Rice", Price: "₹3100", Image: "/vegetables/rice.jpg"},
  { State: "Uttar Pradesh", District: "Lucknow", Market: "Lucknow Market", Commodity: "Sugarcane", Price: "₹1800", Image: "/vegetables/sugarcane.jpg" },
  { State: "Madhya Pradesh", District: "Bhopal", Market: "Bhopal Mandi", Commodity: "Soybean", Price: "₹2600", Image: "/vegetables/soyabean.jpg"},
  { State: "Tamil Nadu", District: "Chennai", Market: "Chennai Yard", Commodity: "Coconut", Price: "₹3000", Image: "/vegetables/coconut.jpg" }
];

const MarketPrices = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [commodity, setCommodity] = useState("");

  const filteredData = marketData.filter(
    (item) =>
      (state ? item.State === state : true) &&
      (district ? item.District === district : true) &&
      (commodity ? item.Commodity === commodity : true)
  );

  const resetFilters = () => {
    setState("");
    setDistrict("");
    setCommodity("");
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">📈 Mandi Prices Today</h2>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-12 justify-center mb-8">
        <select value={state} onChange={(e) => setState(e.target.value)} className="p-3 border rounded-lg text-lg">
          <option value="">📍 Select State</option>
          {[...new Set(marketData.map((item) => item.State))].map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>

        <select value={district} onChange={(e) => setDistrict(e.target.value)} className="p-3 border rounded-lg text-lg">
          <option value="">🏙️ Select District</option>
          {[...new Set(marketData.filter(item => state ? item.State === state : true).map((item) => item.District))].map((district) => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>

        <select value={commodity} onChange={(e) => setCommodity(e.target.value)} className="p-3 border rounded-lg text-lg">
          <option value="">🌾 Select Commodity</option>
          {[...new Set(marketData.map((item) => item.Commodity))].map((commodity) => (
            <option key={commodity} value={commodity}>{commodity}</option>
          ))}
        </select>

        <button onClick={resetFilters} className="p-3 bg-red-600 text-white rounded-lg text-lg font-semibold hover:bg-red-700">
          🔄 Reset Filters
        </button>
      </div>
      
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-6 flex flex-col items-center bg-white hover:shadow-xl transition-shadow h-80">
              <img src={item.Image} alt={item.Commodity} className="w-48 h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-3">{item.Commodity} - {item.Price}</h3>
              <p className="text-gray-600 mt-1">📍 {item.State}, {item.District}</p>
              <p className="text-blue-700 mt-1 font-medium">🏬 Market: {item.Market}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-lg col-span-3 text-gray-700">⚠️ No data available for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default MarketPrices;
