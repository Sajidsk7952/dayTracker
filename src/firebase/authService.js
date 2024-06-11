import app from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
class Auth {
  auth;
  constructor() {
    this.auth = getAuth(app);
  }
  async createAccount(email, password) {
    try {
      const userCredential =  await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      return user;
    } catch (error) {
      return error.message;
    }
  }
  getAccount() {
    return new Promise((resolve, reject) => {
      try {
        onAuthStateChanged(this.auth, (user) => {
          if (user) {
            resolve(user);
          } else {
            resolve(null);
          }
        });
      } catch (error) {
        reject(error.message);
      }
    });
  }
  async loginAccount(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      return user;
    } catch (error) {
      return error.message;
    }
  }
  async googleAuthHandler() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      return result;
    } catch (error) {
      return error.message;
    }
  }
  async facebookAuthHandler(){
    try{
      const facebookProvider = new FacebookAuthProvider();
      const result = await signInWithPopup(this.auth,facebookProvider);
      return result;
    }catch(error){
      return error.message;
    }
  }
  logoutHandler() {
    try {
      return signOut(this.auth);
    } catch (error) {
      return error.message;
    }
  }
}

const authService = new Auth();
export default authService;
