// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// second
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAJ8QN0W8FJLEYBTqdzP9eD5JpHUSWS63U",
//   authDomain: "aircnc-526fa.firebaseapp.com",
//   projectId: "aircnc-526fa",
//   storageBucket: "aircnc-526fa.appspot.com",
//   messagingSenderId: "510051741888",
//   appId: "1:510051741888:web:1eda936535ff8957eafd25",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
