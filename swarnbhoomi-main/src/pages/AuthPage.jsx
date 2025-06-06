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
    <div className="flex items-center justify-center min-h-screen bg-[url('/bg-farm.jpg')] bg-cover bg-center">
      <div className="bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-full max-w-md mx-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
          {t("login")}
        </h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder={t("email")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder={t("password")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 font-semibold"
          >
            {t("login")}
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-600 text-white p-3 mt-4 rounded-lg hover:bg-red-700 flex justify-center items-center gap-2 font-medium"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          {t("signin_google")}
        </button>

        <p className="mt-6 text-sm text-center text-gray-800">
          {t("no_account")} {" "}
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
