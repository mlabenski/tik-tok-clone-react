import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDYnDQsmy-hgMlw50bWqKNV7itsmQC5hGo",
    authDomain: "tik-tok-clone-23571.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-23571.firebaseio.com",
    projectId: "tik-tok-clone-23571",
    storageBucket: "tik-tok-clone-23571.appspot.com",
    messagingSenderId: "152024530595",
    appId: "1:152024530595:web:167bd1f0f2895010044916"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;