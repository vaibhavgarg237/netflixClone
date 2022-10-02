// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBYWn2pcnDvIuNOhnMVJTnYmm67p04RsKs",
  authDomain: "netflix-clone-react-41c61.firebaseapp.com",
  projectId: "netflix-clone-react-41c61",
  storageBucket: "netflix-clone-react-41c61.appspot.com",
  messagingSenderId: "124018340687",
  appId: "1:124018340687:web:cacc1afe4a5d9301ddcb3a",
  measurementId: "G-17B8G3DZ2E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
