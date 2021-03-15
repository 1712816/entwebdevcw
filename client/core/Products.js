import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

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
export default function Products(){
 const classes = useStyles()
 return (

<Grid container spacing ={4}>

<Grid item md ={4}>
 <Card className={classes.card}>
 <Typography variant="h6" className={classes.title}>
 BLACK _ I C O N _  TRENCH
 </Typography>
 <CardMedia className={classes.media} image={blacktrench} title="BLACK ICON TRENCH"/>
 <CardContent>
 <Typography variant="body1" component="p">
  £245
 </Typography>
 </CardContent>
 </Card>
</Grid>

<Grid item md ={4}>
 <Card className={classes.card}>
 <Typography variant="h6" className={classes.title}>
 WHITE _ U N I O N _ CARDIGAN
 </Typography>
 <CardMedia className={classes.media} image={cardigan} title="WHITE UNION CARDIGAN"/>
 <CardContent>
 <Typography variant="body1" component="p">
 £85
 </Typography>
 </CardContent>
 </Card>
</Grid>

<Grid item md ={4}>
 <Card className={classes.card}>
 <Typography variant="h6" className={classes.title}>
 LILAC _ V I S C O S E _ SHIRT
 </Typography>
 <CardMedia className={classes.media} image={purpleshirt} title="LILAC VISCOSE SHIRT"/>
 <CardContent>
 <Typography variant="body1" component="p">
 £95
 </Typography>
 </CardContent>
 </Card>
</Grid>

<Grid item md ={4}>
 <Card className={classes.card}>
 <Typography variant="h6" className={classes.title}>
 ORANGE _ S P R I N G _ TEE
 </Typography>
 <CardMedia className={classes.media} image={orangeshirt} title="ORANGE SPRING TEE"/>
 <CardContent>
 <Typography variant="body1" component="p">
 £50
 </Typography>
 </CardContent>
 </Card>
</Grid>

<Grid item md ={4}>
 <Card className={classes.card}>
 <Typography variant="h6" className={classes.title}>
 CREAM _ C L E A N _ TURTLENECK
 </Typography>
 <CardMedia className={classes.media} image={whitejumper} title="CREAM CLEAN TURTLENECK"/>
 <CardContent>
 <Typography variant="body1" component="p">
 £115
 </Typography>
 </CardContent>
 </Card>
</Grid>

<Grid item md ={4}>
 <Card className={classes.card}>
 <Typography variant="h6" className={classes.title}>
 YELLOW _ CLASS _ TEE
 </Typography>
 <CardMedia className={classes.media} image={yellowtshirt} title="YELLOW CLASS TEE"/>
 <CardContent>
 <Typography variant="body1" component="p">
 £85
 </Typography>
 </CardContent>
 </Card>
</Grid>

</Grid>


 )
}
