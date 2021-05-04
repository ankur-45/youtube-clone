import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGANnrRY2sbdUZP-iiIDGSg2vbyZEEqi8",
  authDomain: "clone-22185.firebaseapp.com",
  projectId: "clone-22185",
  storageBucket: "clone-22185.appspot.com",
  messagingSenderId: "439338673422",
  appId: "1:439338673422:web:1ab08f9308194e6f3b635f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();