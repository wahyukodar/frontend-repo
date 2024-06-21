import axios from 'axios';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000';

export const updateUserData = async (data: Record<string, any>) => {

  const token = await auth.currentUser?.getIdToken();
  const uid = auth.currentUser?.uid;

  if (!uid) {
    throw new Error('User not authenticated');
  }

  const response = await axios.put(
    `${API_URL}/update-user-data/${uid}`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const fetchUserData = async () => {
  const token = await auth.currentUser?.getIdToken();
  const uid = auth.currentUser?.uid;
  if (!uid) {
    throw new Error('User not authenticated');
  }
  const response = await axios.get(`${API_URL}/fetch-user-data/${uid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
 
  return response.data;
};

export const loginAPI = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const logoutAPI = async () => {
  await signOut(auth);
};