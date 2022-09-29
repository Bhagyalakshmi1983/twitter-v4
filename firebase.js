// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFireStore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v4-d964f.firebaseapp.com",
  projectId: "twitter-v4-d964f",
  storageBucket: "twitter-v4-d964f.appspot.com",
  messagingSenderId: "221151226326",
  appId: "1:221151226326:web:1648907a1cb2716fdf9c77"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();
export { app, db, storage };
