import React, { Component } from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import HomePage from './page/homepage/hompepage.component';
import ShopPage from './page/shop/shop.component'
import Checkout from './page/checkout/checkout'
import Header from './components/header/header.component'
import Sin from './page/sininsinup/sininsinup.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.action'
import {currentUserSelelctor} from './redux/user/user.selectors'


class App extends Component {
  unsubscribe=null
  componentDidMount() {
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot)=>{
          setCurrentUser({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          } )
        })
      }
      setCurrentUser(userAuth)
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path="/" component={HomePage} ></Route>
    <Route  path="/shop" component={ShopPage} ></Route>
    <Route exact path="/checkout" component={Checkout} ></Route>
    <Route exact path="/signin" render={
      ()=>
      this.props.currentUser?(<Redirect to='/'/>):<Sin/>
      }>
  </Route>
    </Switch>
    </div>
  );
  }
}

const mapStateToProps=(state)=>({
    currentUser:currentUserSelelctor(state)
})

const mapDispatchToProps=(dispatch)=>({
    setCurrentUser: (user)=>{dispatch(setCurrentUser(user))}
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
