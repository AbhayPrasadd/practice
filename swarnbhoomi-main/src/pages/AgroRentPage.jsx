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
  const [addLoading, setAddLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterRentType, setFilterRentType] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const auth = getAuth();
  const currentUser = auth.currentUser;

  const [newMachinery, setNewMachinery] = useState({
    name: "",
    category: "",
    price: "",
    rentType: "",
    location: "",
    ownerName: "",
    contact: "",
    image: "",
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

  const handleInputChange = (e) =>
    setNewMachinery({ ...newMachinery, [e.target.name]: e.target.value });

  const handleAddMachinery = async (e) => {
    e.preventDefault();
    setAddLoading(true);

    let imageUrl = "";
    if (imageFile) {
      imageUrl = await uploadToCloudinary(imageFile);
    }

    const machineryData = {
      ...newMachinery,
      image: imageUrl,
      creator: currentUser?.uid || "",
    };

    try {
      await addDoc(collection(db, "machinery"), machineryData);
      await fetchMachinery();
      setShowForm(false);
      setNewMachinery({
        name: "",
        category: "",
        price: "",
        rentType: "",
        location: "",
        ownerName: "",
        contact: "",
        image: "",
      });
      setImageFile(null);
    } catch (error) {
      console.error("Error adding machinery:", error);
    } finally {
      setAddLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Do you want to delete this listing?");
    if (!confirmDelete) return;
    try {
      await deleteDoc(doc(db, "machinery", id));
      fetchMachinery();
    } catch (error) {
      console.error("Error deleting machinery:", error);
    }
  };

  const filteredMachinery = machinery.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory ? item.category === filterCategory : true) &&
      (filterRentType ? item.rentType === filterRentType : true) &&
      (filterLocation
        ? item.location.toLowerCase().includes(filterLocation.toLowerCase())
        : true)
    );
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 max-w-7xl">
      {loading ? (
        <p className="text-center text-gray-500">Loading machinery...</p>
      ) : (
        <>
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-green-800 text-center mb-4">
              Find Equipment Near You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 rounded text-sm w-full"
              />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="border p-2 rounded text-sm w-full"
              >
                <option value="">All Categories</option>
                <option value="Tractor">Tractor</option>
                <option value="Plough">Plough</option>
                <option value="Seeder">Seeder</option>
                <option value="Harvester">Harvester</option>
              </select>
              <select
                value={filterRentType}
                onChange={(e) => setFilterRentType(e.target.value)}
                className="border p-2 rounded text-sm w-full"
              >
                <option value="">All Rent Types</option>
                <option value="Hourly">Hourly</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
              </select>
              <input
                type="text"
                placeholder="Location"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="border p-2 rounded text-sm w-full"
              />
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm w-full"
              >
                {showForm ? "Close Form" : "List Equipment"}
              </button>
            </div>
          </div>

          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-xl w-[90%] sm:w-[500px] shadow-lg">
                <h2 className="text-lg font-bold mb-4 text-center">
                  Add Your Equipment
                </h2>
                <form onSubmit={handleAddMachinery} className="space-y-3">
                  {Object.entries(newMachinery)
                    .filter(([key]) => key !== "image")
                    .map(([key, value]) => (
                      <input
                        key={key}
                        type="text"
                        name={key}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={value}
                        onChange={handleInputChange}
                        className="border w-full p-2 rounded text-sm"
                        required
                      />
                    ))}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className="border w-full p-2 rounded text-sm"
                  />

                  {imageFile && (
                    <img
                      src={URL.createObjectURL(imageFile)}
                      alt="Preview"
                      className="w-full h-28 object-cover rounded"
                    />
                  )}

                  <div className="flex justify-between pt-2">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                      disabled={addLoading}
                    >
                      {addLoading ? "Submitting..." : "Submit"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredMachinery.map((item) => (
              <div
                key={item.id}
                className="relative bg-white shadow-sm rounded-xl overflow-hidden border text-xs"
              >
                {item.creator === currentUser?.uid && (
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="absolute top-2 right-2 text-red-500 text-sm hover:text-red-700 z-10"
                    title="Delete this listing"
                  >
                    ❌
                  </button>
                )}

                <img
                  src={
                    item.image?.startsWith("http")
                      ? item.image
                      : item.image?.startsWith("/")
                      ? item.image
                      : "https://via.placeholder.com/400"
                  }
                  alt={item.name}
                  className="w-full h-28 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-gray-800 truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-600 truncate">
                    Category: {item.category}
                  </p>
                  <p className="text-xs text-green-700 font-medium">
                    ₹{item.price} / {item.rentType}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Location: {item.location}
                  </p>
                  <p className="text-xs text-gray-700 truncate">
                    Owner: {item.ownerName}
                  </p>
                  <a
                    href={`tel:${item.contact}`}
                    className="mt-2 inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AgroRent;
