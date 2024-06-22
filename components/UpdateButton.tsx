'use client';

import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { updateDataSuccess, showError, updateDataRequest } from '../store/actions';
import { fetchUserData, updateUserData } from '../apis/userApi';
import { RootState } from '../store/reducers';
import { toast } from 'react-toastify';

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.user);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      dispatch(showError('Unauthorized!!. You must be logged in to update data'))
      toast.error('Unauthorized!!. You must be logged in to update data');
      return;
    }

    const dataToUpdate = {
      firstName,
      lastName,
    };

    try {
      dispatch(updateDataRequest());
      await updateUserData(dataToUpdate);
      const response = await fetchUserData();
      dispatch(updateDataSuccess(response.data));
      toast.success('Success update data');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg ">
      <Typography variant="h6" className="mb-4" color={"black"}>Update User Data</Typography>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          // disabled={loading}
          fullWidth
          type="submit"
        >
          {loading ? 'Updating...' : 'Update Data'}
        </Button>
      </form>
    </div>
  );
};

export default UpdateButton;