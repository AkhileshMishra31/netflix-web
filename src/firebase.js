// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWuM2Wld0GR6bseJDqs-J-f5X-gtCn6Gk",
    authDomain: "netflix-app-66f5f.firebaseapp.com",
    projectId: "netflix-app-66f5f",
    storageBucket: "netflix-app-66f5f.appspot.com",
    messagingSenderId: "410860910567",
    appId: "1:410860910567:web:df206590486a4c3d462f42"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export {auth}