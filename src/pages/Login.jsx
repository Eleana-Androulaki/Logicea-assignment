import React, { useContext } from "react";
import CustomButton from "../components/CustomButton";
import { Context as AppContext } from '../context/appContext';

const Login = () => {
    const { login } = useContext(AppContext);
    return (
        <div className="mt-20">
            <CustomButton
                handleClick={login}
                classes="bg-blue text-white"
            >
                Login
            </CustomButton>
        </div>
    )
}

export default Login;