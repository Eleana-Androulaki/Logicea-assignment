import React, { useContext, useEffect } from "react";
import { Context as AppContext } from '../context/appContext';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login";
import MainLayout from "../layout/MainLayout";
import { routes } from "./allRoutes";


const  Authmiddleware = () => {
  const token = localStorage.getItem("token");
  const { state: { user }, login} = useContext(AppContext);
  
  useEffect(() => {
    if(token && !user) login();
  }, [token, user, login])

  if(token && user) {
    return (
      <Routes> 
        {
          routes.map((route, index) => 
          (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={
                <MainLayout>
                  <route.main />
                </MainLayout>
              }
            />
          ))
        }
      </Routes>
    )
  } else if(token) {
    return null;
  } else {
    return (
      <Routes>
        <Route 
          path="/login" 
          element={<MainLayout><Login /></MainLayout>} 
        />
        <Route 
          path="*" 
          element={<Navigate replace to="/login" />} 
        />
      </Routes>
    )
  }
}

export default Authmiddleware;