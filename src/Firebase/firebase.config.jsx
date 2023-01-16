import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyBF17zFZg2GPaY3ZjiaM46cNmB3DVu1svg",
   authDomain: "car-doctor-e1205.firebaseapp.com",
   projectId: "car-doctor-e1205",
   storageBucket: "car-doctor-e1205.appspot.com",
   messagingSenderId: "1038828277062",
   appId: "1:1038828277062:web:6d9a70dcf66273be31e947"
};

const app = initializeApp(firebaseConfig);

export default app;