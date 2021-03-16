import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Slide from '@material-ui/core/Slide';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton'
import Adjust from '@material-ui/icons/Adjust'

import Newcollectionbanner from '/./client/src/newcollectionbanner.png'
import Discountbanner from '/./client/src/discountbanner.png'

import {Link} from 'react-router-dom'
import { Grid }  from "@material-ui/core"

const useStyles = makeStyles(theme => ({
root: {
height: 180,
},
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
 color: 'white'
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
export default function Home(){

 const classes = useStyles()

const [slideOne, setSlideOne] = React.useState(true);
const [slideTwo, setSlideTwo] = React.useState(false);



 const handleChangeOne = () => {
   setSlideTwo(prevState => !prevState);
   setTimeout(function () {
       setSlideOne(prevState => !prevState);
   }, 500);
};

const handleChangeTwo = () => {

 setSlideOne(prevState => !prevState);

 setTimeout(function () {
     setSlideTwo(prevState => !prevState);
 }, 500);

}

const isActive =(active) =>{

  if(active == true)
    return { color: 'white', align: 'center'  }
  else {
    return{ color:'#F58142', align: 'center' }
  }

}
 return (

   <div className={classes.root}>
      <div className={classes.wrapper}>
        <Slide direction="right" in={slideOne} timeout={{
          appear: 500,
          enter: 300,
          exit: 500,
        }}  mountOnEnter unmountOnExit>
            <img src={Newcollectionbanner} className ={classes.svg} />
        </Slide>

        <Slide direction="left" in={slideTwo} timeout={{
          enter: 300,
          exit: 500,
        }} mountOnEnter unmountOnExit>
            <img src={Discountbanner} className ={classes.svg} />
        </Slide>
      </div>

      <div style={{justifyContent:'center',display:'flex'}}>

      <IconButton size="medium" onClick={handleChangeOne}>
                <Adjust style={isActive(slideOne)} fontSize="large" />
      </IconButton>

      <IconButton size="medium" onClick={handleChangeTwo}>
                <Adjust style={isActive(slideTwo)} fontSize="large" />
      </IconButton>

      </div>

      </div>





 )
}
