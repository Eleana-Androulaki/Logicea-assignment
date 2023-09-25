import React, { useContext } from "react";
import '../App.scss';
import { Context as AppContext } from '../context/appContext';
import CustomButton from "../components/CustomButton";
import CustomCheckbox from "../components/CustomCheckbox";

const MainLayout = ({children}) => {
    const { state: { themeDark }, changeTheming, logout } = useContext(AppContext);
    const token = localStorage.getItem("token");

    return (
        <div 
            className={
                `${themeDark ? 'dark' : 'light'}
                bg-secondary text-primary h-full`
            }
        >
            <div className="px-20">
                {token && 
                    <div className="text-end">
                        <div className="w-full pt-5">
                            <CustomButton
                                handleClick={logout}
                                classes="bg-blue text-white"
                            >
                                Logout
                            </CustomButton>
                        </div>
                        <CustomCheckbox 
                            label="Dark"
                            checked={themeDark}
                            handleChange={() => {changeTheming(!themeDark)}}
                        />
                    </div>
                }
                <div className="App">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout;