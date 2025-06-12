import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth, onAuthStateChanged } from "./firebase";

// Layout
import Layout from "./components/Layout";

// Public Pages
import LandingPage from "./pages/Landing";
import AuthPage from "./pages/AuthPage";
import Registration from "./pages/Registration";

// Dashboard Pages
import Dashboard from "./pages/Dashboard";
import MyCrop from "./pages/MyCrop";
import VoiceBot from "./pages/VoiceBot";
import Inventory from "./pages/Inventory";
import Weather from "./pages/Weather";
import Profile from "./pages/ProfilePage";
import Advisory from "./pages/AdvisoryPage";
import AgroRentTab from "./pages/AgroRentTab";
import SoilAdvisory from "./pages/SoilAdvisory";
import Community from "./pages/CommunityPage";
import Waste from "./pages/Waste";
import FPO from "./pages/FpoPage";
import Learning from "./pages/Learning";
import TopicDetail from "./pages/TopicDetail";
import Ndvi from "./pages/Ndvi";
import MandiPage from "./pages/MandiPage";
import CommoditySelection from "./pages/CommoditySelection";
import CommodityPrices from "./pages/CommodityPrices"; 
import FarmingAlerts from "./pages/FarmingAlerts";



// Schemes Section
import SchemesPage from "./pages/SchemesPage";
import SchemesLayout from "./pages/SchemesLayout";
import Agriculture from "./pages/schemes/Agriculture";
import Irrigation from "./pages/schemes/Irrigation";
import Animal from "./pages/schemes/Animal";
import FarmMachine from "./pages/schemes/FarmMachine";
import Horticulture from "./pages/schemes/Horticulture";
import Others from "./pages/schemes/Others";

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
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<Registration />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard/*"
          element={user ? <Layout /> : <Navigate to="/auth" />}
        >
          <Route index element={<Dashboard />} />

          {/* Feature Pages */}
          <Route path="advisoryPage" element={<Advisory />} />
          <Route path="SoilAdvisory" element={<SoilAdvisory />} />
          <Route path="communityPage" element={<Community />} />
          <Route path="cropGuide" element={<MyCrop />} />
          <Route path="voiceBot" element={<VoiceBot />} />
          <Route path="waste" element={<Waste />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="fpoPage" element={<FPO />} />
          <Route path="profilePage" element={<Profile />} />
          <Route path="Ndvi" element={<Ndvi />} />
          <Route path="weather" element={<Weather />} />
          <Route path="agroRentTab" element={<AgroRentTab />} />
          <Route path="mandiPage" element={<MandiPage />} />
           <Route path="farmingAlerts" element={<FarmingAlerts />} />


          {/* Learning Section */}
          <Route path="learningPage" element={<Learning />} />
          <Route path="learning/:id" element={<TopicDetail />} />

          {/* Commodity Pricing */}
          <Route path="commoditySelection" element={<CommoditySelection />} />
          <Route path="commodity/:name" element={<CommodityPrices />} />

          {/* Schemes Section */}
          <Route path="schemes" element={<SchemesLayout />}>
            <Route index element={<SchemesPage />} />
            <Route path="agriculture" element={<Agriculture />} />
            <Route path="irrigation" element={<Irrigation />} />
            <Route path="horticulture" element={<Horticulture />} />
            <Route path="machines" element={<FarmMachine />} />
            <Route path="animal" element={<Animal />} />
            <Route path="others" element={<Others />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
