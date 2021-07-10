import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpLzabUBHamT5ZqD5EWk3HJHJMVOGw-lY",
  authDomain: "carbon-c9c2b.firebaseapp.com",
  projectId: "carbon-c9c2b",
  storageBucket: "carbon-c9c2b.appspot.com",
  messagingSenderId: "285805464627",
  appId: "1:285805464627:web:af1a43ef50c22493aba746",
  measurementId: "G-VEWKGJLL2X",
};

firebase.initializeApp(firebaseConfig);
//'firebaseApp' is declared but its value is never used.
export const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// export { provider };

export default firebase;
