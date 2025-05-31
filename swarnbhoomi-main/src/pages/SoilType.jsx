import { useState, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";

export default function SoilType() {
    const MODEL_URL = "https://teachablemachine.withgoogle.com/models/vH-WtOphV/";
    const [model, setModel] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const [soilInfo, setSoilInfo] = useState(null);

    //Dummy Soil Database
    const soilDatabase = {
        "Alluvial Soil": {
            crops: ["Wheat", "Rice", "Sugarcane", "Cotton"],
            fertilizer: "NPK fertilizers, Organic manure",
            advice: "Highly fertile. Ensure proper irrigation and avoid over-fertilization."
        },
        "Red Soil": {
            crops: ["Millets", "Groundnut", "Pulses"],
            fertilizer: "Phosphorus-based fertilizers, Green manure",
            advice: "Lacks nitrogen and phosphorus. Use organic matter."
        },
        "Black Soil": {
            crops: ["Cotton", "Soybean", "Jowar"],
            fertilizer: "Potassium-rich fertilizers, Compost",
            advice: "Retains moisture well. Avoid excessive irrigation."
        },
        "Clay Soil": {
            crops: ["Paddy", "Cabbage", "Sugarcane"],
            fertilizer: "Compost, Sand mix for aeration",
            advice: "Holds too much water. Improve aeration."
        }
    };

    useEffect(() => {
        async function loadModel() {
            const modelURL = MODEL_URL + "model.json";
            const metadataURL = MODEL_URL + "metadata.json";
            const loadedModel = await tmImage.load(modelURL, metadataURL);
            setModel(loadedModel);
        }
        loadModel();
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setImageSrc(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const predict = async () => {
        if (!model || !imageSrc) {
            alert("Please upload an image first.");
            return;
        }

        const imageElement = document.getElementById("uploaded-image");
        const predictions = await model.predict(imageElement);
        setPredictions(predictions);

        const bestPrediction = predictions.reduce((prev, current) =>
            prev.probability > current.probability ? prev : current
        );

        if (soilDatabase[bestPrediction.className] && bestPrediction.probability > 0.7) {
            setSoilInfo(soilDatabase[bestPrediction.className]);
        } else {
            setSoilInfo(null);
        }
    };

    return (
        
            <div className=" flex w-full mt-4  ">

                {/* Left Section - Image Upload */}
                <div className="w-1/2 p-4 border-r">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Soil Image</h2>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="mb-4 w-full border p-2 rounded"
                    />
                    {imageSrc && (
                        <img 
                            id="uploaded-image" 
                            src={imageSrc} 
                            alt="Uploaded" 
                            className="rounded-lg shadow-md max-h-64 w-auto object-contain"
                        />
                    )}

                    <button onClick={predict} className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                        Predict Soil Type
                    </button>
                </div>

                {/* Right Section - Prediction Result */}
                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Soil Analysis</h2>
                    {predictions.length > 0 && (
                        <div>
                            <p className="font-medium text-gray-700">Predictions:</p>
                            {predictions.map((p, index) => (
                                <p key={index} className="text-gray-800">{p.className}: {p.probability.toFixed(2)}</p>
                            ))}
                        </div>
                    )}

                    {soilInfo && (
                        <div className="mt-4 p-4 border rounded bg-gray-50">
                            <h3 className="text-lg font-bold text-green-700">Soil Type: {soilInfo.type}</h3>
                            <p className="mt-2"><strong>Best Crops:</strong> {soilInfo.crops.join(", ")}</p>
                            <p><strong>Fertilizer:</strong> {soilInfo.fertilizer}</p>
                            <p><strong>Advice:</strong> {soilInfo.advice}</p>
                        </div>
                    )}
                </div>
            </div>
       
    );
}