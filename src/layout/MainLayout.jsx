import React, { useContext } from "react";
import '../App.scss';
import { Context as AppContext } from '../context/appContext';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Container } from "@mui/material";
import Button from '@mui/material/Button';

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
            <Container>
                {token && 
                    <div className="text-end">
                        <div className="w-full pt-5">
                            <Button 
                                variant="contained"
                                onClick={logout}
                            >
                                Logout
                            </Button>
                        </div>
                        <FormControlLabel 
                            control={
                                <Checkbox
                                    defaultChecked={themeDark}
                                    onChange={() => {changeTheming(!themeDark)}}
                                />
                            } 
                            label="Dark" 
                        />
                    </div>
                }
                <div className="App">
                    {children}
                </div>
            </Container>
        </div>
    )
}

export default MainLayout;