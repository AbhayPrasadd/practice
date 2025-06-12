import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { doc, getDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

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
  Rice: "/cereals/rice.jpeg",
  Bajra: "/cereals/barley.jpeg",
};

const MyCrop = () => {
  const [selectedCrops, setSelectedCrops] = useState([]);
  const [sowingDates, setSowingDates] = useState({});
  const [loading, setLoading] = useState(true);
  const [cropGuideData, setCropGuideData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserCrops = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const cropMap = data.primaryCrops;
          const dates = data.sowingDates || {};

          if (cropMap && Object.keys(cropMap).length > 0) {
            const allCrops = Object.values(cropMap).flat();
            setSelectedCrops(allCrops);
            setSowingDates(dates);
          } else {
            alert("⚠️ You haven't selected any crops yet.");
            navigate("/dashboard/profile");
          }
        }
      } catch (error) {
        console.error("Error fetching user crops:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCrops();
  }, [navigate]);

  useEffect(() => {
    const fetchCropGuide = async () => {
      const snap = await getDocs(collection(db, "cropGuide"));
      const guide = {};
      snap.docs.forEach((doc) => {
        const data = doc.data();
        guide[data.name] = data;
      });
      setCropGuideData(guide);
    };
    fetchCropGuide();
  }, []);

  const handleSowingDateChange = (crop, date) => {
    setSowingDates((prev) => ({ ...prev, [crop]: date }));
  };

  const handleSaveDate = async (crop) => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      const docRef = doc(db, "users", user.uid);
      const updated = { ...sowingDates };
      await updateDoc(docRef, { sowingDates: updated });
      alert(`✅ Saved sowing date for ${crop}`);
    } catch (error) {
      console.error("Error saving sowing date:", error);
    }
  };

  const calculateWeeksSinceSowing = (dateStr) => {
    const diff = dayjs().diff(dayjs(dateStr), "week");
    return Math.max(diff, 0);
  };

  if (loading) {
    return <p className="text-center mt-10 text-lg animate-pulse">⏳ Loading your crop data...</p>;
  }

  return (
    <div className="p-4 min-h-screen">
      {/* Back button */}
      <div className="flex items-center mb-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-green-700 hover:text-green-900 text-sm flex items-center gap-1"
        >
          ← Back to Dashboard
        </button>
      </div>

      <h2 className="text-2xl font-bold text-center text-green-800 mb-2">🌾 My Crop Guidance</h2>
      <p className="text-center text-gray-600 mb-6">Enter sowing date to get weekly insights and care tips.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedCrops.map((crop) => {
          const sowingDate = sowingDates[crop] || "";
          const week = sowingDate ? calculateWeeksSinceSowing(sowingDate) : null;
          const info = cropGuideData[crop];

          const cropImage = info?.image || commodityImages[crop] || "/vegetables/default.jpg";

          return (
            <div
              key={crop}
              className=" border-gray-200 shadow-md p-4  flex flex-col justify-between"
            >
              <div>
                <img
                  src={cropImage}
                  alt={crop}
                  className="w-full h-44 object-cover rounded mb-3 border"
                />
                <h4 className="text-lg font-semibold text-green-700 mb-2">🌿 {crop}</h4>

                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="date"
                    value={sowingDate}
                    onChange={(e) => handleSowingDateChange(crop, e.target.value)}
                    className="flex-grow border px-2 py-1 text-sm rounded"
                  />
                  <button
                    onClick={() => handleSaveDate(crop)}
                    className="bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4 rounded"
                  >
                    💾 Save
                  </button>
                </div>

                {info && (
                  <div className="text-sm text-gray-700 space-y-2">
                    <p><strong>📘 About:</strong> {info.description}</p>
                    {week !== null && info.weeklyGuide && week < info.weeklyGuide.length && (
                      <p className="text-blue-700">
                        📅 <strong>Week {week + 1} Tip:</strong> {info.weeklyGuide[week]}
                      </p>
                    )}
                    <p><strong>🧪 Fertilizer:</strong> {info.fertilizerTips}</p>
                    <p><strong>💧 Irrigation:</strong> {info.irrigationTips}</p>
                    <p><strong>🛡️ Disease:</strong> {info.diseaseTips}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCrop;
