import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { logoutAPI } from '@/apis/userApi';
import { logout } from '@/store/actions';
import { toast } from 'react-toastify';

const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state: RootState) => state.user);

    const handleLogout = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await logoutAPI();
            dispatch(logout());
            toast.success('Success Logout');
        } catch (error) {
            console.error('Logut error:', error);
        }
    };

    return (
        <AppBar position="static">
            <Toolbar className="flex justify-between">
                <Typography variant="h6">
                    <Link href="/" passHref>
                        Main Page
                    </Link>
                </Typography>
                <div>
                    {isAuthenticated ? (
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    ) : (
                        <Link href="/login" passHref>
                            <Button color="inherit">Login</Button>
                        </Link>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
