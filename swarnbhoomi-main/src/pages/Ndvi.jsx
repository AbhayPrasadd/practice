import React, { useState, useEffect } from "react";
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
import { db } from "../firebase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NdviFarms = () => {
  const [user, setUser] = useState(null);
  const [farms, setFarms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((u) => {
      if (u) setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const fetchSavedFarms = async () => {
      if (!user) return;
      const q = query(collection(db, "farmLocation"), where("uid", "==", user.uid));
      const snapshot = await getDocs(q);
      const loadedFarms = snapshot.docs.map(doc => ({
        id: doc.id,
        firestoreId: doc.id,
        ...doc.data(),
        weeks: 4,
        data: [],
        loading: false,
        error: "",
        showPreview: true,
        showMap: false
      }));
      setFarms(loadedFarms);
    };
    fetchSavedFarms();
  }, [user]);

  const addFarm = () => {
    const newFarm = {
      id: Date.now().toString(),
      name: `Farm ${farms.length + 1}`,
      crop: "",
      lat: "",
      lng: "",
      weeks: 4,
      data: [],
      loading: false,
      error: "",
      showPreview: true,
      showMap: false,
    };
    setFarms([...farms, newFarm]);
  };

  const updateFarmField = (id, field, value) => {
    setFarms(prev => prev.map(farm => (farm.id === id ? { ...farm, [field]: value } : farm)));
  };

  const removeFarm = async (id, firestoreId) => {
    setFarms(prev => prev.filter(f => f.id !== id));
    if (firestoreId) {
      try {
        await deleteDoc(doc(db, "farmLocation", firestoreId));
        alert("Farm deleted successfully.");
      } catch (err) {
        console.error("Error deleting farm:", err);
      }
    }
  };

  const saveLocation = async (id) => {
    const farm = farms.find(f => f.id === id);
    if (!farm.name || !farm.lat || !farm.lng || !user) return;
    try {
      const docRef = await addDoc(collection(db, "farmLocation"), {
        uid: user.uid,
        name: farm.name,
        crop: farm.crop,
        lat: farm.lat,
        lng: farm.lng,
        timestamp: new Date()
      });
      updateFarmField(id, "firestoreId", docRef.id);
      alert("Location saved successfully!");
    } catch (err) {
      console.error("Error saving location:", err);
    }
  };

  const fetchTrend = async (id) => {
    updateFarmField(id, "loading", true);
    updateFarmField(id, "error", "");
    updateFarmField(id, "data", []);
    const farm = farms.find(f => f.id === id);

    if (!farm.lat || !farm.lng) {
      updateFarmField(id, "error", "Please enter both latitude and longitude.");
      updateFarmField(id, "loading", false);
      return;
    }

    try {
      const response = await axios.get("https://ndvi-api-server.onrender.com/ndvi-trend", {
        params: { lat: farm.lat, lng: farm.lng, weeks: farm.weeks }
      });
      const trend = response.data.trend.filter(item => item.ndvi !== null);
      updateFarmField(id, "data", trend);
    } catch (err) {
      updateFarmField(id, "error", "Failed to fetch NDVI trend data.");
    } finally {
      updateFarmField(id, "loading", false);
    }
  };

  return (
    <div className="max-w-10xl mx-auto ml-2 ">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2 items-center">
          <button onClick={() => navigate(-1)} className="hover:text-green-700">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-green-800">NDVI Trend Of Your Crop</h1>
        </div>
        <button onClick={addFarm} className="bg-blue-600 text-white px-4 py-2 mt-3 hover:bg-blue-700">➕ Add Farm</button>
      </div>

      {farms.map((farm) => (
        <div key={farm.id} className="mb-10 border border-gray-300 p-4 bg-white">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-green-700">{farm.name}</h2>
            <button onClick={() => removeFarm(farm.id, farm.firestoreId)} className="text-sm text-red-600 hover:underline">🗑️ Remove Farm</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 mb-4">
            <input type="text" placeholder="Farm Name" value={farm.name} onChange={(e) => updateFarmField(farm.id, "name", e.target.value)} className="border p-2" />
            <input type="text" placeholder="Crop Name" value={farm.crop} onChange={(e) => updateFarmField(farm.id, "crop", e.target.value)} className="border p-2" />
            <input type="number" placeholder="Latitude" value={farm.lat} onChange={(e) => updateFarmField(farm.id, "lat", e.target.value)} className="border p-2" />
            <input type="number" placeholder="Longitude" value={farm.lng} onChange={(e) => updateFarmField(farm.id, "lng", e.target.value)} className="border p-2" />
            <input type="number" placeholder="Weeks" value={farm.weeks} onChange={(e) => updateFarmField(farm.id, "weeks", e.target.value)} className="border p-2" />
            <div className="flex gap-2">
              <button onClick={() => updateFarmField(farm.id, "showMap", !farm.showMap)} className="bg-yellow-600 text-white px-3 py-2 hover:bg-yellow-700">🗺️ Pick on Map</button>
              <button onClick={() => saveLocation(farm.id)} className="bg-green-600 text-white px-3 py-2 hover:bg-green-700">💾 Save Location</button>
            </div>
          </div>

          {farm.showMap && isLoaded && (
            <div className="h-[300px] w-full mb-4">
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={{ lat: parseFloat(farm.lat || 25.5), lng: parseFloat(farm.lng || 82.5) }}
                zoom={6}
                onClick={(e) => {
                  const lat = e.latLng.lat();
                  const lng = e.latLng.lng();
                  updateFarmField(farm.id, "lat", lat);
                  updateFarmField(farm.id, "lng", lng);
                }}
              >
                {farm.lat && farm.lng && (
                  <Marker position={{ lat: parseFloat(farm.lat), lng: parseFloat(farm.lng) }} />
                )}
              </GoogleMap>
            </div>
          )}

          <button onClick={() => fetchTrend(farm.id)} className="bg-green-600 text-white px-4 py-2 hover:bg-green-700">Get NDVI Trend</button>
          {farm.loading && <p className="mt-2 text-blue-600">Loading...</p>}
          {farm.error && <p className="mt-2 text-red-600">{farm.error}</p>}

          {farm.data.length > 0 && farm.showPreview && (
            <div className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={farm.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis domain={[0, 1]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="ndvi" stroke="#16a34a" strokeWidth={3} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>

                <div>
                  <h4 className="text-sm font-medium mb-2">NDVI Weekly Images</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {farm.data.map((item, idx) => (
                      <div key={idx} className="border p-2">
                        <p className="text-sm font-medium mb-1">{item.week}</p>
                        <img src={item.thumb_url} alt={item.week} className="w-full h-28 object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-right mt-4">
                <button onClick={() => updateFarmField(farm.id, "showPreview", false)} className="text-sm text-red-600 hover:underline">❌ Close Preview</button>
              </div>
            </div>
          )}

          {!farm.showPreview && farm.data.length > 0 && (
            <div className="mt-4 text-right">
              <button onClick={() => updateFarmField(farm.id, "showPreview", true)} className="text-sm text-blue-600 hover:underline">🔄 Reopen Preview</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NdviFarms;
