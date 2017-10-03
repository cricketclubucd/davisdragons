import * as firebase from 'firebase';

export const FIREBASE_CONFIG  = {
    apiKey: "AIzaSyD6anW3vwA6GRjWrrdz2L43QEqOVecGrgo",
    authDomain: "davisdragons-b41c9.firebaseapp.com",
    databaseURL: "https://davisdragons-b41c9.firebaseio.com",
    projectId: "davisdragons-b41c9",
    storageBucket: "davisdragons-b41c9.appspot.com",
    messagingSenderId: "881322195809"
  };
  
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
firebase.initializeApp(FIREBASE_CONFIG);