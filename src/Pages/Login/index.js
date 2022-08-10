import React,{useContext, useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import {Data} from '../../App';
import {useDispatch, useSelector} from "react-redux";
import { handleLogin } from '../../redux/actions/actions';
export default function Login (){
    let navigate = useNavigate();
    const {userData} = useContext(Data);
    const [userEmail, setUserEmail] = useState('');
    const { email } = useParams();
    const dispatch = useDispatch();
    const initialValues={
        email: email,
        password: ''
       }

    const validationSchema =Yup.object ({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required')
    })

    const onSubmit = async (values,helpers) => {
     console.log('Form data is ', values);
     try{
        for(let i=0; i<userData?.length; i++){
            if(userData[i].email === values.email && userData[i].password === values.password){
                alert('Signed In successfully');
                dispatch(handleLogin('yes'));
                navigate(`/`);
            }
        }
     }catch(error){
       helpers.setErrors({submit:error.message})
     }
    }
    const formik=useFormik({
        initialValues:initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    });
    useEffect(()=>{
        setUserEmail(email);
      },[email])
    return(
        <div className='w-full flex items-center justify-center'>
            {console.log('User data is ', userData)}
        <Paper elevation={3} className="w-100 md:w-2/4 p-10 mx-auto mt-10 md:mt-20 lg:mt-36 border border-2 border-blue-600" sx={{background: 'lightPink'}}>
            <h1 className='font-bold text-blue-400 text-lg'>Login Page</h1>
            <form onSubmit={formik.handleSubmit}>
                <TextField  name="email" value={userEmail} error={formik.errors.email} helperText={formik.errors.email} onChange={formik.handleChange} id="standard-error-helper-text" label="Email" type="email" variant="standard"/><br />
                <TextField name="password" error={formik.errors.password} helperText={formik.errors.password} onChange={formik.handleChange} id="standard-error-helper-text" label="Password" type="password" variant="standard"/><br />
                <Button variant="contained" sx={{marginTop: '30px'}} type="submit" disabled={!formik.isValid}>Login</Button>
            </form>
            <p className='mt-5'>If you have not already account <Link to="/signup"><span className="text-blue-600 cursor-pointer">Click here</span></Link></p>
        </Paper>
        </div>








    //     <div>
    //         <h2 className="heading mb-10">Login Page</h2>
    //         <Box
    //           component="form"
    //            sx={{
    //              '& .MuiTextField-root': { m: 1, width: '25ch' },
    //              }}
    //            noValidate
    //            autoComplete="off"
    // >
    //         <TextField error id="standard-error-helper-text" label="Email" helperText="Incorrect entry." type="email" variant="standard"/><br />
    //         <Button variant="contained" sx={{marginTop: '30px'}} onClick={handleLogin}>Login</Button>
    //     </Box>
    //     </div>
        
    );
}