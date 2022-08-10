import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik, Field, ErrorMessage } from 'formik';
import Paper from '@mui/material/Paper';
import {Data} from '../../App';
export default function Signup (){
    let navigate = useNavigate();
    const {userData, setUserData} = useContext(Data);
    const initialValues={
        first: '',
        last: '',
        email: '',
        password: '',
        confirm_password: ''
    }
    const onSubmit = async (values, helpers)=>{
        const errors = {};
        if (values.password != values.confirm_password) {
            formik.errors.confirm_password = "Confirm must match with Password";
            return errors;
        }
        try{
            console.log('size of userData is ', userData.length);
            let existed = false;
            if(userData.length > 0){
            for(let i=0; i<userData?.length; i++){
                if(userData[i].email === values.email){
                    alert('Account with this email already exists');
                    existed = true
                    navigate(`/login/${values.email}`);
                }
            }
        }
         if(!existed){
            setUserData(userData=>[...userData, values]);
            alert('form is submitted');
         }
        }catch(error){
            helpers.setErrors({submit: error.message})
        }
    }
    const validationSchema = Yup.object({
        first: Yup.string().required('Required'),
        last: Yup.string().required('Required'),
        email:Yup.string().email('Enter valid email').required('Required'),
        password: Yup.string().min(7,'Not less than 7 char').max(15,'Should not greater than 15 char').required('Required'),
        confirm_password: Yup.string().required('Password confirmation is required!')
    })

    const formik= useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    })
   
    return(
        <div className='w-full flex items-center justify-center'>
            <Paper elevation={3} className="w-100 md:w-2/4 p-10 mx-auto mt-10 md:mt-20 lg:mt-36 border border-2 border-blue-600" sx={{background: 'lightPink'}}>
            <h1 className='font-bold text-blue-400 text-lg'>Signup Page</h1>
            <form onSubmit={formik.handleSubmit}>
            <input name='first' className='mt-5 rounded p-1' type='text' placeholder="First Name" onChange={formik.handleChange}/><br />
            <p className="text-red-500">{formik.errors.first}</p> 
            <input name='last' className='mt-2 rounded p-1' type='text' placeholder="Last Name" onChange={formik.handleChange}/><br />
            <p className="text-red-500">{formik.errors.last}</p>
            <input name='email' className='mt-2 rounded p-1' type='email' placeholder="Email" onChange={formik.handleChange}/><br />
            <p className="text-red-500">{formik.errors.email}</p>
            <input className="m-2 rounded p-1" id="password" name='password' type='password' placeholder="Password" onChange={formik.handleChange}/><br />
            <p className="text-red-500">{formik.errors.password}</p>
            <input className="m-2 rounded p-1" name='confirm_password' type='password' placeholder="Confirm Password" onChange={formik.handleChange}/><br />
            <p className="text-red-500">{formik.errors.confirm_password}</p>
            <Button variant="contained" sx={{marginTop: '30px'}} type="submit" disabled={!formik.isValid}>Signup</Button>
            </form>
            <p className='mt-5'>If you have already account <Link to="/login"><span className="text-blue-600 cursor-pointer">Click here</span></Link></p>
            </Paper>
        </div>
    );
}