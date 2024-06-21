import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { loginSuccess } from '../store/actions';
import { useDispatch } from 'react-redux';
import { loginAPI } from '../apis/userApi';

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await loginAPI(email, password);
            dispatch(loginSuccess());
        } catch (error) {
            console.error('Login error:', error);
            alert('Failed to login');
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex space-x-4">
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className="mt-4">
                <Button variant="contained" color="primary" onClick={handleLogin} disabled={loading}>
                    Login
                </Button>
                {loading && <Typography>Loading...</Typography>}
            </div>
        </div>
    );
};

export default LoginForm;
