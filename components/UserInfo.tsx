import { fetchUserData } from '@/apis/userApi';
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from '@/store/actions';
import { RootState } from '@/store/store';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserInfo = () => {
    const dispatch = useDispatch();
    const { data, loading, isAuthenticated } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (isAuthenticated) {
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        try {
            dispatch(fetchDataRequest());
            const response = await fetchUserData();
            dispatch(fetchDataSuccess(response));
        } catch (error: any) {
            dispatch(fetchDataFailure(error.message));
        }
    }

    return (
        <div className="p-4">
            {loading && <Typography className="text-black">Loading...</Typography>}
            {data && (
                <div>
                    <Typography variant="h6" className="mb-4 p-2" color={"black"}>Data from API</Typography>
                    <Typography component="div" className="p-2" color={"black"}>
                        <pre className="text-black">{JSON.stringify(data, null, 2)}</pre>
                    </Typography>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
