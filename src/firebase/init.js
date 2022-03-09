import firebase from "firebase/compat/app";
 import "firebase/compat/firestore";
 import 'firebase/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyAD8YSoS2706LqTa8ipxF2XsestrCHHRvQ",
    authDomain: "tourist-f5057.firebaseapp.com",
    projectId: "tourist-f5057",
    storageBucket: "tourist-f5057.appspot.com",
    messagingSenderId: "19708255079",
    appId: "1:19708255079:web:3c42ecdb688a592f066dc2"
  };
 

 const app = firebase.initializeApp(firebaseConfig);
   
 export default app
