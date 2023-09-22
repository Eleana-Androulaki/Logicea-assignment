import React, { useContext } from "react";
import Button from '@mui/material/Button';
import { Context as AppContext } from '../context/appContext';

const Login = () => {
    const { login } = useContext(AppContext);
    return (
        <div className="mt-20">
            <Button variant="contained" onClick={login}>Login</Button>
        </div>
    )
}

export default Login;