import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";
import { Pencil, Camera } from "lucide-react";

const Profile = () => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const defaultAvatar =
    "https://api.dicebear.com/7.x/initials/svg?seed=" + (userData?.fullName || "User");

  useEffect(() => {
    const fetchUser = async () => {
      if (auth.currentUser) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        }
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!auth.currentUser) return;
    const userRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(userRef, userData);
    setEditMode(false);
  };

  if (loading) return <div className="p-6">{t("loading")}</div>;

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 md:p-6 max-w-10xl mx-auto bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="relative group">
          <img
            src={defaultAvatar}
            alt="Profile"
            className="h-24 w-24 rounded-full border-4 border-green-700 object-cover shadow-sm"
          />
          {editMode && (
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm">
              <Camera className="w-4 h-4 text-gray-600" />
            </div>
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          {userData?.fullName || "User"}
        </h3>
        <p className="text-sm text-gray-500">{userData?.email}</p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["fullName", "email", "farmerType", "district", "state", "country"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
              {t(field) || field}
            </label>
            <input
              type="text"
              name={field}
              value={userData?.[field] || ""}
              disabled={!editMode}
              onChange={handleChange}
              className={`w-full px-4 py-2 border text-sm rounded-md focus:outline-none focus:ring-2 ${
                editMode
                  ? "bg-white border-gray-300 focus:ring-blue-500"
                  : "bg-gray-100 border-gray-200"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mt-8">
        {!editMode ? (
          <button
            className="flex items-center gap-1 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
            onClick={() => setEditMode(true)}
          >
            <Pencil size={16} /> {t("edit") || "Edit"}
          </button>
        ) : (
          <>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
              onClick={() => setEditMode(false)}
            >
              {t("cancel") || "Cancel"}
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={handleUpdate}
            >
              {t("save") || "Save"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
