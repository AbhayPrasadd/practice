import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [image, setImage] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image.");

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "unsigned_upload"); // 🛠 must match exactly
    formData.append("cloud_name", "dcagstryz");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcagstryz/image/upload",
        formData
      );
      setUploadedUrl(res.data.secure_url);
      alert("✅ Upload successful!");
    } catch (err) {
      console.error("❌ Upload failed:", err);
      alert("Upload failed. See console.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button
        onClick={handleUpload}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Upload
      </button>

      {uploadedUrl && (
        <div className="mt-4">
          <p>✅ Uploaded Image:</p>
          <img src={uploadedUrl} alt="Uploaded" className="rounded shadow w-full" />
        </div>
      )}
    </div>
  );
};

export default Test;
