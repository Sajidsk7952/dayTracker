import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import app from "./firebaseConfig";
class Firestore{
    firestore;
    constructor(){
        this.firestore = getFirestore(app);
    }
    async addTask(uid,data){
        const date = new Date();
        const dateStr = date.toDateString();
        try{
            const firestoreRef = await setDoc(doc(this.firestore,uid,dateStr),{...data})
            return firestoreRef
        }catch(error){
            return error.message
        }
    }
    async getTodo(uid) {
        const date = new Date();
        const dateStr = date.toDateString();
        try {
            const docRef = doc(this.firestore, uid, dateStr);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return { success: true, data: docSnap.data() };
            }
        } catch (error) {
            return { success: false, message: error.message };
        }
    }
    async getTasks(uid){
        try {
            const tasks = await getDocs(collection(this.firestore,uid));
            const taskArr = [];
            const today = new Date();
            const todayStr = today.toDateString();
            tasks.forEach(doc => {
                if (doc.id !== todayStr) {
                    taskArr.push({id: doc.id,...doc.data()})
                }
            });
            console.log(taskArr);
            return taskArr;
        } catch (error) {
            return error.message;
        }
    }
}
const firestoreService = new Firestore();
export default firestoreService;