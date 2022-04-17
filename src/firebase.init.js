import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6dkSKOitA8ijSogU8VDlh-Xs6bXT-NIk",
  authDomain: "wedding-photographer-3bcde.firebaseapp.com",
  projectId: "wedding-photographer-3bcde",
  storageBucket: "wedding-photographer-3bcde.appspot.com",
  messagingSenderId: "622877838914",
  appId: "1:622877838914:web:60ec99e84eea55014a67db",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
