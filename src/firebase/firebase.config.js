// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_iCM4_tdE8ykOXK4XEzjvhuRgGJJbeu0",
  authDomain: "smart-learning-project.firebaseapp.com",
  projectId: "smart-learning-project",
  storageBucket: "smart-learning-project.appspot.com",
  messagingSenderId: "484551913980",
  appId: "1:484551913980:web:8eed83be5c1b4aeac3c279",
  measurementId: "G-3XN6DTFF9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;