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
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

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
      setNewMachinery({ name: "", price: "", ownerName: "", contact: "" });
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

  const resetFilters = () => {
    setSearch("");
    setCategoryOption(null);
    setRentTypeOption(null);
    setLocationOption(null);
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
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap justify-between items-center">
          <input
            type="text"
            placeholder={t("search_equipment")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 text-sm w-full sm:w-[48%]"
          />

          <Select
            options={categoryOptions}
            value={categoryOption}
            onChange={setCategoryOption}
            placeholder={t("category")}
            className="w-full sm:w-[48%] text-sm"
            components={animatedComponents}
          />

          <Select
            options={rentTypeOptions}
            value={rentTypeOption}
            onChange={setRentTypeOption}
            placeholder={t("rent_type")}
            className="w-full sm:w-[48%] text-sm"
            components={animatedComponents}
          />

          <Select
            options={locationOptions}
            value={locationOption}
            onChange={setLocationOption}
            placeholder={t("location")}
            className="w-full sm:w-[48%] text-sm"
            components={animatedComponents}
          />

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              onClick={resetFilters}
              className="bg-gray-500 text-white px-4 py-2 hover:bg-gray-600 text-sm"
            >
              {t("reset_filters")}
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 text-sm"
            >
              {t("list_equipment")}
            </button>
          </div>
        </div>
      </div>

      {/* Add Equipment Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-[90%] sm:w-[500px] rounded-md shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-center text-green-700">
              {t("add_equipment")}
            </h2>
            <form onSubmit={handleAddMachinery} className="space-y-3">
              <input
                name="name"
                placeholder={t("equipment_name")}
                value={newMachinery.name}
                onChange={(e) =>
                  setNewMachinery({ ...newMachinery, name: e.target.value })
                }
                className="border w-full p-2 text-sm"
                required
              />
              <Select
                options={categoryOptions}
                value={categoryOption}
                onChange={setCategoryOption}
                placeholder={t("select_category")}
                className="text-sm"
                components={animatedComponents}
              />
              <input
                name="price"
                placeholder={t("price")}
                value={newMachinery.price}
                onChange={(e) =>
                  setNewMachinery({ ...newMachinery, price: e.target.value })
                }
                className="border w-full p-2 text-sm"
                required
              />
              <Select
                options={rentTypeOptions}
                value={rentTypeOption}
                onChange={setRentTypeOption}
                placeholder={t("select_rent_type")}
                className="text-sm"
                components={animatedComponents}
              />
              <Select
                options={locationOptions}
                value={locationOption}
                onChange={setLocationOption}
                placeholder={t("select_location")}
                className="text-sm"
                components={animatedComponents}
              />
              <input
                name="ownerName"
                placeholder={t("owner_name")}
                value={newMachinery.ownerName}
                onChange={(e) =>
                  setNewMachinery({
                    ...newMachinery,
                    ownerName: e.target.value,
                  })
                }
                className="border w-full p-2 text-sm"
                required
              />
              <input
                name="contact"
                placeholder={t("contact_number")}
                value={newMachinery.contact}
                onChange={(e) =>
                  setNewMachinery({ ...newMachinery, contact: e.target.value })
                }
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
                  {addLoading ? t("submitting") : t("submit")}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-red-600 text-white px-4 py-2 hover:bg-red-700 text-sm"
                >
                  {t("cancel")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Equipment Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
        {filteredMachinery.map((item) => (
          <div key={item.id} className="bg-white border text-sm p-2 shadow-sm">
            <img
              src={item.image || `/machinery/${item.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
              alt={item.name}
              className="w-full h-24 sm:h-28 object-cover rounded"
            />
            <div className="pt-2">
              <p className="font-semibold text-gray-800 truncate">{item.name}</p>
              <p className="text-gray-600">{item.category}</p>
              <p className="text-green-700 font-medium">₹{item.price} / {t(item.rentType)}</p>
              <p className="text-gray-600">📍 {item.location}</p>
              <p className="text-gray-700">👤 {item.ownerName}</p>
              <a
                href={`tel:${item.contact}`}
                className="mt-2 inline-block bg-blue-600 text-white px-3 py-1 hover:bg-blue-700 rounded"
              >
                {t("call_now")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgroRent;
