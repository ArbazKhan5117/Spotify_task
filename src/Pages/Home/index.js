import React from 'react';
import { Link } from "react-router-dom";
export default function Home (){
    return(
        <div>
            <h2>Home Page</h2>
            <h1 className="heading">Home Page loads after authentication</h1>
            <Link to="/users"><button>Users</button></Link>
        </div>
    );
}