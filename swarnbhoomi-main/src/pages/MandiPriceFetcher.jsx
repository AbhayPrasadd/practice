import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import filterData from "../data/mandiData";

const commodityImages = {
  // Fruits
  Mango: "/fruits/mango.jpeg",
  Apple: "/fruits/apple.jpeg",
  Guava: "/fruits/guava.jpeg",
  Banana: "/fruits/banana.jpeg",
  Pomegranate: "/fruits/pomegranate.jpeg",
  Papaya: "/fruits/papaya.jpeg",

  // Vegetables
  Onion: "/vegetables/onion.jpg",
  Tomato: "/vegetables/tomato.jpg",
  Potato: "/vegetables/potato.jpg",
  Brinjal: "/vegetables/brinjal.jpg",
  Cabbage: "/vegetables/cabbage.jpg",
  Cauliflower: "/vegetables/cauliflower.jpg",
  Carrot: "/vegetables/carrot.jpg",
  Peas: "/vegetables/peas.jpg",

  // Oilseeds
  Groundnut: "/oilseeds/groundnut.jpeg",
  Soyabean: "/oilseeds/soyabean.jpeg",

  // Spices
  Garlic: "/spices/garlic.jpeg",
  Ginger: "/spices/ginger.jpeg",
  "Green Chilli": "/spices/chilli.jpeg",

  // Cereals / Crops
  Wheat: "/cereals/wheat.jpeg",
};


const MandiPriceFetcher = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [commodities, setCommodities] = useState([]);
  const [filters, setFilters] = useState({ state: "", district: "", commodity: "" });
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const uniqueStates = [...new Set(filterData.map((i) => i.State))];
    setStates(uniqueStates.map((s) => ({ value: s, label: s })));
  }, []);

  useEffect(() => {
    if (filters.state) {
      const stateDistricts = filterData
        .filter((i) => i.State === filters.state)
        .map((i) => i.District);
      const uniqueDistricts = [...new Set(stateDistricts)];
      setDistricts(uniqueDistricts.map((d) => ({ value: d, label: d })));
      setFilters((prev) => ({ ...prev, district: "", commodity: "" }));
      setCommodities([]);
    } else {
      setDistricts([]);
      setCommodities([]);
    }
  }, [filters.state]);

  useEffect(() => {
    if (filters.state && filters.district) {
      const matched = filterData.filter(
        (i) => i.State === filters.state && i.District === filters.district
      );
      const districtCommodities = [...new Set(matched.map((i) => i.Commodity))];
      setCommodities(districtCommodities.map((c) => ({ value: c, label: c })));
      setFilters((prev) => ({ ...prev, commodity: "" }));
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
          commodity: filters.commodity,
        },
      });
      setPrices(res.data);
    } catch (err) {
      console.error("Error fetching prices:", err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">📈 Mandi Price Checker</h2>

      {/* Filters using react-select */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Select
          options={states}
          placeholder="Select State"
          onChange={(option) => setFilters({ ...filters, state: option?.value || "", district: "", commodity: "" })}
          value={filters.state ? { label: filters.state, value: filters.state } : null}
        />

        <Select
          options={districts}
          placeholder="Select District"
          onChange={(option) => setFilters({ ...filters, district: option?.value || "", commodity: "" })}
          value={filters.district ? { label: filters.district, value: filters.district } : null}
          isDisabled={!filters.state}
        />

        <Select
          options={commodities}
          placeholder="Select Commodity"
          onChange={(option) => setFilters({ ...filters, commodity: option?.value || "" })}
          value={filters.commodity ? { label: filters.commodity, value: filters.commodity } : null}
          isDisabled={!filters.district}
        />
      </div>

      <div className="text-center mb-6">
        <button
          onClick={fetchPrices}
          className="px-6 py-2 bg-green-600 text-white text-sm hover:bg-green-700 transition"
          disabled={!filters.state || !filters.district || !filters.commodity}
        >
          🔍 Get Prices
        </button>
      </div>

      {/* Results */}
      {prices.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prices.map((item, idx) => (
            <div key={idx} className="border border-gray-200 p-4 bg-gray-50 flex gap-4">
              <img
                src={commodityImages[item.commodity] || "/images/commodities/default.jpg"}
                alt={item.commodity}
                className="w-28 h-28 object-cover"
              />
              <div className="text-sm text-gray-700">
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
