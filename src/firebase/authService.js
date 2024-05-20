import app from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
class Auth {
  auth;
  constructor() {
    this.auth = getAuth(app);
  }
  async createAccount(email, password) {
    try {
      return await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      return error.message;
    }
  }
  getAccount(){
    try {
      return onAuthStateChanged(this.auth,(user)=>{
        if(user){
          return user;
        }
        return null;
      })
    } catch (error) {
      
    }
  }
  async loginAccount(email, password) {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      return error.message;
    }
  }
}

const authService = new Auth();
export default authService;
