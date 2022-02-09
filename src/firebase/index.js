import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR669zyxgzVp8DUHSZMEWCgkoMbSjZ4VE",
  authDomain: "ecommerce-react-ch-8fd1f.firebaseapp.com",
  projectId: "ecommerce-react-ch-8fd1f",
  storageBucket: "ecommerce-react-ch-8fd1f.appspot.com",
  messagingSenderId: "566041290077",
  appId: "1:566041290077:web:c3484a65791158771074b4",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
