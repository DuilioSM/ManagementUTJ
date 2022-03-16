// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0l2xrOJyQxI8XzbsLsgL0_KBLSC4ZeE0",
  authDomain: "fir-react-todo-6bac8.firebaseapp.com",
  projectId: "fir-react-todo-6bac8",
  storageBucket: "fir-react-todo-6bac8.appspot.com",
  messagingSenderId: "1012967706101",
  appId: "1:1012967706101:web:eba8f4fcfa563ff07524bc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app);

export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const deleteTask = async (id) => 
  await deleteDoc(doc(db, "tasks", id));


// export const getTask = (id) => getDoc(doc(db, "tasks", id));
export const getTasks = () => getDocs(collection(db, "tasks"));
