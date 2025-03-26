import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAf-3q4IpVEw0kTvMFuBOGNTBWSE8_gRs",
  authDomain: "farmersmarket-207ad.firebaseapp.com",
  projectId: "farmersmarket-207ad",
  storageBucket: "farmersmarket-207ad.appspot.com",
  messagingSenderId: "812244167943",
  appId: "1:812244167943:web:e0e3006962b48350f469a2",
  measurementId: "G-SBSQTJH95B"
};  

const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, storage };