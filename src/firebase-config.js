// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIERBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIERBASE_AUTH_DOMAINE,
    projectId: process.env.REACT_APP_FIERBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIERBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIERBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIERBASE_APP_ID,
    databaseURL: process.env.REACT_APP_FIERBASE_DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);