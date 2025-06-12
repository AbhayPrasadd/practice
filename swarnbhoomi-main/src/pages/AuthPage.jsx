import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
} from "../firebase";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-farm.jpg')] bg-cover bg-center px-4">
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg w-full max-w-md p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-800 mb-6">
          {t("login")}
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder={t("email")}
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder={t("password")}
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg text-sm font-semibold"
          >
            {t("login")}
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-600 hover:bg-red-700 text-white p-3 mt-4 rounded-lg flex justify-center items-center gap-2 text-sm font-medium"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          {t("signin_google")}
        </button>

        <p className="mt-6 text-sm text-center text-gray-700">
          {t("no_account")}{" "}
          <span
            className="text-green-700 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            {t("signup")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
