
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXbMYv69aUGZULWL3-5C6Wr3opP7iVfQM",
  authDomain: "netflix-clone-128ba.firebaseapp.com",
  projectId: "netflix-clone-128ba",
  storageBucket: "netflix-clone-128ba.appspot.com",
  messagingSenderId: "1078888008353",
  appId: "1:1078888008353:web:68daff9f6cd8138750fee0",
  measurementId: "G-LK6XFPW2Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);