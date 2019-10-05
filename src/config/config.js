import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyD-PuU0IAXHdqRza_souESwRjYgF7D3Qac",
    authDomain: "reactfirebase-7f6b7.firebaseapp.com",
    databaseURL: "https://reactfirebase-7f6b7.firebaseio.com",
    projectId: "reactfirebase-7f6b7",
    storageBucket: "",
    messagingSenderId: "246594699616",
    appId: "1:246594699616:web:2f3c5480e1f76932a69e05"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.database()