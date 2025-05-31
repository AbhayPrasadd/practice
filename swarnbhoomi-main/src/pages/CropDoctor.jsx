import { useState } from "react";

const ImageAnalyzer = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Preview the uploaded image
  };

  const uploadImage = async () => {
    if (!image) {
      alert("Please upload an image.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setResult({ error: "Failed to analyze image" });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6">
      {/* Left Side: Image Upload & Preview */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Upload Farm Image</h2>

        <input
          type="file"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md p-2 mb-4"
        />

        {imagePreview && (
          <div className="w-full flex justify-center mb-4">
            <img
              src={imagePreview}
              alt="Uploaded Preview"
              className="w-full h-48 object-cover border rounded-md shadow-sm"
            />
          </div>
        )}

        <button
          onClick={uploadImage}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Image"}
        </button>
      </div>

      {/* Right Side: Results */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/3 ml-0 md:ml-6 mt-6 md:mt-0">
        <h2 className="text-xl font-bold text-center md:text-left mb-4">Analysis Results</h2>

        {/* Display Results */}
        {result && (
          <div className="max-h-96 overflow-y-auto">
            {/* Recommendations First */}
            {result.recommendations && (
              <>
                <h3 className="text-lg font-semibold text-green-700">✅ Recommendations:</h3>
                <ul className="mt-2 space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="bg-green-100 px-4 py-2 rounded-md">{rec}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Detected Labels */}
            {result.labels && (
              <>
                <h3 className="mt-4 text-lg font-semibold text-blue-700">📌 Detected Labels:</h3>
                <ul className="mt-2 space-y-2">
                  {result.labels.map((label, index) => (
                    <li key={index} className="bg-blue-100 px-4 py-2 rounded-md">{label}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageAnalyzer;
