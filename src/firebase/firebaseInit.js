import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAyFQ0UqBaaH-rNbPAXyYC9N-5EaCEG1C4",
    authDomain: "yethiha-fireblog.firebaseapp.com",
    projectId: "yethiha-fireblog",
    storageBucket: "yethiha-fireblog.appspot.com",
    messagingSenderId: "775174701110",
    appId: "1:775174701110:web:bc757c43b6d2e2e5465897"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp =  firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();