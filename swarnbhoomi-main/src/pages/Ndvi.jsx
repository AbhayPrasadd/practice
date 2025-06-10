import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const Ndvi = () => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [weeks, setWeeks] = useState(4);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTrend = async () => {
    setLoading(true);
    setError("");
    setData([]);

    if (!lat || !lng) {
      setError("Please enter both latitude and longitude.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/ndvi-trend", {
        params: {
          lat,
          lng,
          weeks,
        },
      });

      const trend = response.data.trend.filter((item) => item.ndvi !== null);
      setData(trend);
    } catch (err) {
      console.error("Error fetching NDVI trend:", err);
      setError("Failed to fetch NDVI trend data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">🌱 NDVI Weekly Trend Viewer</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <input
          type="number"
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Longitude"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Weeks (default 4)"
          value={weeks}
          onChange={(e) => setWeeks(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={fetchTrend}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Fetch NDVI Trend
      </button>

      {loading && <p className="mt-4 text-blue-600">Loading NDVI data...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {data.length > 0 && (
        <>
          <div className="mt-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 1]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="ndvi"
                  stroke="#34d399"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <h3 className="text-lg font-medium mt-6 mb-2">🖼️ NDVI Images by Week</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.map((item, index) => (
              <div key={index} className="border p-2 rounded shadow">
                <p className="mb-1 font-medium">{item.week}</p>
                <img src={item.thumb_url} alt={`NDVI ${item.week}`} className="rounded" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Ndvi;
