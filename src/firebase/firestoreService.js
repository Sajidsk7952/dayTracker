import { getFirestore } from "firebase/firestore";
import app from "./firebaseConfig";
class Firestore{
    firestore;
    constructor(){
        this.firestore = getFirestore(app);
    }
}
const firestoreService = new Firestore();
export default firestoreService;