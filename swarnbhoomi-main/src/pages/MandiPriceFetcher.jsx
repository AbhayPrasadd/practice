// src/components/MandiPriceFetcher.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import filterData from "../data/mandiData"; // import your full filter data

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
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Commodity</th>
                <th className="p-2">Market</th>
                <th className="p-2">Modal Price</th>
                <th className="p-2">Min Price</th>
                <th className="p-2">Max Price</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2">{item.commodity}</td>
                  <td className="p-2">{item.market}</td>
                  <td className="p-2">{item.modal_price}</td>
                  <td className="p-2">{item.min_price}</td>
                  <td className="p-2">{item.max_price}</td>
                  <td className="p-2">{item.arrival_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MandiPriceFetcher;
