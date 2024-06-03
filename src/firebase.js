// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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
  projectId: messengerId1,
  storageBucket: appId1,
  messagingSenderId: measurementId1,
  appId: projectId1,
  measurementId: storageBucket1,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const analytics = getAnalytics(app);
