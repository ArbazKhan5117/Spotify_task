import React from 'react';
import Box from '@mui/material/Box';
const Topbar = () => {
    return(
        <Box
      sx={{
        width: '100%',
        height: 100,
        backgroundColor: 'lightPink',
        '&:hover': {
          backgroundColor: 'pink',
          opacity: [0.9, 0.8, 0.7],
        },
      }} 
      className="flex items-center justify-end"
    >
      <div className='text-white mr-5'>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">Your favourite tunes</h1>
        <h1 className="flex justify-start sm:justify-end">All Sub and all Moon</h1>
        </div>
    </Box>
    );
}
export default Topbar;