import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//not including everything from firebase because the dependencies are quite large
//only using /app for now and eventually /auth and /firestore

const config = {
    apiKey: "AIzaSyBVenCtVNiUyKTmSNPk57d11CRCmdobDVU",
    authDomain: "crwn-db-a9a73.firebaseapp.com",
    projectId: "crwn-db-a9a73",
    storageBucket: "crwn-db-a9a73.appspot.com",
    messagingSenderId: "759832057433",
    appId: "1:759832057433:web:97b4d01a061bd751bcc348",
    measurementId: "G-N8VVMJ3BHS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;