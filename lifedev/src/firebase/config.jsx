import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu-HOSH0tJ-ZB6i33FyClalp8JJVoHHx4",
  authDomain: "lifedev-palhares.firebaseapp.com",
  projectId: "lifedev-palhares",
  storageBucket: "lifedev-palhares.appspot.com",
  messagingSenderId: "700792758152",
  appId: "1:700792758152:web:6911f7be91253ce86ca43d",
  measurementId: "G-9GYG833DCS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };