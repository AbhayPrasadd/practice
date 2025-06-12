import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import filterData from "../data/mandiData";

const MandiPriceFetcher = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [commodities, setCommodities] = useState([]);
  const [filters, setFilters] = useState({ state: "", district: "", commodity: "" });
  const [prices, setPrices] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const uniqueStates = [...new Set(filterData.map(i => i.State))];
    setStates(uniqueStates.map(s => ({ value: s, label: s })));
  }, []);

  useEffect(() => {
    if (filters.state) {
      const stateDistricts = filterData
        .filter(i => i.State === filters.state)
        .map(i => i.District);
      const uniqueDistricts = [...new Set(stateDistricts)];
      setDistricts(uniqueDistricts.map(d => ({ value: d, label: d })));
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
      setCommodities(districtCommodities.map(c => ({ value: c, label: c })));
      setFilters(prev => ({ ...prev, commodity: "" }));
    } else {
      setCommodities([]);
    }
  }, [filters.district]);

  const fetchPrices = async () => {
    try {
      setMessage("");
      const res = await axios.get("https://swarnabhumi-backend.onrender.com/api/mandi-prices", {
        params: {
          state: filters.state,
          district: filters.district,
          commodity: filters.commodity
        }
      });
      if (res.data.length === 0) {
        setMessage("⚠️ No data found for this combination.");
      }
      setPrices(res.data);
    } catch (err) {
      console.error("Error fetching prices:", err);
      setMessage("❌ Failed to fetch prices.");
    }
  };

  // Compact select style
  const compactSelectStyle = {
    control: (base) => ({
      ...base,
      borderRadius: 0,
      minHeight: "36px",
      fontSize: "14px",
      padding: "0",
    }),
    menu: (base) => ({
      ...base,
      fontSize: "14px"
    }),
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-white shadow ">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-green-700">📈 Mandi Price Checker</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Select
          styles={compactSelectStyle}
          options={states}
          placeholder="State"
          onChange={(option) => setFilters({ ...filters, state: option?.value || "", district: "", commodity: "" })}
          value={filters.state ? { label: filters.state, value: filters.state } : null}
        />
        <Select
          styles={compactSelectStyle}
          options={districts}
          placeholder="District"
          onChange={(option) => setFilters({ ...filters, district: option?.value || "", commodity: "" })}
          value={filters.district ? { label: filters.district, value: filters.district } : null}
          isDisabled={!filters.state}
        />
        <Select
          styles={compactSelectStyle}
          options={commodities}
          placeholder="Commodity"
          onChange={(option) => setFilters({ ...filters, commodity: option?.value || "" })}
          value={filters.commodity ? { label: filters.commodity, value: filters.commodity } : null}
          isDisabled={!filters.district}
        />
      </div>

      <div className="text-center mb-4">
        <button
          onClick={fetchPrices}
          className={`px-6 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition ${
            (!filters.state || !filters.district || !filters.commodity) ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!filters.state || !filters.district || !filters.commodity}
        >
          🔍 Get Prices
        </button>
      </div>

      {message && <p className="text-center text-red-600 mb-4">{message}</p>}

      {prices.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-md overflow-hidden">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-2 text-left">Commodity</th>
                <th className="p-2 text-left">Market</th>
                <th className="p-2 text-left">Modal Price</th>
                <th className="p-2 text-left">Min Price</th>
                <th className="p-2 text-left">Max Price</th>
                <th className="p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((item, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="p-2">{item.commodity}</td>
                  <td className="p-2">{item.market}</td>
                  <td className="p-2">₹{item.modal_price}</td>
                  <td className="p-2">₹{item.min_price}</td>
                  <td className="p-2">₹{item.max_price}</td>
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
