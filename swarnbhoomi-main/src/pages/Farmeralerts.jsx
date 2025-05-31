import React, { useState } from "react";
import { Bell, XCircle } from "lucide-react";

const initialAlerts = [
  {
    id: 1,
    title: "Pest Risk: Aphids",
    description: "Aphid infestation expected in wheat crops. Monitor and apply neem-based sprays if necessary.",
    date: "2025-04-07",
    severity: "High",
  },
  {
    id: 2,
    title: "Heavy Rainfall Alert",
    description: "Rainfall exceeding 100mm expected in the next 2 days. Secure harvested crops.",
    date: "2025-04-08",
    severity: "Medium",
  },
  {
    id: 3,
    title: "Fungal Infection Warning",
    description: "Humidity may cause fungal diseases in rice fields. Consider appropriate fungicide.",
    date: "2025-04-09",
    severity: "Low",
  },
];

const severityColor = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-green-600",
};

const FarmerAlerts = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  const dismissAlert = (id) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Bell className="text-red-500" />
          <span>Farming Alerts</span>
        </h1>
        <p className="text-gray-600">Stay updated with crop, weather, and pest alerts in your area.</p>
      </div>

      <div className="space-y-4">
        {alerts.length === 0 ? (
          <p className="text-gray-500 text-center">No active alerts 🎉</p>
        ) : (
          alerts.map((alert) => (
            <div
              key={alert.id}
              className="bg-white shadow-md p-4 rounded-lg flex justify-between items-start border-l-4"
              style={{ borderColor: severityColor[alert.severity].replace("text-", "") }}
            >
              <div>
                <h2 className="text-lg font-semibold">{alert.title}</h2>
                <p className="text-gray-700 mt-1">{alert.description}</p>
                <p className="text-sm text-gray-500 mt-2">📅 {alert.date}</p>
                <span className={`text-sm font-medium ${severityColor[alert.severity]}`}>
                  Severity: {alert.severity}
                </span>
              </div>
              <button
                onClick={() => dismissAlert(alert.id)}
                className="text-gray-400 hover:text-red-500 transition"
                title="Dismiss"
              >
                <XCircle />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FarmerAlerts;
