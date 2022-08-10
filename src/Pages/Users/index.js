import React from 'react';
//import { logoutFun } from '../../redux/thunk/thunk';
//import { useDispatch, useSelector } from 'react-redux';
export default function Users (){
   // const dispatch = useDispatch();
    //const state = useSelector(state => state);
    const handleLogout = () => {
      //  dispatch(logoutFun()) 
        //console.log(state?.connection);
    }
    return(
        <div>
            <h2>Users Page</h2>
            <h1 className="heading">Users Page loads after authentication</h1>
            <button onClick={()=>handleLogout()}>Logout</button>
        </div>
    );
}