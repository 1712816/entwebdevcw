import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar';
import Avatar from '@material-ui/core/Avatar';
import Dialog from "@material-ui/core/Dialog"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import auth from '/./client/auth/auth-helper'
import {updateTenCent, updateTenPound,read} from '/./client/user/api-user.js'


//importing the images for the products
import blacktrench from '/./client/src/black-trench.jpg'
import whitejumper from '/./client/src/white-jumper.jpg'
import orangeshirt from '/./client/src/orange-shirt.jpg'
import cardigan from '/./client/src/cardigan.jpg'
import yellowtshirt from '/./client/src/yellow-tshirt.jpg'
import purpleshirt from '/./client/src/purple-shirt.jpg'



import {list} from '/./client/products/api-products.js'

import { Link } from 'react-router-dom'
import { Grid }  from "@material-ui/core"



const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
      padding: theme.spacing(1),
      margin: theme.spacing(5)
    })

}
))
export default function Cart({match}){



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



  // const [values, setValues] = useState({
  //     name: '',
  //     password: '',
  //     email: '',
  //     about: '',
  //     open: false,
  //     error: '',
  //     redirectToProfile: false
  //   })


var [checkoutDialog, setCheckoutDialog] = useState(false)
var [discountPrice, setDiscountPrice] = useState(0)

const jwt = auth.isAuthenticated()

const handleChange = text => event => {
    setDiscountCodeText({ ...discountCodeText, [text]: event.target.value })
  }


  const handleClose = () => {
      setCheckoutDialog(false);
    };


var totalCost = 0
var subCost = 0



const tencentOff= () =>{

setDiscountPrice(totalCost * 0.9)

setCheckoutDialog(true)

}

const tenpoundOff = () =>{

  // const user = {
  //       name: values.name || undefined,
  //       email: values.email || undefined,
  //       password: values.password || undefined,
  //       about: values.about || undefined
  //     }


// updateTenPound({
//       userId: match.params.userId
//     }, {
//       t: jwt.token
//     }, user).then((data) => {
//       if (data && data.error) {
//         setValues({...values, error: data.error})
//       } else {
//         setValues({...values, userId: data._id, redirectToProfile: true})
//       }
//     })

setDiscountPrice( totalCost - 10)

  setCheckoutDialog(true)

}

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


    // read({
    //   userId: match.params.userId
    // }, {t: jwt.token}, signal).then((data) => {
    //   if (data && data.error) {
    //     setValues({...values, error: data.error})
    //   } else {
    //     setValues({...values, name: data.name, email: data.email})
    //   }
    // })


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


    if(item.name.localeCompare(name)===0){

      subCost = item.price*quantity;
      totalCost = totalCost + subCost
    return(
      <span>
      <ListItemAvatar> <Avatar src = {findImage(item.name)} /> </ListItemAvatar ><ListItemText primary={item.name}/> <ListItemText primary={"Quantity - " + quantity}/> <ListItemText primary={"Cost - £" + (subCost)}/>
      <Divider />
      </span>
    )
    }
  }
    }
  )
    }
}

<ListItemText primary={"Grand Total £" + totalCost}/>
<Divider />
</List>
  </Paper>

<Paper>


<Button variant="contained" onClick={tencentOff}>10% Off</Button>
<Divider />
<Button variant="contained" onClick={tenpoundOff}>£10 off</Button>

</Paper>


<Dialog open={checkoutDialog} onClose={handleClose}>
<DialogTitle> YOUR ITEMS ARE ON THEIR WAY.. don't question it.. we know where you live </DialogTitle>
<DialogContent>
<DialogContentText> The total cost of your shop was - £{discountPrice}</DialogContentText>
</DialogContent>
<DialogActions>
<Button onClick={handleClose}>
            EXIT </Button>
</DialogActions>
</Dialog>

  </div>





 )
}
