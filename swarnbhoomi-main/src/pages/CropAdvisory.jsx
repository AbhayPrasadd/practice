import React, { useState } from "react";

const CropAdvisory = () => {
  const [selectedState, setSelectedState] = useState("");
  const [location, setLocation] = useState("");
  const [cropType, setCropType] = useState("");
  const [cropName, setCropName] = useState("");
  const [activity, setActivity] = useState("");
  const [advisory, setAdvisory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const stateDistrictMap = {
    "Punjab": ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda"],
    "Haryana": ["Ambala", "Hisar", "Rohtak", "Panipat", "Gurgaon"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangalore", "Hubli", "Belgaum"],
    "West Bengal": ["Kolkata", "Howrah", "Darjeeling", "Siliguri", "Asansol"],
    "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Ajmer"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Balasore"],
    "Jharkhand": ["Ranchi", "Dhanbad", "Jamshedpur", "Hazaribagh", "Bokaro"],
    "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Korba", "Jagdalpur"],
    "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Guntur", "Tirupati", "Kurnool"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kannur"],
    "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"],
    "Himachal Pradesh": ["Shimla", "Mandi", "Kangra", "Solan", "Bilaspur"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Roorkee", "Almora"],
    "Goa": ["Panaji", "Margao", "Vasco", "Mapusa"],
    "Delhi": ["New Delhi", "Dwarka", "Rohini", "Saket", "Karol Bagh"]
  };

  const crops = {
    Vegetable: ["Tomato", "Potato", "Brinjal", "Cabbage"],
    Cereal: ["Wheat", "Rice", "Maize", "Barley"],
    Fruit: ["Mango", "Banana", "Apple", "Orange"]
  };

  const API_URL = "https://ab-l3cf.onrender.com/api/advisory";

  const fetchAdvisory = async () => {
    if (!location || !cropType || !cropName || !activity) {
      setError("⚠️ Please fill in all fields before requesting advisory.");
      return;
    }

    setLoading(true);
    setError(null);
    setAdvisory(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location, cropType, cropName, activity })
      });

      if (!response.ok) {
        throw new Error("Server error. Try again later.");
      }

      const data = await response.json();
      processAdvisory(data.advisory);
    } catch (error) {
      setError(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const processAdvisory = (text) => {
    if (!text) return;

    // Remove * and split lines
    const cleanText = text.replace(/\*/g, "").trim();
    const lines = cleanText.split("\n").map(line => line.trim()).filter(Boolean);

    const actionLines = lines.filter(line =>
      line.includes("✅") || /farmer|action|perform|apply|use|spray|follow/i.test(line)
    );

    const generalLines = lines.filter(line => !actionLines.includes(line));

    const createList = (items) =>
      `<ul class="list-disc ml-5 space-y-1">${items.map(item => `<li>${item}</li>`).join("")}</ul>`;

    setAdvisory({
      generalText: generalLines.length > 0
        ? createList(generalLines)
        : "<p>No general advisory available.</p>",
      actionText: actionLines.length > 0
        ? createList(actionLines)
        : "<ul><li>Please follow standard practices for the activity.</li></ul>"
    });
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg border">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
          🌾 Crop Advisory System
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setLocation("");
            }}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="">🏞️ Select State</option>
            {Object.keys(stateDistrictMap).map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            disabled={!selectedState}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="">📍 Select District</option>
            {selectedState &&
              stateDistrictMap[selectedState].map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
          </select>

          <select
            value={cropType}
            onChange={(e) => {
              setCropType(e.target.value);
              setCropName("");
            }}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="">🌱 Crop Type</option>
            {Object.keys(crops).map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <select
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            disabled={!cropType}
          >
            <option value="">🌾 Crop Name</option>
            {cropType &&
              crops[cropType].map((crop) => (
                <option key={crop} value={crop}>{crop}</option>
              ))}
          </select>

          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="">🚜 Activity</option>
            <option value="Sowing">Sowing</option>
            <option value="Harvesting">Harvesting</option>
            <option value="Growth">Growth</option>
          </select>
        </div>

        <div className="text-center">
          <button
            onClick={fetchAdvisory}
            className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition"
          >
            🔍 Get Advisory
          </button>
        </div>

        {loading && (
          <p className="mt-6 animate-pulse text-green-600 text-center text-lg">⏳ Fetching advisory...</p>
        )}
        {error && (
          <p className="text-red-600 mt-4 text-center text-lg">{error}</p>
        )}

        {advisory && (
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-lg">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-5 rounded-lg">
              <h3 className="font-semibold text-2xl mb-2">📢 General Advisory</h3>
              <div dangerouslySetInnerHTML={{ __html: advisory.generalText }}></div>
            </div>

            <div className="bg-green-100 border-l-4 border-green-500 p-5 rounded-lg text-green-800">
              <h3 className="font-semibold text-2xl mb-2">🚜 Farmer Actions</h3>
              <div dangerouslySetInnerHTML={{ __html: advisory.actionText }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropAdvisory;
