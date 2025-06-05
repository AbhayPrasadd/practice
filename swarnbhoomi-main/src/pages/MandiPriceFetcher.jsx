// src/components/MandiPriceFetcher.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import filterData from "../data/mandiData"; // import your full filter data

const commodityImages = {
  Mango: "/commodities/mango.jpg",
  Wheat: "/commodities/wheat.jpg",
  Onion: "/commodities/onion.jpg",
  Tomato: "/commodities/tomato.jpg",
  Potato: "/commodities/potato.jpg",
  "Green Chilli": "/commodities/greenchilli.jpg",
  Soyabean: "/commodities/soyabean.jpg",
  Groundnut: "/commodities/groundnut.jpg",
  Brinjal: "/commodities/brinjal.jpg",
  Apple: "/commodities/apple.jpg",
  Banana: "/commodities/banana.jpg",
  Grapes: "/commodities/grapes.jpg",
  Cabbage: "/commodities/cabbage.jpg",
  Cauliflower: "/commodities/cauliflower.jpg",
  Carrot: "/commodities/carrot.jpg",
  Peas: "/commodities/peas.jpg",
  Garlic: "/commodities/garlic.jpg",
  Ginger: "/commodities/ginger.jpg",
  Papaya: "/commodities/papaya.jpg",
  Pomegranate: "/commodities/pomegranate.jpg"
};


const MandiPriceFetcher = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [commodities, setCommodities] = useState([]);
  const [filters, setFilters] = useState({ state: "", district: "", commodity: "" });
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const uniqueStates = [...new Set(filterData.map(i => i.State))];
    setStates(uniqueStates);
  }, []);

  useEffect(() => {
    if (filters.state) {
      const stateDistricts = filterData
        .filter(i => i.State === filters.state)
        .map(i => i.District);
      setDistricts([...new Set(stateDistricts)]);
      setFilters(prev => ({ ...prev, district: "", commodity: "" }));
      setCommodities([]);
    } else {
      setDistricts([]);
      setCommodities([]);
    }
  }, [filters.state]);

  useEffect(() => {
    if (filters.state && filters.district) {
      const matched = filterData.filter(
        i => i.State === filters.state && i.District === filters.district
      );
      const districtCommodities = [...new Set(matched.map(i => i.Commodity))];
      setCommodities(districtCommodities);
      setFilters(prev => ({ ...prev, commodity: "" }));
    } else {
      setCommodities([]);
    }
  }, [filters.district]);

  const fetchPrices = async () => {
    try {
      const res = await axios.get("http://localhost:3000/mandi-prices", {
        params: {
          state: filters.state,
          district: filters.district,
          commodity: filters.commodity
        }
      });
      setPrices(res.data);
    } catch (err) {
      console.error("Error fetching prices:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">📈 Mandi Price Checker</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <select className="p-2 border rounded" onChange={e => setFilters({ ...filters, state: e.target.value })} value={filters.state}>
          <option value="">Select State</option>
          {states.map((state, idx) => <option key={idx}>{state}</option>)}
        </select>

        <select className="p-2 border rounded" onChange={e => setFilters({ ...filters, district: e.target.value })} value={filters.district}>
          <option value="">Select District</option>
          {districts.map((dist, idx) => <option key={idx}>{dist}</option>)}
        </select>

        <select className="p-2 border rounded" onChange={e => setFilters({ ...filters, commodity: e.target.value })} value={filters.commodity}>
          <option value="">Select Commodity</option>
          {commodities.map((com, idx) => <option key={idx}>{com}</option>)}
        </select>
      </div>

      <button
        onClick={fetchPrices}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={!filters.state || !filters.district || !filters.commodity}
      >
        🔍 Get Prices
      </button>

      {prices.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {prices.map((item, idx) => (
            <div key={idx} className="border rounded shadow p-4 flex flex-col md:flex-row items-start gap-4">
              <img
                src={commodityImages[item.commodity] || "/images/commodities/default.jpg"}
                alt={item.commodity}
                className="w-32 h-32 object-cover rounded"
              />
              <div className="text-sm">
                <p><strong>Commodity:</strong> {item.commodity}</p>
                <p><strong>Market:</strong> {item.market}</p>
                <p><strong>Modal Price:</strong> ₹{item.modal_price}</p>
                <p><strong>Min Price:</strong> ₹{item.min_price}</p>
                <p><strong>Max Price:</strong> ₹{item.max_price}</p>
                <p><strong>Date:</strong> {item.arrival_date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MandiPriceFetcher;
