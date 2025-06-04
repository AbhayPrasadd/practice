import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const Registration = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
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

      // Save to Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        state: formData.state,
        district: formData.district,
        farmerType: formData.farmerType,
      });

      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
          {t("signup_title")}
        </h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form className="space-y-4" onSubmit={handleRegister}>
          <input type="text" name="fullName" placeholder={t("full_name")} className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="email" name="email" placeholder={t("email")} className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="password" name="password" placeholder={t("password")} className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder={t("phone")} className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="text" name="country" placeholder={t("country")} className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="text" name="state" placeholder={t("state")} className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="text" name="district" placeholder={t("district")} className="w-full p-2 border rounded" onChange={handleChange} required />
          <select name="farmerType" className="w-full p-2 border rounded" onChange={handleChange} required>
            <option value="">{t("select_farmer_type")}</option>
            <option value="Organic">{t("organic")}</option>
            <option value="Commercial">{t("commercial")}</option>
            <option value="Livestock">{t("livestock")}</option>
          </select>

          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700">
            {t("register")}
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          {t("already_account")}
          <span className="text-green-600 cursor-pointer ml-1" onClick={() => navigate("/auth")}>
            {t("login")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
