import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-tFzna9oAvuPVh9VIvQ9Ouq7Y4LaIlSo",
  authDomain: "projeto-mvp-app-6d0f4.firebaseapp.com",
  projectId: "projeto-mvp-app-6d0f4",
  storageBucket: "projeto-mvp-app-6d0f4.appspot.com",
  messagingSenderId: "1089920800759",
  appId: "1:1089920800759:web:16b5d189e0c3b74ac680f2"
};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp