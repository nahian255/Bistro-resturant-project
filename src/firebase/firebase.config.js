// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6YKlIHXBnAku9i62hs9CqMuXbi1J-mEI",
    authDomain: "bistro-res-project.firebaseapp.com",
    projectId: "bistro-res-project",
    storageBucket: "bistro-res-project.appspot.com",
    messagingSenderId: "305770230942",
    appId: "1:305770230942:web:feea8833824a10304bb78f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;