import React,{useState, Suspense} from 'react';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Topbar from '../../components/Topbar';
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
//import ProductList from './productList';
import './home.css';
const ProductList = React.lazy(()=>import('./productList'));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }));
export default function Home (){
  let navigate = useNavigate();
    const homeAuth = useSelector(state => state.auth);
    const [activePage, setActivePage] = useState(1);
    const allUsers = useSelector(state => state.users);
    console.log('home Auth is ', homeAuth);
    console.log('home all users is ', allUsers);
    const handleLogout = () => {
        localStorage.setItem('auth', '');
        navigate(`/login`);
    }
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container>
                 <Grid xs={3} height="99vh" className="bg-purple-900 text-white">
                    <div className="w-full flex flex-col justify-center items-center h-44">
                    <div className="w-10 h-10 rounded-full bg-red-300"></div>
                    <h1>{homeAuth}</h1>
                    </div>
                   <Item className="cursor-pointer flex justify-center items-center hover:bg-blue-400 h-14 mt-5" onClick={()=>setActivePage(1)}>Discover</Item>
                   <Link to='/users'><Item className="cursor-pointer flex justify-center items-center hover:bg-blue-400 h-14" onClick={()=>setActivePage(2)}>Search</Item></Link>
                   <Item className="cursor-pointer flex justify-center items-center hover:bg-blue-400 h-14" onClick={()=>setActivePage(3)}>Favourites</Item>
                   <Item className="cursor-pointer flex justify-center items-center hover:bg-blue-400 h-14" onClick={()=>setActivePage(4)}>Playlists</Item>
                   <Item className="cursor-pointer flex justify-center items-center hover:bg-blue-400 h-14" onClick={handleLogout}>Logout</Item>
                 </Grid>
                 <Grid xs={9}>
                 <Topbar />
                   {activePage === 1 ? <Suspense fallback={<ClipLoader />}><ProductList /></Suspense> : ''}
                   {activePage === 2 ? <Item>xs=2</Item> : ''}
                   {activePage === 3 ? <Item>xs=3</Item> : ''}
                   {activePage === 4 ? <Item>xs=4</Item> : ''}
                   {activePage === 5 ? <Item>xs=5</Item> : ''}
                 </Grid>
                 <Grid xs={3} mdOffset={3} mt={5}>
                  <Box sx={{height: 150, display: 'flex', flexDirection: 'row-reverse', flexWrap: 'nowrap'}} className='daba'>
                    <Item>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                  </Box>
                 </Grid>
        
              </Grid>
            </Box>
            
        </div>
    );
}