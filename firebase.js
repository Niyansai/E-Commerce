import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPdxbFx-3_Y13SKZ7-lDXXTxKEyJ8ZCPw",
  authDomain: "saiecommerce.firebaseapp.com",
  projectId: "saiecommerce",
  storageBucket: "saiecommerce.appspot.com",
  messagingSenderId: "854551583598",
  appId: "1:854551583598:web:da9b2adfac2ff95c63bf7f"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };



