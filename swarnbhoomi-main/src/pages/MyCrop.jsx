import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const selectedCrops = ["Wheat", "Rice", "Potato"]; // User-selected crops from registration

const weeklyPriceTrends = {
  Wheat: [2200, 2250, 2180, 2300, 2350, 2400, 2380],
  Rice: [3100, 3150, 3120, 3180, 3200, 3250, 3300],
  Potato: [2500, 2450, 2550, 2600, 2650, 2700, 2680],
};

const mandiRates = [
  { Commodity: "Wheat", Market: "Ludhiana Mandi", Price: 2400 },
  { Commodity: "Rice", Market: "Kolkata Market", Price: 3300 },
  { Commodity: "Potato", Market: "Mansa", Price: 2700 },
];

const getPriceTrendData = (crop) =>
  weeklyPriceTrends[crop].map((price, index) => ({ day: `Day ${index + 1}`, price }));

const MyCrop = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-green-50 via-white to-lime-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-2 text-green-800">👨‍🌾 Welcome to Your Crop Dashboard</h2>
      <p className="text-center text-lg text-gray-600 mb-10">Get real-time updates and trends for your selected crops.</p>

      {/* Weekly Price Trends */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-green-700 mb-6">📈 Weekly Price Trends</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {selectedCrops.map((crop) => (
            <div key={crop} className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center hover:shadow-2xl transition-all duration-300">
              <h4 className="text-xl font-semibold text-blue-700 mb-3">{crop}</h4>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={getPriceTrendData(crop)}>
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="price" stroke="#38a169" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
      </div>

      {/* Best Mandi Rates */}
      <div>
        <h3 className="text-2xl font-semibold text-green-700 mb-6">🏪 Best Market Prices Today</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mandiRates.map((mandi, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-all">
              <h4 className="text-xl font-bold text-lime-700 mb-1">{mandi.Commodity}</h4>
              <p className="text-base text-gray-600 mb-1">📍 {mandi.Market}</p>
              <p className="text-2xl font-bold text-blue-600">₹{mandi.Price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCrop;
