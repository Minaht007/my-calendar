
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA9W3ERAPNhAIfHL7bunDs82zjTHXlfHTE",
  authDomain: "project-for-test-c7b3b.firebaseapp.com",
  projectId: "project-for-test-c7b3b",
  storageBucket: "project-for-test-c7b3b.appspot.com",
  messagingSenderId: "211118701339",
  appId: "1:211118701339:web:d88694bcf2abf2e796b1be"
};


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_CALENDAR_API_KEY,
//   authDomain: process.env.REACT_APP_CALENDAR_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_CALENDAR_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_CALENDAR_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_CALENDAR_MESSAGING_SENDER_ID ,
//   appId: process.env.REACT_APP_CALENDAR_APP_ID
// };


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

