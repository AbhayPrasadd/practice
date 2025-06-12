import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { formatDistanceToNow } from "date-fns";
import {
  AlertTriangle,
  ArrowLeft,
  Trash2,
  Info,
  ShieldAlert,
  SunSnow,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const alertThemes = [
  {
    icon: <AlertTriangle className="text-red-600 w-5 h-5" />,
    bg: "bg-red-50",
    border: "border-red-500",
    text: "text-red-900",
  },
  {
    icon: <SunSnow className="text-blue-600 w-5 h-5" />,
    bg: "bg-blue-50",
    border: "border-blue-500",
    text: "text-blue-900",
  },
  {
    icon: <ShieldAlert className="text-yellow-600 w-5 h-5" />,
    bg: "bg-yellow-50",
    border: "border-yellow-500",
    text: "text-yellow-900",
  },
  {
    icon: <Info className="text-green-600 w-5 h-5" />,
    bg: "bg-green-50",
    border: "border-green-500",
    text: "text-green-900",
  },
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
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-black transition"
        >
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-2xl font-bold text-green-800 flex items-center gap-2">
          <AlertTriangle className="text-green-600" />
          Farming Alerts
        </h1>
      </div>

      {/* Alerts */}
      {loading ? (
        <p className="text-sm text-gray-600">Loading alerts...</p>
      ) : alerts.length === 0 ? (
        <p className="text-sm text-gray-500">No alerts available at the moment.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {alerts.map((alert, index) => {
            const theme = alertThemes[index % alertThemes.length];
            return (
              <li
                key={alert.id}
                className={`p-4 rounded-lg border-l-4 shadow-sm relative hover:shadow-md transition-all duration-200 ${theme.bg} ${theme.border}`}
              >
                {/* Delete Button */}
                <button
                  onClick={() => deleteAlert(alert.id)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-600 transition"
                >
                  <Trash2 size={16} />
                </button>

                {/* Icon and Message */}
                <div className="flex items-start gap-3">
                  <div>{theme.icon}</div>
                  <div>
                    <p className={`font-semibold text-sm ${theme.text}`}>
                      {alert.message}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {alert.timestamp?.seconds
                        ? formatDistanceToNow(
                            new Date(alert.timestamp.seconds * 1000),
                            { addSuffix: true }
                          )
                        : "Just now"}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FarmingAlerts;
