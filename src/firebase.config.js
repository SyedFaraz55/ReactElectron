import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfXmygps_FoGZC48WhjWyYWsOhFUhYnOg",
  authDomain: "groovy-marker-189908.firebaseapp.com",
  projectId: "groovy-marker-189908",
  storageBucket: "groovy-marker-189908.appspot.com",
  messagingSenderId: "1017201160973",
  appId: "1:1017201160973:web:e30e196cebff507d097644",
  measurementId: "G-PC4XZRE2E4",
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
