import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const ProductList = () => {
    const list=['a','b','c','d','v','b','b','d','z'];
    return(
        <div>
            <h1>List of Products</h1>
            <div className='flex text-gray-300 ml-5 sm:ml-0 justify-between sm:justify-center items-center my-5'><h2>RELEASED THIS WEEK</h2><div className="h-1 w-3/5 ml-5 bg-gray-300 hidden sm:block"></div><div className="flex justify-center mr-5 items-center sm:ml-10 text-black"><button>L</button><button className="ml-2">R</button>  </div></div>
        <div className="">
        <div className='flex justify-start items-center mr-10 overflow-x-auto p-5' style={{width: '99%'}}>
            
          {list.map((i)=>{
            return(
                <Card sx={{ minWidth: 150, maxWidth: 150, }} className="ml-2">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent className="text-left">
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <Typography variant="body2" color="black">
            {i}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            )
          })}
            
        </div>
        </div>
        </div>
    )
}
export default ProductList;