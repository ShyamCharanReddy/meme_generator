// Correct imports
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB9zbJz1LH1VYtJftacgkQbo_DsPMRSerk",
  authDomain: "authenticate-shyam.firebaseapp.com",
  projectId: "authenticate-shyam",
  storageBucket: "authenticate-shyam.appspot.com",
  messagingSenderId: "66798870228",
  appId: "1:66798870228:web:b59d80f601fb4b33ce2541",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
