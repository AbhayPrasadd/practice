import { getToken, deleteToken, onMessage } from "firebase/messaging";
import { messaging, auth, db } from "../firebase";
import { doc, setDoc, deleteField } from "firebase/firestore";
import toast from "react-hot-toast";

export const setupFCM = async () => {
  if (Notification.permission === "default") {
    await Notification.requestPermission();
  }

  if (Notification.permission !== "granted") {
    toast.error("⚠️ Notifications are disabled");
    return;
  }

  const user = auth.currentUser;
  if (!user) return;

  try {
    const token = await getToken(messaging, {
      vapidKey: "BHaK9hrm5c9TTRGM6F-fJQY-6N3aZqqpLPc-moGrGCTqL2iZ4e2uI3BsgkWXQiVsu_Jk5sgUNYeDmNTgLuG4t5s",
    });

    if (token) {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, { fcmToken: token }, { merge: true });
      toast.success("🔔 Notifications Enabled");
    }
  } catch (err) {
    console.error("FCM Error:", err);
    toast.error("❌ Failed to get FCM Token");
  }
};

export const cleanupFCMToken = async () => {
  const user = auth.currentUser;
  if (!user) return;
  try {
    await deleteToken(messaging);
    await setDoc(doc(db, "users", user.uid), { fcmToken: deleteField() }, { merge: true });
  } catch (err) {
    console.error("Error cleaning FCM token", err);
  }
};

export const listenToForegroundMessages = (setNotifications) => {
  return onMessage(messaging, (payload) => {
    const { title, body } = payload.notification;
    toast(`${title}: ${body}`);
    setNotifications((prev) => [
      { title, body, time: new Date().toLocaleTimeString() },
      ...prev,
    ]);
  });
};
