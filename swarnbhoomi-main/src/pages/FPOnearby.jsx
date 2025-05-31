import React, { useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "AIzaSyDQmlpnfUCxPaykD5-sB2PqF605TBU7FAU"; // Replace with your actual API key

const FPO = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [fpoCenters, setFpoCenters] = useState([]);
  const [selectedFPO, setSelectedFPO] = useState(null);

  // Default location (Delhi)
  const defaultLocation = { lat: 28.6139, lng: 77.2090 };

  // Function to get user's current location
  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log("User's Current Location:", userLocation);
          setCurrentLocation(userLocation);
          fetchNearbyFPOs(userLocation);
        },
        (error) => console.error("Geolocation error:", error),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Fetch nearby FPOs using Google Places API
  const fetchNearbyFPOs = (location) => {
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    const request = {
      location: new window.google.maps.LatLng(location.lat, location.lng),
      radius: 50000, // 50 km radius
      keyword: "FPO center", // Try "FPO center", "farmers market"
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setFpoCenters(results);
      } else {
        console.error("Places API error:", status);
      }
    });
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
      <div className="flex h-screen">
        {/* Left Side - Google Map */}
        <div className="w-2/3 h-full relative">
          <GoogleMap
            center={currentLocation || selectedFPO || defaultLocation} // Start at Delhi, update later
            zoom={12}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          >
            {/* Default Location Marker (Delhi) */}
            {!currentLocation && !selectedFPO && (
              <Marker position={defaultLocation} label="Delhi" />
            )}

            {/* User's Current Location Marker */}
            {currentLocation && <Marker position={currentLocation} label="You" />}

            {/* FPO Markers */}
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

          {/* Get Location Button */}
          <button
            onClick={handleGetCurrentLocation}
            className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-600"
          >
            Get Current Location
          </button>
        </div>

        {/* Right Side - List of Nearby FPO Centers */}
        <div className="w-1/3 p-4 overflow-y-auto bg-gray-100">
          <h2 className="text-xl font-bold mb-4">Nearby FPO Centers</h2>
          <ul>
            {fpoCenters.length > 0 ? (
              fpoCenters.map((place, index) => (
                <li
                  key={index}
                  className="p-3 bg-white mb-2 shadow-md cursor-pointer hover:bg-gray-200"
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
              <p>No FPO centers found nearby. Click "Get Current Location".</p>
            )}
          </ul>
        </div>
      </div>
    </LoadScript>
  );
};

export default FPO;
