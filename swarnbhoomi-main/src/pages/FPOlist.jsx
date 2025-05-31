import React, { useState } from "react";

const FpoListing = () => {
    // Dummy FPO Data (Replace with API data)
    const fpoData = [
        { id: 1, name: "Green Agri FPO", state: "Odisha", district: "Bhubaneswar", services: ["Seeds", "Fertilizers", "Machinery"], contact: "+91 9876543210" },
        { id: 2, name: "Organic Farmers Co-op", state: "Odisha", district: "Cuttack", services: ["Organic Farming Training", "Market Linkage"], contact: "+91 9123456789" },
        { id: 3, name: "Smart Agro FPO", state: "Maharashtra", district: "Pune", services: ["Seeds", "Fertilizers"], contact: "+91 9001234567" },
        { id: 4, name: "AgriTech Farmers Hub", state: "Punjab", district: "Ludhiana", services: ["Pesticides", "Machinery"], contact: "+91 9876012345" },
        { id: 5, name: "Harvest Growers", state: "Gujarat", district: "Ahmedabad", services: ["Fertilizers", "Market Linkage"], contact: "+91 7889456123" },
        { id: 6, name: "EcoFarmers Network", state: "Karnataka", district: "Bangalore", services: ["Organic Farming", "Seeds"], contact: "+91 8765012398" },
        { id: 7, name: "AgroBoost Cooperative", state: "Tamil Nadu", district: "Chennai", services: ["Training", "Machinery", "Seeds"], contact: "+91 9012345678" }
    ];

    // State for Filters
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedService, setSelectedService] = useState("");

    // Get unique values for filters
    const states = [...new Set(fpoData.map(fpo => fpo.state))];
    const districts = selectedState ? [...new Set(fpoData.filter(fpo => fpo.state === selectedState).map(fpo => fpo.district))] : [];
    const services = [...new Set(fpoData.flatMap(fpo => fpo.services))];

    // Filter logic
    const filteredFpos = fpoData.filter(fpo =>
        (!selectedState || fpo.state === selectedState) &&
        (!selectedDistrict || fpo.district === selectedDistrict) &&
        (!selectedService || fpo.services.includes(selectedService))
    );

    return (
        <div className="p-6 max-w-10xl mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">🌾 Farmer Producer Organizations (FPOs)</h2>

            {/* Filter Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <select className="border p-2 rounded w-full" value={selectedState} onChange={(e) => { setSelectedState(e.target.value); setSelectedDistrict(""); }}>
                    <option value="">All States</option>
                    {states.map((state, index) => <option key={index} value={state}>{state}</option>)}
                </select>

                <select className="border p-2 rounded w-full" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!selectedState}>
                    <option value="">All Districts</option>
                    {districts.map((district, index) => <option key={index} value={district}>{district}</option>)}
                </select>

                <select className="border p-2 rounded w-full" value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                    <option value="">All Services</option>
                    {services.map((service, index) => <option key={index} value={service}>{service}</option>)}
                </select>
            </div>

            {/* Reset Button */}
            <button className="mb-6 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition" onClick={() => { setSelectedState(""); setSelectedDistrict(""); setSelectedService(""); }}>
                Reset Filters
            </button>

            {/* FPO Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFpos.length === 0 ? (
                    <p className="text-gray-500 col-span-3">No FPOs match your criteria.</p>
                ) : (
                    filteredFpos.map((fpo) => (
                        <div key={fpo.id} className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800">{fpo.name}</h3>
                            <p className="text-gray-700 mt-1">📍 {fpo.state}, {fpo.district}</p>
                            <p className="text-gray-700 mt-1">🛠 Services: {fpo.services.join(", ")}</p>
                            <p className="text-gray-700 mt-1">📞 {fpo.contact}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FpoListing;
