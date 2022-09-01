// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase//database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDajOG0OpQ2OVBX39XWN63oPcDnZg0dlBA",
  authDomain: "mostrans-technical-test.firebaseapp.com",
  projectId: "mostrans-technical-test",
  storageBucket: "mostrans-technical-test.appspot.com",
  messagingSenderId: "35377572583",
  appId: "1:35377572583:web:6283160e2d25759a6ad042",
  measurementId: "G-6EVJKH7RHL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
