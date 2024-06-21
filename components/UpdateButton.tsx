'use client';


// import { useState } from 'react';
// import { Button, Typography } from '@mui/material';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store/store';
// import { updateUserData } from '../apis/userApi';

// export default function UpdateButton() {
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const isLoggedIn = useSelector((state: RootState) => state.user.isAuthenticated);
//   const { isAuthenticated, loading, error } = useSelector((state: RootState) => state.user);

//   const handleClick = async () => {
//     if (!isLoggedIn) {
//       setMessage('Unauthorized: Please login first');
//       return;
//     }

//     setLoading(true);
//     try {
//       const result = await updateUserData({'update': new Date()});
//       setMessage('Update successful');
//     } catch (error) {
//       setMessage('Error updating data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Button onClick={handleClick} disabled={loading}>
//         {loading ? 'Updating...' : 'Update Data'}
//       </Button>
//       <Typography>{message}</Typography>
//     </>
//   );
// }


import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { updateDataSuccess } from '../store/actions';
import { fetchUserData, updateUserData } from '../apis/userApi';
// import { ToastContainer, toast } from 'react-toastify';
import { RootState } from '../store/reducers';

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleUpdate = async () => {
    if (!isAuthenticated) {
      alert('You must be logged in to update data');
      return;
    }

    setLoading(true);

    const dataToUpdate = {
      firstName,
      lastName,
    };

    try {
      await updateUserData(dataToUpdate);
      const response = await fetchUserData();
      dispatch(updateDataSuccess(response));
    } catch (error: any) {
      // toast.error(error.message);
    } finally {
      // toast.success('Success update data');
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex space-x-4">
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          variant="outlined"
          margin="normal"
        />
      </div>
      <div className="mt-4">
        <Button variant="contained" color="primary" onClick={handleUpdate} disabled={loading}>
          Update Data
        </Button>
        {loading && <Typography>Loading...</Typography>}
        {/* <ToastContainer /> */}
      </div>
    </div>

  );
};

export default UpdateButton;


// import { Button, Typography } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { fetchUserData } from '../apis/userApi';
// import { RootState } from '../store/reducers';

// const UpdateButton = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state: RootState) => state.user);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleClick = async () => {
//     setLoading(true);
//     try {
//       await fetchUserData();
//       // Dispatch success action if needed
//     } catch (error: any) {
//       // Handle error
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={handleClick} disabled={!user || loading}>
//         Update Data
//       </Button>
//       {error && <Typography color="error">{error}</Typography>}
//       {loading && <Typography>Loading...</Typography>}
//     </div>
//   );
// };

// export default UpdateButton;

