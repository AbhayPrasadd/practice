import React, { useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;


const FPOnearby = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [fpoCenters, setFpoCenters] = useState([]);
  const [selectedFPO, setSelectedFPO] = useState(null);
  const [manualLocation, setManualLocation] = useState("");

  const defaultLocation = { lat: 28.6139, lng: 77.2090 }; 

  const handleGetCurrentLocation = () => {
    alert("Please allow location access to find nearby FPO centers.");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentLocation(userLocation);
          fetchNearbyFPOs(userLocation);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert("⚠️ Location permission denied. Please allow it to find nearby FPOs.");
          } else {
            console.error("Geolocation error:", error);
            alert("Unable to retrieve your location.");
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const fetchNearbyFPOs = (location) => {
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    const request = {
      location: new window.google.maps.LatLng(location.lat, location.lng),
      radius: 50000,
      keyword: "FPO center",
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setFpoCenters(results);
      } else {
        console.error("Places API error:", status);
        alert("No FPO centers found nearby.");
      }
    });
  };

  const handleManualLocationSubmit = async () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: manualLocation }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;
        const latLng = { lat: location.lat(), lng: location.lng() };
        setCurrentLocation(latLng);
        fetchNearbyFPOs(latLng);
      } else {
        alert("Location not found. Please enter a valid location.");
      }
    });
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Map Section */}
        <div className="w-full md:w-2/3 h-96 md:h-full relative">
          <GoogleMap
            center={currentLocation || selectedFPO || defaultLocation}
            zoom={12}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          >
            {!currentLocation && !selectedFPO && (
              <Marker position={defaultLocation} label="Delhi" />
            )}
            {currentLocation && <Marker position={currentLocation} label="You" />}
            {fpoCenters.map((place, index) => (
              <Marker
                key={index}
                position={{
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng(),
                }}
                title={place.name}
                onClick={() =>
                  setSelectedFPO({
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                  })
                }
              />
            ))}
          </GoogleMap>

          <div className="absolute top-4 left-4 space-y-2 w-64">
            <button
              onClick={handleGetCurrentLocation}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 text-sm w-full"
            >
              Get My Location
            </button>
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="Enter district or state"
                value={manualLocation}
                onChange={(e) => setManualLocation(e.target.value)}
                className="p-2 text-sm rounded border w-full"
              />
              <button
                onClick={handleManualLocationSubmit}
                className="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* FPO List Section */}
        <div className="w-full md:w-1/3 p-4 bg-gray-100 overflow-y-auto max-h-96 md:max-h-full">
          <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-4 text-center md:text-left">
            Nearby FPO Centers
          </h2>
          <ul className="space-y-2">
            {fpoCenters.length > 0 ? (
              fpoCenters.map((place, index) => (
                <li
                  key={index}
                  className="p-3 bg-white rounded shadow cursor-pointer hover:bg-green-100"
                  onClick={() =>
                    setSelectedFPO({
                      lat: place.geometry.location.lat(),
                      lng: place.geometry.location.lng(),
                    })
                  }
                >
                  {place.name}
                </li>
              ))
            ) : (
              <p className="text-gray-600 text-sm text-center md:text-left">
                No FPO centers found. Try another location.
              </p>
            )}
          </ul>
        </div>
      </div>
    </LoadScript>
  );
};

export default FPOnearby;
