import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const categoryOptions = [
  { value: "Tractor", label: "Tractor" },
  { value: "Plough", label: "Plough" },
  { value: "Seeder", label: "Seeder" },
  { value: "Harvester", label: "Harvester" },
];

const rentTypeOptions = [
  { value: "Hourly", label: "Hourly" },
  { value: "Daily", label: "Daily" },
  { value: "Weekly", label: "Weekly" },
];

const locationOptions = [
  { value: "Siddharthnagar", label: "Siddharthnagar" },
  { value: "Balrampur", label: "Balrampur" },
];

const uploadToCloudinary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "unsigned_upload");
  data.append("cloud_name", "dcagstryz");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dcagstryz/image/upload",
      data
    );
    return res.data.secure_url;
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return "";
  }
};

const AgroRent = () => {
  const [machinery, setMachinery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [addLoading, setAddLoading] = useState(false);

  const [categoryOption, setCategoryOption] = useState(null);
  const [rentTypeOption, setRentTypeOption] = useState(null);
  const [locationOption, setLocationOption] = useState(null);

  const auth = getAuth();
  const currentUser = auth.currentUser;

  const [newMachinery, setNewMachinery] = useState({
    name: "",
    price: "",
    ownerName: "",
    contact: "",
  });

  const fetchMachinery = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "machinery"));
      const machineryData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMachinery(machineryData);
    } catch (error) {
      console.error("Error fetching machinery:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMachinery();
  }, []);

  const handleAddMachinery = async (e) => {
    e.preventDefault();
    setAddLoading(true);

    let imageUrl = "";
    if (imageFile) {
      imageUrl = await uploadToCloudinary(imageFile);
    }

    const machineryData = {
      ...newMachinery,
      category: categoryOption?.value || "",
      rentType: rentTypeOption?.value || "",
      location: locationOption?.value || "",
      image: imageUrl,
      creator: currentUser?.uid || "",
    };

    try {
      await addDoc(collection(db, "machinery"), machineryData);
      await fetchMachinery();
      setShowForm(false);
      setNewMachinery({
        name: "",
        price: "",
        ownerName: "",
        contact: "",
      });
      setImageFile(null);
      setCategoryOption(null);
      setRentTypeOption(null);
      setLocationOption(null);
    } catch (error) {
      console.error("Error adding machinery:", error);
    } finally {
      setAddLoading(false);
    }
  };

  const filteredMachinery = machinery.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (!categoryOption || item.category === categoryOption.value) &&
      (!rentTypeOption || item.rentType === rentTypeOption.value) &&
      (!locationOption || item.location === locationOption.value)
    );
  });

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white p-4 rounded shadow">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap justify-between">
          <input
            type="text"
            placeholder="Search equipment"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 text-sm w-full sm:w-[48%]"
          />

          <Select
            options={categoryOptions}
            value={categoryOption}
            onChange={setCategoryOption}
            placeholder="Category"
            className="w-full sm:w-[48%] text-sm"
            components={animatedComponents}
          />

          <Select
            options={rentTypeOptions}
            value={rentTypeOption}
            onChange={setRentTypeOption}
            placeholder="Rent Type"
            className="w-full sm:w-[48%] text-sm"
            components={animatedComponents}
          />

          <Select
            options={locationOptions}
            value={locationOption}
            onChange={setLocationOption}
            placeholder="Location"
            className="w-full sm:w-[48%] text-sm"
            components={animatedComponents}
          />

          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 w-full sm:w-auto"
          >
            List Your Equipment
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-[90%] sm:w-[500px] rounded-md shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-center text-green-700">
              Add Equipment
            </h2>
            <form onSubmit={handleAddMachinery} className="space-y-3">
              <input
                name="name"
                placeholder="Equipment Name"
                value={newMachinery.name}
                onChange={(e) => setNewMachinery({ ...newMachinery, name: e.target.value })}
                className="border w-full p-2 text-sm"
                required
              />
              <Select
                options={categoryOptions}
                value={categoryOption}
                onChange={setCategoryOption}
                placeholder="Select Category"
                className="text-sm"
                components={animatedComponents}
              />
              <input
                name="price"
                placeholder="Price"
                value={newMachinery.price}
                onChange={(e) => setNewMachinery({ ...newMachinery, price: e.target.value })}
                className="border w-full p-2 text-sm"
                required
              />
              <Select
                options={rentTypeOptions}
                value={rentTypeOption}
                onChange={setRentTypeOption}
                placeholder="Select Rent Type"
                className="text-sm"
                components={animatedComponents}
              />
              <Select
                options={locationOptions}
                value={locationOption}
                onChange={setLocationOption}
                placeholder="Select Location"
                className="text-sm"
                components={animatedComponents}
              />
              <input
                name="ownerName"
                placeholder="Owner Name"
                value={newMachinery.ownerName}
                onChange={(e) => setNewMachinery({ ...newMachinery, ownerName: e.target.value })}
                className="border w-full p-2 text-sm"
                required
              />
              <input
                name="contact"
                placeholder="Contact Number"
                value={newMachinery.contact}
                onChange={(e) => setNewMachinery({ ...newMachinery, contact: e.target.value })}
                className="border w-full p-2 text-sm"
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="border w-full p-2 text-sm"
              />
              {imageFile && (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Preview"
                  className="w-full h-28 object-cover"
                />
              )}
              <div className="flex justify-between pt-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 text-sm"
                  disabled={addLoading}
                >
                  {addLoading ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-red-600 text-white px-4 py-2 hover:bg-red-700 text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {filteredMachinery.map((item) => (
          <div key={item.id} className="bg-white border text-sm p-2 rounded-md shadow-sm">
            <img
              src={item.image || `/machinery/${item.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
              alt={item.name}
              className="w-full h-32 object-cover rounded"
            />
            <div className="pt-2">
              <p className="font-semibold text-gray-800 truncate">{item.name}</p>
              <p className="text-gray-600">{item.category}</p>
              <p className="text-green-700 font-medium">₹{item.price} / {item.rentType}</p>
              <p className="text-gray-600">📍 {item.location}</p>
              <p className="text-gray-700">👤 {item.ownerName}</p>
              <a
                href={`tel:${item.contact}`}
                className="mt-2 inline-block bg-blue-600 text-white px-3 py-1 hover:bg-blue-700 rounded"
              >
                Call Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgroRent;