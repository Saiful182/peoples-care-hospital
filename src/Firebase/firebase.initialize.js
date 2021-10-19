import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confiq";


const initializedAuthentication = () => {

    initializeApp(firebaseConfig);
}

export default initializedAuthentication;

