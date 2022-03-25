import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCi1Qni35Gqt4GhHBugRv-GWb3jjtCch_8",
  authDomain: "personance-4cf8c.firebaseapp.com",
  projectId: "personance-4cf8c",
  storageBucket: "personance-4cf8c.appspot.com",
  messagingSenderId: "581757251032",
  appId: "1:581757251032:web:d4ca14bab4bd890ce516ad",
  measurementId: "G-BQ05FKWB9R",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebaseAuth;

export { firebase, auth, app };
