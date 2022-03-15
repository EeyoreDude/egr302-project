import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCgwHkZtMCwHqiCKcj3mrJ8fhMcr-_SxB0",

  authDomain: "whiteboard-d350c.firebaseapp.com",

  projectId: "whiteboard-d350c",

  storageBucket: "whiteboard-d350c.appspot.com",

  messagingSenderId: "206699738478",

  appId: "1:206699738478:web:5afb1af2f46e2c65aa3d7f"

};


// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()