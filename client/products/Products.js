import React, {useState, useEffect, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';

import Snackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'


import {list} from './api-products.js'

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

  var shoppingcartArray = []

  const classes = useStyles()
  const [products, setProducts] = useState([])

String.prototype.replaceAtIndex = function(index, newString){
    return this.substr(0, index) + newString;
}




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

     if(imageName == 'BLACK_ICON_TRENCH'){
     return blacktrench
   }else if (imageName == 'WHITE_UNION_CARDIGAN'){
     return cardigan
   }else if (imageName == 'CREAM_CLEAN_TURTLENECK'){
     return whitejumper
   }else if(imageName == 'YELLOW_CLASS_TEE'){
     return yellowtshirt
   }else if (imageName == 'LILAC_VISCOSE_SHIRT') {
     return purpleshirt
   }else if(imageName = 'ORANGE_SPRING_TEE'){
     return orangeshirt
   }else{
     return "error"
   }
 }

 const getNewAdd = (productName) =>{

   console.log(productName);
   console.log(addedItems.includes(productName));
   return addedItems.includes(products.name);

 }

 return (
<div>
<Grid container spacing ={4}>

{products.map((item, i) => {

return(

  <Grid item md ={4} sm={6} xs={12}>
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



 <IconButton className={classes.icon} onClick={() =>{

     var addedProduct = false;

     for(var i=0; i<shoppingcartArray.length; i++){
       if(shoppingcartArray[i].includes(item.name)){

         addedProduct = true
         var index = item.name.length;
         var newQuantity = parseInt(shoppingcartArray[i].charAt(index))+1;
         var updateBasket = shoppingcartArray[i].replaceAtIndex(index, newQuantity)

         shoppingcartArray.splice(i,1,updateBasket)
         console.log(shoppingcartArray)
       }

      }
      if(addedProduct === false){
      shoppingcartArray.push(item.name +"1");

      addedProduct = true
      console.log(shoppingcartArray)
    }



      }


    }>

 <AddShoppingCartIcon />
 </IconButton>




 </CardActions>
 </Card>

</Grid>)
})
}

</Grid>

<Link to ='Cart'>
<Button onClick ={() => {
sessionStorage.setItem("userCart",JSON.stringify(shoppingcartArray))

}}> Shopping Cart</Button>
</Link>

</div>

 )


}
