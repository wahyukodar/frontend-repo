// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../config/firebase';
// import { updateUserData, fetchUserData } from '../apis/userApi';
// import { AppDispatch } from './store';
// import {
//   loginRequest, loginSuccess, loginFailure, fetchDataRequest, fetchDataSuccess, fetchDataFailure,
//   updateDataRequest, updateDataSuccess, updateDataFailure
// } from './reducers';

// export const fetchData = () => async (dispatch: AppDispatch) => {
//   dispatch(fetchDataRequest());
//   try {
//     const data = await fetchUserData();
//     dispatch(fetchDataSuccess(data));
//   } catch (error: any) {
//     dispatch(fetchDataFailure(error.message));
//   }
// };

// export const updateData = (data: Record<string, any>) => async (dispatch: AppDispatch) => {
//   dispatch(updateDataRequest());
//   try {
//     const updatedData = await updateUserData(data);
//     dispatch(updateDataSuccess(updatedData));
//   } catch (error: any) {
//     dispatch(updateDataFailure(error.message));
//   }
// };

// export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
//   dispatch(loginRequest());
//   try {
//     // Implement Firebase authentication logic here
//     // Example:
//     // await firebase.auth().signInWithEmailAndPassword(email, password);
//     console.log('signin')
//     await signInWithEmailAndPassword(auth, email, password);
//     console.log('success')
//     dispatch(loginSuccess());
//   } catch (error: any) {
//     console.log('error')
//     dispatch(loginFailure(error.message));
//   }
// };

// export const logout = () => async (dispatch: AppDispatch) => {
//   // Implement Firebase sign out logic here
//   // Example:
//   // await firebase.auth().signOut();
//   dispatch(logout());
// };


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  data: any;
}

const initialState: UserState = {
  isAuthenticated: false,
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    fetchDataSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
    updateDataSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
  },
});

export const {
  loginSuccess, 
  logout,
  fetchDataSuccess,
  updateDataSuccess,
} = userSlice.actions;

export const userReducer = userSlice.reducer;