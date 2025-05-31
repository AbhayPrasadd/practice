import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-700 text-white py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          SwarnBhoomi 🌿
        </motion.h1>
        <div className="space-x-6">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/about" className="hover:text-yellow-400">About</a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

// Section Component
const Section = ({ title, description, image, reverse }) => {
  return (
    <section className={`py-16 px-6 ${reverse ? 'bg-gray-100' : 'bg-white'}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className={`md:w-1/2 text-center md:text-left ${reverse ? 'md:order-2' : ''}`}
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-green-700">{title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">{description}</p>
        </motion.div>
        <motion.img 
          src={image} 
          alt={title} 
          className="md:w-1/3 rounded-lg shadow-lg mt-4 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6 text-center">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-4">&copy; 2024 SwarnBhoomi. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#"><Facebook className="w-6 h-6 hover:text-yellow-400 transition" /></a>
          <a href="#"><Twitter className="w-6 h-6 hover:text-yellow-400 transition" /></a>
          <a href="#"><Instagram className="w-6 h-6 hover:text-yellow-400 transition" /></a>
        </div>
      </div>
    </footer>
  );
};

// Landing Page Component
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Navbar />

      <section
  className="flex flex-col items-center justify-center min-h-screen text-center text-white px-6"
  style={{
    backgroundImage: "url('landing_page/agri.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="bg-black bg-opacity-50 absolute inset-0"></div>
  <motion.h1
    className="text-5xl font-extrabold relative z-10"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Welcome to SwarnBhoomi 🌱
  </motion.h1>
  <motion.p
    className="mt-4 text-lg text-gray-200 max-w-2xl relative z-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.7 }}
  >
    Transforming agriculture with AI and smart data solutions to improve crop yields, reduce waste, and support sustainable farming.
  </motion.p>
  <motion.button
    onClick={() => navigate('/auth')}
    className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition relative z-10"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    Get Started
  </motion.button>
</section>




      <Section 
        title="Who We Are" 
        description="We are a passionate team of innovators working towards revolutionizing agriculture through technology."
        image="landing_page/robot.jpeg" 
      />
      <Section 
        title="The Problem We Are Solving" 
        description="Farmers face challenges like unpredictable weather, inefficient irrigation, and lack of access to real-time market data."
        image="landing_page/phone.jpg" 
        reverse
      />
      <Section 
        title="Our Solution" 
        description="AgriTech provides an AI-powered platform that gives farmers real-time insights into crop health, weather forecasts, and market trends."
        image="landing_page/voicebot.jpg" 
      />
      <Section 
        title="Our Impact" 
        description="Our platform has helped farmers reduce water usage by 30%, improve crop yields by 25%, and increase profit margins."
        image="landing_page/happy.jpg" 
        reverse
      />
      <Section 
        title="Join Us in Making a Difference" 
        description="Be a part of the future of agriculture. Sign up now to start using AgriTech and help farmers worldwide."
        image="landing_page/joinus.jpg" 
      />
      <Footer />
    </div>
  );
};

export default LandingPage;
