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
    return{ color:'#85BEFF', align: 'center' }
  }

}
 return (

   <div className={classes.root}>
      <div className={classes.wrapper}>

        <Link to ="/Products">
        <Slide direction="right" in={slideOne} timeout={{
          appear: 500,
          enter: 300,
          exit: 500,
        }}  mountOnEnter unmountOnExit>

        <img src={Newcollectionbanner} className ={classes.svg}/>

        </Slide>
        </Link>

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
      <Paper style={{justifyContent:'center',display:'flex'}}>LOREM IPSUM</Paper>
      <Paper style={{marginTop:'auto'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt diam a tellus molestie fringilla. Ut eget libero elementum, dapibus elit et, interdum odio. Praesent eget dapibus lectus, eget vestibulum arcu. Aliquam erat volutpat. Vivamus rutrum ultricies odio sed pulvinar. In sed vestibulum tortor, ut tempor odio. Ut eleifend tincidunt est in viverra. Aliquam nec velit et felis pulvinar convallis. Nulla placerat ut dolor in facilisis. Duis euismod felis ut lorem condimentum aliquet. Pellentesque blandit eu nibh vel mattis. Sed mollis luctus lectus luctus bibendum. Phasellus id quam elementum, vestibulum turpis at, aliquam ipsum. Sed auctor eros mauris, in cursus elit feugiat id.

Maecenas tempor faucibus ipsum, et malesuada metus interdum ut. Mauris molestie neque nec venenatis rutrum. Duis vitae neque nunc. Mauris aliquam mattis dui, vitae blandit ante euismod eu. Etiam vitae diam in purus ornare euismod. Donec a ullamcorper ipsum, eu tincidunt ligula. In condimentum, sapien quis scelerisque pulvinar, felis diam fermentum lorem, sit amet lobortis sapien elit non urna. Etiam ac posuere ex. Praesent dictum ac ipsum sit amet congue. Donec placerat, massa eu rhoncus pharetra, nisl velit aliquet urna, semper fringilla metus mauris id massa. Vivamus pellentesque est non nunc commodo, dignissim lacinia enim porta.

Curabitur et libero enim. Ut lacinia sagittis ultricies. Maecenas eget odio vitae magna tempus lobortis. Vivamus quis erat ut elit pretium consectetur. Donec ac eros ex. Aliquam vitae molestie nisi, porttitor pretium lectus. In ullamcorper erat neque, sed porta ante vehicula pharetra. Mauris tempus dolor vitae ullamcorper eleifend. Nam eget viverra arcu.

Duis maximus ornare varius. Donec viverra eros risus, nec elementum mauris vehicula quis. Pellentesque porta ac erat vitae posuere. Sed commodo egestas leo, sit amet commodo nisl semper sagittis. Praesent venenatis id enim sit amet ornare. Curabitur euismod sagittis tincidunt. Pellentesque egestas dui a urna lobortis facilisis.

Proin in velit quis tellus faucibus placerat. In consequat mi et mi ultricies, vitae accumsan sem iaculis. Donec semper mi id velit maximus, nec rutrum odio egestas. Vestibulum vestibulum odio ut vulputate pulvinar. Nam vehicula maximus lectus sit amet pretium. Nunc quis suscipit dolor. Aliquam egestas dapibus rutrum. Aenean in imperdiet sem. Nullam vitae velit sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius congue tortor nec efficitur. Donec blandit nisl at ligula lacinia lobortis. Phasellus nec eros vehicula, scelerisque elit vitae, pulvinar ligula. Mauris imperdiet dignissim erat, nec convallis nunc auctor vel.</Paper>
      </div>





 )
}
