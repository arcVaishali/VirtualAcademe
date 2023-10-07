import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCaqlko7ZHc6XM5HWNzIA5y6vZ49FY2HXA",
  authDomain: "virtual-campus-7bd37.firebaseapp.com",
  projectId: "virtual-campus-7bd37",
  storageBucket: "virtual-campus-7bd37.appspot.com",
  messagingSenderId: "815469823017",
  appId: "1:815469823017:web:031116df7e820a94e48838"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);