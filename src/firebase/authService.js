import app from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
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
  getAccount() {
    try {
      return onAuthStateChanged(this.auth, (user) => {
        if (user) {
          return user;
        }
        return null;
      });
    } catch (error) {}
  }
  async loginAccount(email, password) {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      return error.message;
    }
  }
  async googleAuthHandler() {
    try {
      const provider = new GoogleAuthProvider();
      const result = signInWithPopup(this.auth, provider);
      return result;
    } catch (error) {
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
