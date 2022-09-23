import { initializeApp } from "firebase/app";
//importo el metodo getFirebase
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLC3zA_9A-M345U2ajskzsC5apPoVBKeU",
    authDomain: "e-commerce-harrypotter.firebaseapp.com",
    projectId: "e-commerce-harrypotter",
    storageBucket: "e-commerce-harrypotter.appspot.com",
    messagingSenderId: "178747410873",
    appId: "1:178747410873:web:77e1b41af0afc0ef370e68"
};

const app = initializeApp(firebaseConfig);

//creo una cosntante y lo igualo al metodo con la configuracion que la tengo en la constante app
export const dataBase = getFirestore(app);