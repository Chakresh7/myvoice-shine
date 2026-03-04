import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlyrmz5CRqzza9rFWieWEBs0CYIQ-1quI",
  authDomain: "notes-2877b.firebaseapp.com",
  databaseURL: "https://notes-2877b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notes-2877b",
  storageBucket: "notes-2877b.firebasestorage.app",
  messagingSenderId: "920977447164",
  appId: "1:920977447164:web:5a0561858f04e70ae7df79",
  measurementId: "G-0SDVQLFLJZ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
