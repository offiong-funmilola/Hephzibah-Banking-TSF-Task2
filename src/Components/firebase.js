
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSwp4PnEjRYVEYOwKtBPOSQgE7AhgnE7c",
  authDomain: "banking-app-105c6.firebaseapp.com",
  projectId: "banking-app-105c6",
  storageBucket: "banking-app-105c6.appspot.com",
  messagingSenderId: "461571863383",
  appId: "1:461571863383:web:6ab5181863bccd30b90412",
  measurementId: "G-YZPXG7CWKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)