import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crypto-monitor-db.firebaseapp.com",
  databaseURL: "https://crypto-monitor-db-default-rtdb.firebaseio.com",
  projectId: "crypto-monitor-db",
  storageBucket: "crypto-monitor-db.appspot.com",
  messagingSenderId: "832771322228",
  appId: "1:832771322228:web:c105206b40117a02e27c21",
  measurementId: "G-49Y0SXLBJC",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
