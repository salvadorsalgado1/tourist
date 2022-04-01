import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Required for side-effects
require("firebase/firestore");
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD8YSoS2706LqTa8ipxF2XsestrCHHRvQ",
  authDomain: "tourist-f5057.firebaseapp.com",
  projectId: "tourist-f5057",
  storageBucket: "tourist-f5057.appspot.com",
  messagingSenderId: "19708255079",
  appId: "1:19708255079:web:3c42ecdb688a592f066dc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();



createApp(App).use(store).use(router).mount('#app')
 