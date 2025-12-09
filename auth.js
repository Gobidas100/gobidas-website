// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNFnrn_2eMEqTskBaiDVbrvwtIHNDzwmc",
  authDomain: "gobidas-7afaf.firebaseapp.com",
  projectId: "gobidas-7afaf",
  storageBucket: "gobidas-7afaf.firebasestorage.app",
  messagingSenderId: "597457220830",
  appId: "1:597457220830:web:ce834a77b967d8847e3e4f",
  measurementId: "G-Q637PCY2ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);