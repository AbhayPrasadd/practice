import React, { useState } from "react";
import { Leaf, Trash2 } from "lucide-react";

const CropPlanner = () => {
  const [crops, setCrops] = useState([]);
  const [form, setForm] = useState({
    cropName: "",
    sowingDate: "",
    harvestDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCrop = () => {
    const { cropName, sowingDate, harvestDate } = form;

    if (cropName.trim() && sowingDate && harvestDate) {
      setCrops((prev) => [...prev, { cropName: cropName.trim(), sowingDate, harvestDate }]);
      setForm({ cropName: "", sowingDate: "", harvestDate: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleDeleteCrop = (index) => {
    setCrops((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
          <Leaf className="text-green-600" />
          <span>Crop Planner</span>
        </h1>
        <p className="text-gray-600 mt-1">Plan your sowing and harvesting efficiently.</p>
      </div>

      {/* Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Crop</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="cropName"
            value={form.cropName}
            onChange={handleChange}
            placeholder="Crop Name"
            className="p-2 border rounded"
          />
          <input
            type="date"
            name="sowingDate"
            value={form.sowingDate}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="date"
            name="harvestDate"
            value={form.harvestDate}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <button
          onClick={handleAddCrop}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add Crop
        </button>
      </div>

      {/* Crop List */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Your Crop Plan</h2>
        {crops.length === 0 ? (
          <p className="text-gray-500">No crops planned yet.</p>
        ) : (
          <ul className="space-y-4">
            {crops.map((crop, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 border rounded-lg bg-gray-50"
              >
                <div>
                  <p className="font-medium text-lg">{crop.cropName}</p>
                  <p className="text-sm text-gray-600">
                    Sowing: {crop.sowingDate} | Harvest: {crop.harvestDate}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteCrop(index)}
                  className="text-red-500 hover:text-red-700"
                  title="Delete"
                >
                  <Trash2 size={20} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CropPlanner;
