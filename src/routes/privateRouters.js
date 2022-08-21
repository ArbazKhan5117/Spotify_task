import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
 const PrivateRoute = () => {
  let navigate = useNavigate();
  // const isAuthenticated = false;
  const isAuthenticated = localStorage.getItem('auth');//useSelector(state => state.auth);
  console.log('is auth is ', isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to='/login'/>;
    }
    export default PrivateRoute;