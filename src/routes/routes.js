import React from 'react';
import {
  BrowserRouter as Router,
  Routes,Route,
  Redirect,
  BrowserRouter
} from 'react-router-dom';
import PrivateRoute from './privateRouters';
import Login from '../Pages/Login';
import Users from '../Pages/Users';
import Signup from '../Pages/Signup';
import Home from '../Pages/Home';
const TaskRoutes=()=>{
  return(
    <Routes>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/login/:email' element={<Login />}/>
          <Route exact path='/signup' element={<Signup />}/>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/users' element={<Users />}/>
          </Route>
        
        </Routes>
  )
}
export default TaskRoutes;