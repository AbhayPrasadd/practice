import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithPopup, googleProvider } from "../firebase";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700">Login</button>
        </form>

        <button onClick={handleGoogleSignIn} className="w-full bg-red-600 text-white p-2 mt-3 rounded-lg hover:bg-red-700">
          Sign in with Google
        </button>

        <p className="mt-4 text-sm text-center">
          Don't have an account?
          <span className="text-green-600 cursor-pointer" onClick={() => navigate("/register")}> Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
