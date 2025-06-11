import React, { useState } from "react";
import { db } from "../firebase"; // adjust path as needed
import { doc, setDoc } from "firebase/firestore";

const Test = () => {
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const text = await file.text();
      const cropData = JSON.parse(text);

      let successCount = 0;
      for (const crop of cropData) {
        if (!crop.name) continue;
        await setDoc(doc(db, "cropGuide", crop.name), crop);
        successCount++;
      }

      setUploadStatus(`✅ Successfully uploaded ${successCount} crops.`);
    } catch (err) {
      console.error("Error uploading crop guides:", err);
      setUploadStatus("❌ Failed to upload. Please check your file format.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-xl font-bold text-green-700 mb-4">📥 Upload Crop Guides from JSON</h2>
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="border px-4 py-2 w-full rounded mb-4"
      />
      {uploadStatus && <p className="text-sm text-center mt-2">{uploadStatus}</p>}
    </div>
  );
};

export default Test;
