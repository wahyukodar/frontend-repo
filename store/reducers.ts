// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface UserState {
//   isAuthenticated: boolean;
//   loading: boolean;
//   error: string | null;
//   data: any;
// }

// const initialState: UserState = {
//   isAuthenticated: false,
//   loading: false,
//   error: null,
//   data: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     loginRequest(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     loginSuccess(state) {
//       state.isAuthenticated = true;
//       state.loading = false;
//     },
//     loginFailure(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//     fetchDataRequest(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchDataSuccess(state, action: PayloadAction<any>) {
//       state.loading = false;
//       state.data = action.payload;
//     },
//     fetchDataFailure(state, action: PayloadAction<string>) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     updateDataRequest(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     updateDataSuccess(state, action: PayloadAction<any>) {
//       state.loading = false;
//       state.data = action.payload;
//     },
//     updateDataFailure(state, action: PayloadAction<string>) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   loginRequest, loginSuccess, loginFailure, logout,
//   fetchDataRequest, fetchDataSuccess, fetchDataFailure,
//   updateDataRequest, updateDataSuccess, updateDataFailure
// } = userSlice.actions;

// export const userReducer = userSlice.reducer;


import { combineReducers } from 'redux';
import { userReducer } from './actions';

const rootReducer = combineReducers({
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
