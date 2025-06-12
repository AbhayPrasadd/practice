import React, { useState } from "react";

const FpoListing = () => {
  const fpoData = [
    { id: 1, name: "Green Agri FPO", state: "Odisha", district: "Bhubaneswar", services: ["Seeds", "Fertilizers", "Machinery"], contact: "9876543210" },
    { id: 2, name: "Organic Farmers Co-op", state: "Odisha", district: "Cuttack", services: ["Organic Farming", "Market Linkage"], contact: "9123456789" },
    { id: 3, name: "Smart Agro FPO", state: "Maharashtra", district: "Pune", services: ["Seeds", "Fertilizers"], contact: "9001234567" },
    { id: 4, name: "AgriTech Farmers Hub", state: "Punjab", district: "Ludhiana", services: ["Pesticides", "Machinery"], contact: "9876012345" },
    { id: 5, name: "Harvest Growers", state: "Gujarat", district: "Ahmedabad", services: ["Fertilizers", "Market Linkage"], contact: "7889456123" },
    { id: 6, name: "EcoFarmers Network", state: "Karnataka", district: "Bangalore", services: ["Organic Farming", "Seeds"], contact: "8765012398" },
    { id: 7, name: "AgroBoost Cooperative", state: "Tamil Nadu", district: "Chennai", services: ["Training", "Machinery"], contact: "9012345678" },
    { id: 8, name: "Krishi Mitra FPO", state: "Rajasthan", district: "Jaipur", services: ["Soil Testing", "Fertilizers"], contact: "9823456780" },
    { id: 9, name: "Bharat Agri Collective", state: "Madhya Pradesh", district: "Indore", services: ["Machinery", "Market Linkage"], contact: "9812345678" }
  ];

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const states = [...new Set(fpoData.map(fpo => fpo.state))];
  const districts = selectedState ? [...new Set(fpoData.filter(fpo => fpo.state === selectedState).map(fpo => fpo.district))] : [];
  const services = [...new Set(fpoData.flatMap(fpo => fpo.services))];

  const filteredFpos = fpoData.filter(fpo =>
    (!selectedState || fpo.state === selectedState) &&
    (!selectedDistrict || fpo.district === selectedDistrict) &&
    (!selectedService || fpo.services.includes(selectedService))
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
        🌾 Farmer Producer Organizations (FPOs)
      </h2>

      {/* Filter Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">State</label>
          <select className="border p-2 w-full" value={selectedState} onChange={(e) => { setSelectedState(e.target.value); setSelectedDistrict(""); }}>
            <option value="">All States</option>
            {states.map((state, idx) => <option key={idx} value={state}>{state}</option>)}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">District</label>
          <select className="border p-2 w-full" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!selectedState}>
            <option value="">All Districts</option>
            {districts.map((district, idx) => <option key={idx} value={district}>{district}</option>)}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">Service</label>
          <select className="border p-2 w-full" value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
            <option value="">All Services</option>
            {services.map((service, idx) => <option key={idx} value={service}>{service}</option>)}
          </select>
        </div>
      </div>

      <button
        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => { setSelectedState(""); setSelectedDistrict(""); setSelectedService(""); }}
      >
        Reset Filters
      </button>

      {/* FPO Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredFpos.length === 0 ? (
          <p className="text-center text-gray-600 col-span-2 md:col-span-3">No FPOs match your criteria.</p>
        ) : (
          filteredFpos.map((fpo) => (
            <div key={fpo.id} className="p-3 border border-gray-200 shadow bg-white hover:shadow-md transition rounded text-sm sm:text-base flex flex-col justify-between h-full">
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{fpo.name}</h3>
                <p className="text-gray-700 break-words">Address: {fpo.state}, {fpo.district}</p>
                <p className="text-gray-700 break-words">🛠 {fpo.services.join(", ")}</p>
              </div>
              <p className="text-gray-800 break-words mt-1">📞 {fpo.contact}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FpoListing;
