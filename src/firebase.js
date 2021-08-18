import firebase from "firebase";

const firebaseConfig = {
    apiKey: "",
    authDomain: "netflix-clone-1a2fa.firebaseapp.com",
    projectId: "netflix-clone-1a2fa",
    storageBucket: "netflix-clone-1a2fa.appspot.com",
    messagingSenderId: "861851680635",
    appId: "1:861851680635:web:5c325d9e4db250fc4f87de"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
