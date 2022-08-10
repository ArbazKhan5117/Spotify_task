import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
 const PrivateRoute = () => {
  // const isAuthenticated = false;
  const isAuthenticated = useSelector(state => state.auth);
  console.log('is auth is ', isAuthenticated);
    return isAuthenticated === 'yes' ? <Outlet /> : <Navigate to="/login" />;
    }
    export default PrivateRoute;