import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from '/./ghibli.png'
import {Link} from 'react-router-dom'
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
 color: 'white'
 },
 media: {
 minHeight: 400
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
 return (

<Grid container spacing ={4}>
<Grid item md ={4}>
 <Card className={classes.card}>
 <Typography variant="h6" className={classes.title}>
 Home Page
 </Typography>
 <CardMedia className={classes.media} image={myImg} title="My Image"/>
 <Typography variant="body2" component="p" className={classes.credit} color="textSecondary">Photo: Studio Ghibli</Typography>
 <CardContent>
 <Typography variant="body1" component="p">
 Welcome to my website
 </Typography>
 </CardContent>
 </Card>
</Grid>

<Grid item md ={4}>
 <Card className={classes.card}>
 <Typography variant="h6" className={classes.title}>
 Home Page
 </Typography>
 <CardMedia className={classes.media} image={myImg} title="My Image"/>
 <Typography variant="body2" component="p" className={classes.credit} color="textSecondary">Photo: Studio Ghibli</Typography>
 <CardContent>
 <Typography variant="body1" component="p">
 Welcome to my website
 </Typography>
 </CardContent>
 </Card>
</Grid>
</Grid>

 )
}
