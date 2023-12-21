import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsXfmCmWkr-5C1ewnioGSRJbjmjMud0go",
  authDomain: "react-coderhouse-geromc-60995.firebaseapp.com",
  projectId: "react-coderhouse-geromc-60995",
  storageBucket: "react-coderhouse-geromc-60995.appspot.com",
  messagingSenderId: "839115084896",
  appId: "1:839115084896:web:0d6f7cd66e551251a81f05"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)