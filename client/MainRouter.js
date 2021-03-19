import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import UserAdmin from './user/UsersAdmin'
import Products from './products/Products.js'
import Cart from './core/Cart.js'



const MainRouter = () => {
 return (<div>
 <Menu/>
 <Switch>
 <Route exact path="/" component={Home}/>
 <Route path="/signup" component={Signup}/>
 <Route path="/signin" component={Signin}/>
 <Route path="/Products" component={Products}/>
 <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
 <Route path="/user/:userId" component={Profile}/>
 <Route path="/useradmin/:userId" component={UserAdmin}/>
 <Route path="/Cart" component={Cart}/>

 </Switch>
 </div>)
}
export default MainRouter
