// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJbh2fp1W0ONtv-dfPw7WeadzIyZBjbn0",
  authDomain: "pet-poison-alert.firebaseapp.com",
  projectId: "pet-poison-alert",
  storageBucket: "pet-poison-alert.appspot.com",
  messagingSenderId: "325649458101",
  appId: "1:325649458101:web:0512f50bacdddaedaceffc",
  measurementId: "G-STPZG8HHJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;