import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { auth, signInWithEmailAndPassword, signInWithPopup, googleProvider } from "../firebase";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">{t("login")}</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder={t("email")}
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder={t("password")}
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
          >
            {t("login")}
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-600 text-white p-2 mt-3 rounded-lg hover:bg-red-700"
        >
          {t("signin_google")}
        </button>

        <p className="mt-4 text-sm text-center">
          {t("no_account")}
          <span
            className="text-green-600 cursor-pointer ml-1"
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
