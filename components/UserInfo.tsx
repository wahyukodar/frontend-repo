import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { RootState } from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../apis/userApi';
import { fetchDataSuccess } from '../store/actions';
// import { ToastContainer, toast } from 'react-toastify';

const UserInfo = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { data } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetchUserData();
            dispatch(fetchDataSuccess(response));
        } catch (error: any) {
            // toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>

            {loading && <Typography>Loading...</Typography>}
            {data && <div><h1>Data from API</h1> <Typography>{JSON.stringify(data, null, 2)}</Typography></div>}
            {/* <ToastContainer/> */}
        </div>
    );
};

export default UserInfo;
