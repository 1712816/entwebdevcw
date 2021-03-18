import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import {list} from './../../client/products/api-products.js'


//importing the images for the products
import blacktrench from '/./client/src/black-trench.jpg'
import whitejumper from '/./client/src/white-jumper.jpg'
import orangeshirt from '/./client/src/orange-shirt.jpg'
import cardigan from '/./client/src/cardigan.jpg'
import yellowtshirt from '/./client/src/yellow-tshirt.jpg'
import purpleshirt from '/./client/src/purple-shirt.jpg'

import { Link } from 'react-router-dom'
import { Grid }  from "@material-ui/core"


const useStyles = makeStyles(theme => ({
 card: {
 maxWidth: 600,
 margin: 'auto',
 marginTop: theme.spacing(5),
 marginBottom: theme.spacing(5),
 backgroundColor: '#242424'
 },
 title: {
 padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
 textAlign: 'center',
 color: 'white'
 },
 media: {
 minHeight: 400
 },
 icon: {
 color: 'white',
 marginLeft:'auto',
 marginRight:-12
}
}))
export default function Products({match}){

  const classes = useStyles()
  const [products, setProducts] = useState([])

 useEffect(() => {
     const abortController = new AbortController()
     const signal = abortController.signal

     list(signal).then((data) => {
       if (data && data.error) {
         console.log(data.error)
       } else {
       	console.log("Here is the user data")
       	console.log(data)
         setProducts(data)
       }
     })

     return function cleanup(){
       abortController.abort()
     }
   }, [match.params.productId])

   const findImage = (imageName) => {

     if(imageName == 'BLACK _ I C O N _ TRENCH'){
     return blacktrench
   }else if (imageName == 'WHITE _U N I O N _ CARDIGAN'){
     return cardigan
   }else if(imageName == 'CREAM _ C L E A N _ TURTLENECK'){
     return whitejumper
   }else if(imageName == 'YELLOW _ C L A S S _ TEE'){
     return yellowtshirt
   }else if (imageName == 'LILAC _ V I S C O S E _ SHIRT') {
     return purpleshirt
   }else if(imageName = 'ORANGE _ S P R I N G _ TEE'){
     return orangeshirt
   }else{
     return "error"
   }
 }



 return (

<Grid container spacing ={4}>
{products.map((item, i) => {

return(<Grid item md ={4}>
 <Card className={classes.card}>
 <Typography variant="h6" className={classes.title}>
 {item.name}
 </Typography>
 <CardMedia className={classes.media} image={findImage(item.name)} title={item.name}/>
 <CardContent>
 <Typography variant="body1" component="p">
  £{item.price}
 </Typography>
 </CardContent>
 <CardActions>
 <IconButton className={classes.icon}>
 <AddShoppingCartIcon />
 </IconButton>
 </CardActions>
 </Card>
</Grid>)
})
}
</Grid>


 )
}
