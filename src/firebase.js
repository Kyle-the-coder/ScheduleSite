// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const apiKey1 = import.meta.env.VITE_FB_API_KEY;
const authDomain1 = import.meta.env.VITE_AUTH_DOMAIN;
const messengerId1 = import.meta.env.VITE_MESSENGER_ID;
const appId1 = import.meta.env.VITE_APP_ID;
const measurementId1 = import.meta.env.VITE_MEASUREMENT_ID;
const projectId1 = import.meta.env.VITE_PROJECT_ID;
const storageBucket1 = import.meta.env.VITE_STORAGE_BUCKET;

const firebaseConfig = {
  apiKey: apiKey1,
  authDomain: authDomain1,
  projectId: projectId1,
  storageBucket: storageBucket1,
  messagingSenderId: messengerId1,
  appId: appId1,
  measurementId: measurementId1,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const analytics = getAnalytics(app);
