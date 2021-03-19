import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Slide from '@material-ui/core/Slide';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton'
import Adjust from '@material-ui/icons/Adjust'
import Button from '@material-ui/core/Button'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'

import {list} from '/./client/products/api-products.js'


import Newcollectionbanner from '/./client/src/newcollectionbanner.png'
import Discountbanner from '/./client/src/discountbanner.png'

import { Link } from 'react-router-dom'
import { Grid }  from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
      padding: theme.spacing(1),
      margin: theme.spacing(5)
    }),
wrapper: {
maxHeight:360,
paddingTop:10,
},
svg: {
maxHeight: 360,
maxWidth: '100%'
},
polygon: {
fill: theme.palette.common.white,
stroke: theme.palette.divider,
strokeWidth: 1,
},
 card: {
 maxWidth: 600,
 margin: 'auto',
 marginTop: theme.spacing(5),
 marginBottom: theme.spacing(5),
 backgroundColor: '#242424'
 },
 title: {
 padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
 color: '#000000'
 },
 media: {
 maxHeight: 400
 },
 credit: {
 padding: 10,
 textAlign: 'right',
 backgroundColor: '#242424',
 borderBottom: '1px solid #d0d0d0',
 color:'white' ,
 '& a':{
 color: 'red'
 }

}
}))
export default function Cart({match}){

var totalQuantity = 0


const [products, setProducts] = useState([])

const classes = useStyles()


console.log(sessionStorage.getItem("userCart"));
var userCartData = sessionStorage.getItem("userCart")
var userCart = userCartData.split(',')

for(var i=0; i< userCart.length; i++){
  userCart[i] = userCart[i].replace(/\W/g, '')
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

 return (
  <div className={classes.root}>
  <Paper className={classes.root}>
  <Typography variant="h6" className={classes.title}> Your Cart ({userCart.length})</Typography>
  <List dense>

  { products.map((item,i) =>{

    for(var x = 0; x < userCart.length; x++){
    var name = userCart[x]
    var quantity = name.charAt(name.length-1)
    var name = name.slice(0,-1);
    totalQuantity = totalQuantity + (item.price*quantity);


    if(item.name.localeCompare(name)===0){

    return(
      <span>
      <ListItemText primary={item.name}/> <ListItemText primary={quantity}/> <ListItemText primary={"£" + (item.price*quantity)}/>
      <Divider />
      </span>
    )

    }
  }

    }


  )
    }
}

<ListItemText primary={"Grand Total £" + totalQuantity}/>
<Divider />

</List>

  </Paper>

  </div>





 )
}
