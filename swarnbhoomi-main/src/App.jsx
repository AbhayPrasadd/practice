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
import Profile from "./pages/Profile";
import Advisory from  "./pages/Advisory";
import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";
import CropAdvisory from "./pages/CropAdvisory";
import Community from "./pages/Community";
import MyCrop from "./pages/MyCrop";
import VoiceBot from "./pages/VoiceBot";
import CommodityPrices from "./pages/CommodityPrices";
import Waste from "./pages/Waste";
import FPO from "./pages/FPO";
import Inventory from "./pages/Inventory";
import Learning from "./pages/Learning";
import TopicDetail from "./pages/TopicDetail";
import MandiPriceFetcher from "./pages/MandiPriceFetcher";
import Test from "./pages/Test";
import CommoditySelection from "./pages/CommoditySelection";
import Ndvi from "./pages/Ndvi";

// Schemes Section
import SchemesPage from "./pages/Schemes";
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
          {/* Main Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Feature Routes */}
          <Route path="advisory" element={<Advisory />} />
         
         
          
          <Route path="market" element={<Market />} />
          <Route path="cropAdvisory" element={<CropAdvisory />} />
          <Route path="community" element={<Community />} />
          <Route path="mycrop" element={<MyCrop />} />
          <Route path="mandiPriceFetcher" element={<MandiPriceFetcher />} />
          <Route path="voiceBot" element={<VoiceBot />} />
          <Route path="waste" element={<Waste />} />
          <Route path="test" element={<Test />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="fpo" element={<FPO />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Ndvi" element={<Ndvi />} />


          {/* Learning Section */}
          <Route path="learning" element={<Learning />} />
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
