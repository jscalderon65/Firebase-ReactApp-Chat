import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyA1AT4w15WmjvEIKDD2dtNw18x3dTw9NNc",
  authDomain: "agenda-a1641.firebaseapp.com",
  databaseURL: "https://agenda-a1641.firebaseio.com",
  projectId: "agenda-a1641",
  storageBucket: "agenda-a1641.appspot.com",
  messagingSenderId: "819411310205",
  appId: "1:819411310205:web:6998e8e22263f52dec0314",
  measurementId: "G-5QDGTDT8H8",
});
const db = firebase.firestore();
export {firebase};