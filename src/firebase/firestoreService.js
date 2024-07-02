import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import app from "./firebaseConfig";
class Firestore {
  firestore;
  constructor() {
    this.firestore = getFirestore(app);
  }
  async addTask(uid, data) {
    const date = new Date();
    const id = date.getMonth() + " " + date.getDay() + " " + date.getFullYear();
    try {
      const firestoreRef = await setDoc(doc(this.firestore, uid, id), {
        ...data,
      });
      return { success: true, data: firestoreRef };
    } catch (error) {
      return { success: false, data: error.message };
    }
  }
  async getTodo(uid) {
    const date = new Date();
    // const dateStr = date.toDateString();
    // const month = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December",
    // ];
    // const monthStr = month[date.getMonth()];
    const id = date.getMonth() + " " + date.getDay() + " " + date.getFullYear();
    try {
      const docRef = doc(this.firestore, uid, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { success: true, data: docSnap.data() };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  async getTasks(uid) {
    try {
      const tasks = await getDocs(collection(this.firestore, uid));
      const taskArr = [];
      const date = new Date();
      //   const todayStr = today.toDateString();
      const id =
        date.getMonth() + " " + date.getDay() + " " + date.getFullYear();
      tasks.forEach((doc) => {
        if (doc.id !== id) {
          taskArr.push({ id: doc.id, ...doc.data() });
        }
      });
      //   console.log(taskArr);
      return taskArr;
    } catch (error) {
      return error.message;
    }
  }
}
const firestoreService = new Firestore();
export default firestoreService;
