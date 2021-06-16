import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKltFecK4kS7b869yPOlhUqAptAdaAPUA",
  authDomain: "notes-app-3d22b.firebaseapp.com",
  projectId: "notes-app-3d22b",
  storageBucket: "notes-app-3d22b.appspot.com",
  messagingSenderId: "728202156747",
  appId: "1:728202156747:web:f527488f36637bd94d994e"
    
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;