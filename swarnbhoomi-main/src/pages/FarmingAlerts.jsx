import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { formatDistanceToNow } from "date-fns";
import { AlertTriangle, ArrowLeft, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const alertColors = [
  "bg-red-100 border-red-600 text-red-900",
  "bg-yellow-100 border-yellow-600 text-yellow-900",
  "bg-blue-100 border-blue-600 text-blue-900",
  "bg-green-100 border-green-600 text-green-900",
];

const FarmingAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const user = auth.currentUser;
        if (!user) throw new Error("User not logged in");

        const ref = collection(db, "farmingAlerts");
        const q = query(ref, where("uid", "==", user.uid));
        const snapshot = await getDocs(q);

        const data = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .sort((a, b) => b.timestamp?.seconds - a.timestamp?.seconds);

        setAlerts(data);
      } catch (err) {
        console.error("Failed to fetch alerts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  const deleteAlert = async (id) => {
    try {
      await deleteDoc(doc(db, "farmingAlerts", id));
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    } catch (err) {
      console.error("Error deleting alert:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 font-poppins">
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-black transition"
        >
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-xl sm:text-2xl font-bold text-red-700 flex items-center gap-2">
          <AlertTriangle className="text-red-600" /> Farming Alerts
        </h1>
      </div>

      {loading ? (
        <p className="text-sm text-gray-600">Loading alerts...</p>
      ) : alerts.length === 0 ? (
        <p className="text-sm text-gray-600">No alerts available.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {alerts.map((alert, index) => (
            <li
              key={alert.id}
              className={`border-l-4 px-4 py-3 shadow-sm relative ${
                alertColors[index % alertColors.length]
              }`}
            >
              <button
                onClick={() => deleteAlert(alert.id)}
                className="absolute top-2 right-2 text-sm text-gray-500 hover:text-red-600"
              >
                <Trash2 size={16} />
              </button>
              <p className="text-base mb-1 font-medium">{alert.message}</p>
              <p className="text-xs">
                {alert.timestamp?.seconds
                  ? formatDistanceToNow(new Date(alert.timestamp.seconds * 1000), {
                      addSuffix: true,
                    })
                  : "Just now"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FarmingAlerts;
