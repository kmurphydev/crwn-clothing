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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    console.log('grabbing snapshot');

    const snapShot = await userRef.get();
    //console.log(snapShot);

    if(snapShot.exists) {
      console.log('snapshot exists');
    }
    if(!snapShot.exists) {
      console.log('snapshot doesnt exist, adding to database');
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch(error) {
          console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => {
    try{
      auth.signInWithPopup(provider);
    } catch(error) {
      if(error.code ==='auth/popup-closed-by-user' || 
      error.code === 'auth/cancelled-popup-request') {

      } else {
        console.error(error);
      }
    }
  };

  export default firebase;