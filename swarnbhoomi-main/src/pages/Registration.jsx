import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    country: "",
    state: "",
    district: "",
    farmerType: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      // Store user details in Firestore under "users" collection
      await setDoc(doc(db, "users", user.uid), {
        fullName: formData.fullName,
        email: formData.email,
        country: formData.country,
        state: formData.state,
        district: formData.district,
        farmerType: formData.farmerType,
      });

      navigate("/dashboard"); // Redirect after successful registration
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form className="space-y-4" onSubmit={handleRegister}>
          <input type="text" name="fullName" placeholder="Full Name" className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="text" name="country" placeholder="Country" className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="text" name="state" placeholder="State" className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="text" name="district" placeholder="District" className="w-full p-2 border rounded" onChange={handleChange} required />
          <select name="farmerType" className="w-full p-2 border rounded" onChange={handleChange} required>
            <option value="">Select Farmer Type</option>
            <option value="Organic">Organic Farmer</option>
            <option value="Commercial">Commercial Farmer</option>
            <option value="Livestock">Livestock Farmer</option>
          </select>

          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700">
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?
          <span className="text-green-600 cursor-pointer" onClick={() => navigate("/auth")}> Login</span>
        </p>
      </div>
    </div>
  );
};

export default Registration;