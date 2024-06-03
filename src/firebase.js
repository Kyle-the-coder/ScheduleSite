// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8jvEVJAQjTP6witn7riBZoqOBAAf1sO0",
  authDomain: "renewedmobilitysolutions.firebaseapp.com",
  projectId: "renewedmobilitysolutions",
  storageBucket: "renewedmobilitysolutions.appspot.com",
  messagingSenderId: "682157552795",
  appId: "1:682157552795:web:a7a0f36b65a599c2a4023e",
  measurementId: "G-8NCQ8FQ1PH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const analytics = getAnalytics(app);
