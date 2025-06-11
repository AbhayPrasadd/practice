import React, { useState } from "react";
import { auth, db } from "../firebase";
import axios from "axios";
import toast from "react-hot-toast";
import { doc, getDoc } from "firebase/firestore";

const FCMTester = () => {
  const [title, setTitle] = useState("Test Notification");
  const [body, setBody] = useState("This is a test body.");

  const sendTestNotification = async () => {
    const user = auth.currentUser;
    if (!user) return toast.error("Please login first");

    const docSnap = await getDoc(doc(db, "users", user.uid));
    const fcmToken = docSnap.data()?.fcmToken;

    if (!fcmToken) return toast.error("FCM token not found. Try refreshing page");

    try {
      await axios.post("http://localhost:3000/send-notification", {
        token: fcmToken,
        title,
        body,
        uid: user.uid,
      });
      toast.success("✅ Notification sent!");
    } catch (err) {
      console.error("Send failed:", err);
      toast.error("❌ Notification failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-xl font-bold mb-4">Send Test Notification</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        placeholder="Notification Title"
      />
      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        placeholder="Notification Body"
      />
      <button
        onClick={sendTestNotification}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        🚀 Send Notification
      </button>
    </div>
  );
};

export default FCMTester;