import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  loginError: string | null;
  data: any;
}

const initialState: UserState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  loginError: null,
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.loginError = null;
    },
    loginSuccess(state) {
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.loginError = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.data = null;
    },
    fetchDataRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateDataRequest(state) {
      state.loading = true;
      state.error = null;
    },
    updateDataSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
    },
    updateDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    showError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    }
  },
});

export const {
  loginRequest, loginSuccess, loginFailure, logout,
  fetchDataRequest, fetchDataSuccess, fetchDataFailure,
  updateDataRequest, updateDataSuccess, updateDataFailure,
  showError
} = userSlice.actions;

export const userReducer = userSlice.reducer;