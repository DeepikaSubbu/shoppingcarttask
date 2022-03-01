import React, {useState, useEffect} from 'react';
// import Box from '@mui/material/Box';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./App.css";


export default function CardComponent(props){

    let theme = createTheme();
    theme = responsiveFontSizes(theme);
      

    // const [toggle, setToggle] = useState(true);
    // console.log(props.name,props.price)
   var sum=0;
   props.CartDisplay.map((i)=>{
       sum+=i.price
   })
//    {sum+=data.price}
    // console.log(props.cartitems)

        return(


            <Card sx={{ minWidth: 300 }} className="abs">
               
          {props.CartDisplay.map((data)=>(

          
            <CardContent className="content"  variant="h3">
              <Typography  gutterBottom variant="h6">
                {props.heading}:  {data.name}
              </Typography>
              {/* <Typography variant="h5" component="div">
              </Typography> */}
              <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h6">
                {props.subheading}: {data.price}$
              </Typography>
              
                
            </CardContent>
            
           ))}
            <CardContent variant="h6">
              {sum==0?<p>No Items Selected</p>:<p>Total price={sum}$</p>}  
            </CardContent>
          </Card>
        )

            
        
}