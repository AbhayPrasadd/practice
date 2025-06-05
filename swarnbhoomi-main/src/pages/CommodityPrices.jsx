// src/pages/CommodityPrices.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CommodityPrices = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await axios.get("http://localhost:3000/mandi-prices", {
          params: { commodity: name }
        });
        setData(res.data);
      } catch (err) {
        console.error("Error fetching prices:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrices();
  }, [name]);

  const bestMarket = [...data].sort(
    (a, b) => parseFloat(b.modal_price) - parseFloat(a.modal_price)
  )[0];

  const handleRefresh = () => {
    setLoading(true);
    setData([]);
    axios
      .get("http://localhost:3000/mandi-prices", { params: { commodity: name } })
      .then((res) => setData(res.data))
      .catch((err) => console.error("Refresh failed:", err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-green-700 text-center md:text-left">
          📊 Mandi Prices for <span className="capitalize">{name}</span>
        </h1>
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          <button
            onClick={handleRefresh}
            className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
          >
            🔄 Refresh
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            ⬅️ Back
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-lg animate-pulse">⏳ Loading prices...</p>
      ) : data.length === 0 ? (
        <p className="text-center text-red-500 text-lg">⚠️ No price data found for {name}.</p>
      ) : (
        <>
          {bestMarket && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-5 rounded-lg shadow-md mb-8 text-center">
              <h2 className="text-xl font-semibold text-yellow-800">🏆 Best Market</h2>
              <p className="text-lg text-gray-800">
                <strong>{bestMarket.market}</strong> - {bestMarket.district}, {bestMarket.state}
              </p>
              <p className="text-green-700 font-semibold">💰 Modal Price: ₹{bestMarket.modal_price}</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, i) => (
              <div key={i} className="p-5 border rounded-xl shadow-md bg-white hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-green-800 mb-2">{item.market}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>State:</strong> {item.state}</li>
                  <li><strong>District:</strong> {item.district}</li>
                  <li><strong>Modal Price:</strong> ₹{item.modal_price}</li>
                  <li><strong>Min Price:</strong> ₹{item.min_price}</li>
                  <li><strong>Max Price:</strong> ₹{item.max_price}</li>
                  <li><strong>Date:</strong> {item.arrival_date}</li>
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CommodityPrices;
