// src/pages/Irrigation.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import HelpModal from "../../components/HelpModal";
import { db } from "../../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const Irrigation = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState("");
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const q = query(collection(db, "schemes"), where("category", "==", "irrigation"));
        const querySnapshot = await getDocs(q);
        const fetchedSchemes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSchemes(fetchedSchemes);
      } catch (error) {
        console.error("Error fetching schemes:", error);
      }
    };

    fetchSchemes();
  }, []);

  const openHelp = (schemeName) => {
    setSelectedScheme(schemeName);
    setModalOpen(true);
  };

  const submitHelpRequest = async (data) => {
    try {
      await addDoc(collection(db, "schemeHelpRequests"), {
        ...data,
        createdAt: new Date(),
      });
      alert("Request submitted successfully!");
    } catch (err) {
      console.error("Error saving request:", err);
      alert("Failed to submit request.");
    }
  };

  return (
    <div className="min-h-screen  px-4 py-8 sm:px-6">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-green-700 hover:text-green-900 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </button>
      </div>

      <h1 className="text-3xl font-bold text-green-800 text-center mb-8">
        💧 Irrigation Schemes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {schemes.map((scheme, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 hover:border-green-400 hover:shadow-md transition p-5 rounded-md flex justify-between items-center cursor-pointer"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{scheme.title}</h2>
              <p className="text-sm text-green-700 font-medium mt-1">{scheme.benefit}</p>
              <p className="text-sm text-gray-600 mt-1">{scheme.description}</p>
              <p className="text-xs text-gray-400 mt-2">
                Sources: {scheme.sources?.join(", ")}
              </p>
              <button
                onClick={() => openHelp(scheme.title)}
                className="text-sm text-green-600 mt-2 hover:underline"
              >
                🆘 Need Help?
              </button>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>

      <HelpModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        schemeName={selectedScheme}
        onSubmit={submitHelpRequest}
      />
    </div>
  );
};

export default Irrigation;
