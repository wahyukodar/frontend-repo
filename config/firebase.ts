import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBzqqKKbuwj0zcorAENgUNL6zRlXKKk0o",
  authDomain: "ebuddy-a58eb.firebaseapp.com",
  projectId: "ebuddy-a58eb",
  storageBucket: "ebuddy-a58eb.appspot.com",
  messagingSenderId: "114218353451",
  appId: "1:114218353451:web:ba5ae3f4ede840d767fb6e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);