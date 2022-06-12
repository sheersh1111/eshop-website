import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKyDDtxbXKGRWTZ6vAyAyXF3jnX_MNGFU",
  authDomain: "eshop-d93e0.firebaseapp.com",
  projectId: "eshop-d93e0",
  storageBucket: "eshop-d93e0.appspot.com",
  messagingSenderId: "655124731485",
  appId: "1:655124731485:web:d514c4ffeca79de1865fb4",
  measurementId: "G-XQ64JCMBW1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth=getAuth();
export {db,auth};