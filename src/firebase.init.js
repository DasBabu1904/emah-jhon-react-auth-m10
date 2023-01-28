// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBZ5mqFhUarnF1CjOkO3XkIRwFZ9s-4tM",
    authDomain: "ema-jhon-ph-l01.firebaseapp.com",
    projectId: "ema-jhon-ph-l01",
    storageBucket: "ema-jhon-ph-l01.appspot.com",
    messagingSenderId: "711839929190",
    appId: "1:711839929190:web:7390098caa6acf3248aea7",
    measurementId: "G-3KVN017D6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;