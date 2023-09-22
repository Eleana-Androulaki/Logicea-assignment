import React, { useContext } from "react";
import '../App.scss';
import { Context as AppContext } from '../context/appContext';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Container } from "@mui/material";

const MainLayout = ({children}) => {
    const { state: { themeDark }, changeTheming } = useContext(AppContext);
    return (
        <div className={`${themeDark ? 'dark' : 'light'} bg-secondary text-primary h-full`}>
            <Container className="text-end">
                <FormControlLabel 
                    control={
                        <Checkbox
                            value={themeDark}
                            onChange={() => {changeTheming(!themeDark)}}
                        />
                    } 
                    label="Dark" 
                />
            </Container>
            <Container className="h-full">
                <div className="App">
                    {children}
                </div>
            </Container>
            
        </div>
    )
}

export default MainLayout;