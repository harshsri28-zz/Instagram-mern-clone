import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCb-0vKF9MetgS-lxsMXZ3OnHUMyqMsncY",
  authDomain: "instagram-clone-react-5e468.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-5e468.firebaseio.com",
  projectId: "instagram-clone-react-5e468",
  storageBucket: "instagram-clone-react-5e468.appspot.com",
  messagingSenderId: "861348486330",
  appId: "1:861348486330:web:570b548d5fdf57b579f683",
  measurementId: "G-STTGYZK64W"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
