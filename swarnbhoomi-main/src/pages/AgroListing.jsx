import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const AgroListing = () => {
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = getAuth().currentUser;
  const { t } = useTranslation();

  const fetchMyListings = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "machinery"));
      const allData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const userItems = allData.filter((item) => item.creator === currentUser?.uid);
      setMyItems(userItems);
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(t("confirm_delete"));
    if (!confirmDelete) return;
    try {
      await deleteDoc(doc(db, "machinery", id));
      fetchMyListings();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    fetchMyListings();
  }, []);

  if (loading) return <p className="text-center text-gray-500">{t("loading_listings")}</p>;

  if (myItems.length === 0) return <p className="text-center text-gray-500">{t("no_equipment_added")}</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {myItems.map((item) => (
        <div key={item.id} className="bg-white border text-sm p-3 relative">
          <button
            onClick={() => handleDelete(item.id)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            ❌
          </button>
          <img
            src={item.image || "https://via.placeholder.com/400"}
            alt={item.name}
            className="w-full h-32 object-cover mb-2"
          />
          <p className="font-semibold text-gray-800 truncate">{item.name}</p>
          <p className="text-gray-600">{item.category}</p>
          <p className="text-green-700 font-medium">
            ₹{item.price} / {t(item.rentType)}
          </p>
          <p className="text-gray-600">📍 {item.location}</p>
          <p className="text-gray-700">👤 {item.ownerName}</p>
          <p className="text-blue-600 text-sm">📞 {item.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default AgroListing;
