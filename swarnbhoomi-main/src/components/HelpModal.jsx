import React, { useState } from "react";

const HelpModal = ({ isOpen, onClose, schemeName, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit({ ...formData, schemeName });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 w-[90%] sm:w-[400px] rounded-md shadow-lg relative">
        <h2 className="text-lg font-bold text-green-800 mb-4">
          Need Help with {schemeName}?
        </h2>

        <input
          name="name"
          placeholder="Your Name"
          className="input mb-2 w-full"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          className="input mb-2 w-full"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          name="district"
          placeholder="District"
          className="input mb-2 w-full"
          value={formData.district}
          onChange={handleChange}
        />
        <textarea
          name="query"
          placeholder="What help do you need?"
          className="input mb-3 w-full"
          value={formData.query}
          onChange={handleChange}
        ></textarea>

        <div className="flex justify-between">
          <button onClick={onClose} className="text-gray-500 hover:underline">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
