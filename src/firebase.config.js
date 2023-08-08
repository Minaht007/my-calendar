// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9W3ERAPNhAIfHL7bunDs82zjTHXlfHTE",
  authDomain: "project-for-test-c7b3b.firebaseapp.com",
  projectId: "project-for-test-c7b3b",
  storageBucket: "project-for-test-c7b3b.appspot.com",
  messagingSenderId: "211118701339",
  appId: "1:211118701339:web:d88694bcf2abf2e796b1be",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
