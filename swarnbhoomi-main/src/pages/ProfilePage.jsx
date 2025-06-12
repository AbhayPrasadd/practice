import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";
import { Camera, X } from "lucide-react";
import { cropCategories } from "../data/cropData";

const Profile = () => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCrops, setSelectedCrops] = useState([]);

  const defaultAvatar =
    "https://api.dicebear.com/7.x/initials/svg?seed=" + (userData?.fullName || "User");

  useEffect(() => {
    const fetchUser = async () => {
      if (auth.currentUser) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
          const initialCrops = userSnap.data().primaryCrops || {};
          const allSelected = Object.values(initialCrops).flat();
          setSelectedCrops(allSelected);
        }
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdate = async () => {
    if (!auth.currentUser) return;
    const userRef = doc(db, "users", auth.currentUser.uid);
    const updatedCrops = {};
    selectedCrops.forEach((crop) => {
      const category = Object.keys(cropCategories).find((cat) => cropCategories[cat].includes(crop));
      if (!updatedCrops[category]) updatedCrops[category] = [];
      updatedCrops[category].push(crop);
    });
    await updateDoc(userRef, { ...userData, primaryCrops: updatedCrops });
    setEditMode(false);
  };

  const irrigationTypes = ["Canal", "Borewell", "Drip", "Sprinkler", "Rainfed"];
  const languageOptions = ["en", "hi", "mr", "gu"];
  const genders = ["Male", "Female", "Other"];

  if (loading) return <div className="p-6 text-sm md:text-base lg:text-lg">{t("loading")}</div>;

  const handleCropToggle = (crop) => {
    if (selectedCrops.includes(crop)) {
      setSelectedCrops(selectedCrops.filter((c) => c !== crop));
    } else {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  const removeCrop = (crop) => {
    setSelectedCrops(selectedCrops.filter((c) => c !== crop));
  };

  return (
    <div className="min-h-screen p-6 max-w-10xl mx-auto ">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={defaultAvatar}
            alt="Profile"
            className="h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-green-700 object-cover shadow-sm"
          />
          <div>
            <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800 uppercase">{userData?.fullName || "User"}</h3>
            <p className="text-xs md:text-sm lg:text-base text-gray-500">{userData?.email}</p>
          </div>
        </div>

        {!editMode && (
          <button
            className="px-3 py-1 bg-green-700 text-white rounded-md hover:bg-green-800 transition text-sm md:text-base lg:text-lg"
            onClick={() => setEditMode(true)}
          >
            {t("Edit")}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["fullName", "email", "phone", "district", "state", "country", "village", "landSize", "aadhar", "dob"].map((field) => (
            <div key={field}>
              <label className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700 mb-1 uppercase">
                {t(field) || field}
              </label>
              <input
                type={field === "dob" ? "date" : "text"}
                name={field}
                value={userData?.[field] || ""}
                disabled={!editMode}
                onChange={handleChange}
                className={`w-full px-3 py-2 border text-xs md:text-sm lg:text-base rounded focus:outline-none focus:ring-1 transition ${
                  editMode ? "bg-white border-gray-300 focus:ring-blue-400" : "bg-gray-100 border-gray-200"
                }`}
              />
            </div>
          ))}

          {[{
            label: t("Farmer Type"),
            name: "farmerType",
            options: ["Organic", "Commercial", "Livestock"]
          }, {
            label: t("Irrigation Type"),
            name: "irrigationType",
            options: irrigationTypes
          }, {
            label: t("Language Preference"),
            name: "language",
            options: languageOptions
          }, {
            label: t("Gender"),
            name: "gender",
            options: genders
          }].map(({ label, name, options }) => (
            <div key={name}>
              <label className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700 mb-1 uppercase">
                {label}
              </label>
              <select
                name={name}
                disabled={!editMode}
                value={userData?.[name] || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded text-xs md:text-sm lg:text-base bg-white"
              >
                <option value="">{t("Select")}</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700 mb-1 uppercase">{t("Crop Category")}</label>
            <select
              className="w-full px-3 py-2 border rounded text-xs md:text-sm lg:text-base"
              disabled={!editMode}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">{t("Select Category")}</option>
              {Object.keys(cropCategories).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {selectedCategory && (
            <div>
              <label className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700 mb-1 uppercase">{t("Select Crops")}</label>
              <div className="flex flex-wrap gap-2">
                {cropCategories[selectedCategory].map((crop) => (
                  <button
                    key={crop}
                    type="button"
                    className={`px-3 py-1 rounded-md border text-xs md:text-sm lg:text-base transition-all ${
                      selectedCrops.includes(crop)
                        ? "bg-green-600 text-white border-green-700"
                        : "bg-gray-100 text-gray-800 border-gray-300"
                    } ${editMode ? "hover:shadow-md" : "opacity-60 cursor-not-allowed"}`}
                    onClick={() => editMode && handleCropToggle(crop)}
                  >
                    {crop}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700 mb-1 uppercase">{t("Selected Crops")}</label>
            <div className="flex flex-wrap gap-2">
              {selectedCrops.length > 0 ? selectedCrops.map((crop) => (
                <div key={crop} className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center gap-2 text-xs md:text-sm lg:text-base">
                  {crop}
                  {editMode && (
                    <X className="w-4 h-4 cursor-pointer" onClick={() => removeCrop(crop)} />
                  )}
                </div>
              )) : <p className="text-xs md:text-sm lg:text-base text-gray-500">{t("No crops selected.")}</p>}
            </div>
          </div>

          {editMode && (
            <div className="flex justify-end gap-4 mt-2">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition text-sm md:text-base lg:text-lg"
                onClick={() => setEditMode(false)}
              >
                {t("Cancel")}
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm md:text-base lg:text-lg"
                onClick={handleUpdate}
              >
                {t("Save")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
