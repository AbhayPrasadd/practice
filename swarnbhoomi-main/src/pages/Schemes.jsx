import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase.js";

const Schemes = () => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "schemes"));
        const schemesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSchemes(schemesData);
      } catch (error) {
        console.error("Error fetching schemes:", error);
      }
      setLoading(false);
    };

    fetchSchemes();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Government Schemes for Farmers in India
      </h1>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading schemes...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-gray-900">
                {scheme.name}
              </h2>
              <p className="text-gray-600">Launched in {scheme.launchYear}</p>
              <p className="mt-2 text-gray-700">{scheme.description}</p>
              <a
                href={scheme.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Schemes;
