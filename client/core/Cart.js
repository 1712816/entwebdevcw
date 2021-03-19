import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar';
import Dialog from "@material-ui/core/Dialog"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import {list} from '/./client/products/api-products.js'

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

var [checkoutDialog, setCheckoutDialog] = useState(false)
var [discountPrice, setDiscountPrice] = useState(0)


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
      <ListItemText primary={item.name}/> <ListItemText primary={"Quantity - " + quantity}/> <ListItemText primary={"Cost - £" + (subCost)}/>
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
