// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKvwEX1o4afVrdZAWdb1S3_PqNfUierQs",
    authDomain: "email-password-auth-fdb82.firebaseapp.com",
    projectId: "email-password-auth-fdb82",
    storageBucket: "email-password-auth-fdb82.appspot.com",
    messagingSenderId: "190865082036",
    appId: "1:190865082036:web:75fd04c2b5dd40b3b979e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;