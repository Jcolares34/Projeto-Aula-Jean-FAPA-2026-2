// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

const hasFirebaseConfig = Boolean(firebaseConfig.apiKey);

// Initialize Firebase only when credentials are available.
const fireabseApp = hasFirebaseConfig ? initializeApp(firebaseConfig) : null;

// Initialize Firebase Authentication and get a reference to the service
const firebaseAuth = fireabseApp ? getAuth(fireabseApp) : null;




export { fireabseApp, firebaseAuth };