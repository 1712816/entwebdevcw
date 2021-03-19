import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import {listadmin} from './../user/api-user.js'

const isActive = (history, path) => {

  if (history.location.pathname == path)
    return {boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .5)'}
  else
    return {color: '#000000'}
}

const Menu = withRouter(({history}) => {

 const openingOfTheDrawer =() =>{
   setDrawerOpen(prevState => !prevState);
  }
const [drawerOpen, setDrawerOpen] = React.useState(false);

return(
  <AppBar position="static">
    <Toolbar variant="dense">
    <Link to="/">
      <Button size="large" style = {isActive(history, "/")}>
        H E R M E S ||
      </Button>
      </Link>
      <Divider />

      {
          auth.isAuthenticated() && auth.isAuthenticated().user.admin && (
          <span>
          <Link to={"/useradmin/" + auth.isAuthenticated().user._id}>
          <Button style={isActive(history, "/useradmin/" + auth.isAuthenticated().user._id)}>Users</Button>
          </Link>
          </span>)

    }

      <Link to="/Products">
        <Button style={isActive(history, "/Products")}>Products
        </Button>
      </Link>

      <div style={{marginLeft:'auto', marginRight:-12}}>
      <Link to ="/Cart">
      <IconButton>
      <ShoppingBasketIcon />
      </IconButton>
      </Link>

      <IconButton onClick={openingOfTheDrawer}>
      <AccountCircleSharpIcon />
      </IconButton>
      </div>

    </Toolbar>

    <Drawer variant='temporary' open = {drawerOpen} anchor='right'>

    <IconButton onClick={openingOfTheDrawer}>
    <AccountCircleSharpIcon />
    </IconButton>

    <Divider />
    {
      !auth.isAuthenticated() && (<span>
        <Link to="/signup">
          <Button style={isActive(history, "/signup")} onClick={openingOfTheDrawer}>Sign up
          </Button>
        </Link>
        <Link to="/signin">
          <Button style={isActive(history, "/signin")} onClick={openingOfTheDrawer}>Sign In
          </Button>
        </Link>
        </span>)
    }
    <Divider />
    {
      auth.isAuthenticated() && (<span>
        <Link to={"/user/" + auth.isAuthenticated().user._id}>
          <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)} onClick={openingOfTheDrawer}>My Profile</Button>
        </Link>
        <Button color="inherit" onClick={() => {
            auth.clearJWT(() => history.push('/'))
            openingOfTheDrawer()}}>Sign out</Button>
      </span>)
    }
    <Divider />

    </Drawer>

  </AppBar>
)})
export default Menu
