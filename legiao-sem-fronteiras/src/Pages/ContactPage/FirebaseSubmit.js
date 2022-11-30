// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg5jdCJmVS1copsmdaORT7Tk0hLk6MMK0",
  authDomain: "projeto-legiao.firebaseapp.com",
  projectId: "projeto-legiao",
  storageBucket: "projeto-legiao.appspot.com",
  messagingSenderId: "821971336778",
  appId: "1:821971336778:web:25a2256e5e5373fc3930b3",
  measurementId: "G-JTHMJYWN3P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function SendEmailFirebase(e) {
  e.preventDefault();

  var nome = document.querySelector("#username").value;
  var email = document.querySelector("#useremail").value;
  var message = document.querySelector("#usermessage").value;
  console.log(nome, email, message);

  try {
    const docRef = await addDoc(collection(db, "emails"), {
      nome: nome,
      email: email,
      message: message
    });

    alert("Seu email foi mandado com sucesso.")
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
