import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDC-_4vfZPbWBYFTFX6GPETeg8jE5yXaYw",
    authDomain: "crwn-db-d916a.firebaseapp.com",
    databaseURL: "https://crwn-db-d916a.firebaseio.com",
    projectId: "crwn-db-d916a",
    storageBucket: "",
    messagingSenderId: "1043468143551",
    appId: "1:1043468143551:web:9fc9ea8c63c08775"
  
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;