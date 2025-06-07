// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyA_3YGUhreHbPhmghGDKczL4T77pcRmjNo",
  authDomain: "fir-5104f.firebaseapp.com",
  projectId: "fir-5104f",
  messagingSenderId: "871072338128",
  appId: "1:871072338128:web:3f1ead80651f56d5b3ced5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
  });
});
