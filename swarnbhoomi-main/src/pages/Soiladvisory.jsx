import { useState } from "react";

const API_URL = "https://ab-l3cf.onrender.com/api/soil-advisory";

const stateDistricts = {
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

const SoilAdvisory = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [location, setLocation] = useState("");
  const [soilType, setSoilType] = useState("");
  const [concern, setConcern] = useState("");
  const [soilPH, setSoilPH] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [moisture, setMoisture] = useState("");
  const [advisoryPoints, setAdvisoryPoints] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setDistrict("");
    setLocation("");
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);
    setLocation(`${selectedDistrict}, ${state}`);
  };

  const fetchAdvisory = async () => {
    if (!location || !soilType || !concern || !soilPH || !nitrogen || !phosphorus || !potassium || !moisture) {
      setError("⚠️ Please fill in all fields before requesting advisory.");
      return;
    }

    setLoading(true);
    setError(null);
    setAdvisoryPoints([]);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          location,
          soilType,
          concern,
          soilPH,
          nitrogen,
          phosphorus,
          potassium,
          moisture
        })
      });

      if (!response.ok) throw new Error("Server error. Try again later.");

      const data = await response.json();
      const points = data.advisory.split(/[\n.]+/).map((p) => p.trim()).filter(Boolean);
      setAdvisoryPoints(points);
    } catch (err) {
      setError(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-green-700 text-center"> </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-semibold">State</label>
          <select value={state} onChange={handleStateChange} className="w-full px-2 py-2 border text-sm">
            <option value="">Select State</option>
            {Object.keys(stateDistricts).map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold">District</label>
          <select
            value={district}
            onChange={handleDistrictChange}
            disabled={!state}
            className="w-full px-2 py-2 border text-sm"
          >
            <option value="">Select District</option>
            {state && stateDistricts[state].map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold">Soil Type</label>
          <select value={soilType} onChange={(e) => setSoilType(e.target.value)} className="w-full px-2 py-2 border text-sm">
            <option value="">Select Soil Type</option>
            <option value="sandy">Sandy</option>
            <option value="clay">Clay</option>
            <option value="loamy">Loamy</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold">Concern</label>
          <select value={concern} onChange={(e) => setConcern(e.target.value)} className="w-full px-2 py-2 border text-sm">
            <option value="">Select Concern</option>
            <option value="fertility">Fertility</option>
            <option value="water-retention">Water Retention</option>
            <option value="ph-balance">pH Balance</option>
          </select>
        </div>

        <input type="number" value={soilPH} onChange={(e) => setSoilPH(e.target.value)} placeholder="Soil pH" className="w-full px-2 py-2 border text-sm" />
        <input type="number" value={moisture} onChange={(e) => setMoisture(e.target.value)} placeholder="Moisture (%)" className="w-full px-2 py-2 border text-sm" />
        <input type="number" value={nitrogen} onChange={(e) => setNitrogen(e.target.value)} placeholder="Nitrogen" className="w-full px-2 py-2 border text-sm" />
        <input type="number" value={phosphorus} onChange={(e) => setPhosphorus(e.target.value)} placeholder="Phosphorus" className="w-full px-2 py-2 border text-sm" />
        <input type="number" value={potassium} onChange={(e) => setPotassium(e.target.value)} placeholder="Potassium" className="w-full px-2 py-2 border text-sm" />
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={fetchAdvisory}
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 text-sm rounded hover:bg-green-700"
        >
          {loading ? "Fetching Advisory..." : "Get Advisory"}
        </button>
        {error && <p className="text-red-500 mt-2 font-medium text-sm">{error}</p>}
      </div>

      {advisoryPoints.length > 0 && (
        <div className="bg-green-50 px-4 py-6 mt-6">
          <h3 className="text-xl font-semibold mb-4 text-green-800">📝 Advisory Points</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm">
            {advisoryPoints.map((point, index) => <li key={index}>{point}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SoilAdvisory;
