'use client';

import Navbar from '../components/Navbar';
import UpdateButton from '../components/UpdateButton';
import UserInfo from '../components/UserInfo';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Typography } from '@mui/material';

const Home: React.FC = () => {
  const { data, error } = useSelector((state: RootState) => state.user);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        {error && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <Typography color="error" className="mt-2">{error}</Typography>
          </div>
        )}

        {data && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <UserInfo />
          </div>
        )}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <UpdateButton />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
