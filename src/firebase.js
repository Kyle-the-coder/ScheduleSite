// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const apiKey = import.meta.env.VITE_FB_API_KEY;
const messengerId = import.meta.env.VITE_MESSENGER_ID;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const appId = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messengerId,
  appId: appId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
