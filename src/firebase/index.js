// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4Qtkdy70E72c8SDQPMGsPLPtEWrYnhjo",
  authDomain: "this-is-your-memories.firebaseapp.com",
  projectId: "this-is-your-memories",
  storageBucket: "this-is-your-memories.appspot.com",
  messagingSenderId: "715530175517",
  appId: "1:715530175517:web:a1380e45abde5cd622b2f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const storage = getStorage();

export const db = getDatabase();
