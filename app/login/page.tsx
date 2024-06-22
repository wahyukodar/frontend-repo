"use client";

import React, { useEffect, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { fetchDataSuccess, loginFailure, loginRequest, loginSuccess } from '@/store/actions';
import { fetchUserData, loginAPI } from '@/apis/userApi';
import { RootState } from '@/store/store';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, loginError, isAuthenticated } = useSelector((state: RootState) => state.user);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginRequest())
    try {
      await loginAPI(email, password);
      const response = await fetchUserData();
      dispatch(fetchDataSuccess(response));
      dispatch(loginSuccess());
      toast.success('Success Login');
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error: any) {
      dispatch(loginFailure(error.message));
      toast.error('Failed Login');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">

        {loginError && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <Typography color="error" className="mt-2">{loginError}</Typography>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-md">

          <div className="p-4 bg-white rounded-lg ">
            <Typography variant="h6" className="mb-4" color={"black"}>Login</Typography>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <TextField
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  type="submit"
                  fullWidth
                >
                  {loading ? 'Login...' : 'Login'}
                </Button>
              </div>
            </form>
          </div>


        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
