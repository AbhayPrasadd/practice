import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth, onAuthStateChanged } from "./firebase";

//landing pages
import Layout from "./components/Layout";
import LandingPage from "./pages/Landing";
import AuthPage from "./pages/AuthPage";

//Sidebar pages

import Market from "./pages/Market";
import Schemes from "./pages/Schemes";
import Weather from "./pages/Weather";
import SoilType from "./pages/SoilType";
import Learning from "./pages/Learning";
import Dashboard from "./pages/Dashboard";
import ImageAnalyzer from "./pages/CropDoctor";
import MarketPrices from "./pages/MarketPrices";
import Registration from "./pages/Registration";
import CropAdvisory from "./pages/CropAdvisory";
import Community from "./pages/Community";
import MyCrop from "./pages/MyCrop";
import CropPlanner from "./pages/CropPlanner";
import FarmerAlerts from "./pages/FarmerAlerts";
import FPO from "./pages/FPO";
import Inventory from "./pages/Inventory";
import SoilAdvisory from "./pages/SoilAdvisory";
import Profile from "./pages/Profile";



const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<Registration />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard/*"
          element={user ? <Layout /> : <Navigate to="/auth" />}
        >
          <Route index element={<Dashboard />} />
          <Route path="market-prices" element={<MarketPrices />} />
          <Route path="SoilType" element={<SoilType />} />
          <Route path="cropdoctor" element={<ImageAnalyzer />} />
          <Route path="schemes" element={<Schemes />} />
          <Route path="weather" element={<Weather />} />
          <Route path="market" element={<Market />} />
          <Route path="advisory" element={<CropAdvisory />} />
          <Route path="learning" element={<Learning />} />
         
          <Route path="fpo" element={<FPO />} />
          <Route path="community" element={<Community />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="mycrop" element={<MyCrop />} />
          <Route path="soiladvisory" element={<SoilAdvisory />} />
          <Route path="cropplanner" element={<CropPlanner />} />
          <Route path="farmeralerts" element={<FarmerAlerts />} />
          <Route path="profile" element={<Profile />} />

         

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
