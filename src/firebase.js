import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyDZhOPPeXGMGu9PuKsrHWKedFY6AG0e9vc",
  authDomain: "form-7db7a.firebaseapp.com",
  databaseURL: "https://form-7db7a-default-rtdb.firebaseio.com",
  projectId: "form-7db7a",
  storageBucket: "form-7db7a.appspot.com",
  messagingSenderId: "666106050015",
  appId: "1:666106050015:web:a34e80d7342209fad0006a"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)