import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
import {createStructuredSelector} from 'reselect'
import {connect}  from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import Cart from '../../components/cart/cart'
import CardDrop from '../../components/cartDrop/cd'
import {currentUserSelelctor} from '../../redux/user/user.selectors'
import {hiddenSelector} from '../../redux/cart/cart.selectors'


const Header=({currentUser,hidden})=>{
   return( 
    <>
   <div className='header' >
        <Link  className='logo-container' to='/' >
            <Logo className='logo' ></Logo>
        </Link>
        <div className='options' >
        <Link className='option'  to='/shop'>SHOP</Link>
        <Link className='option'  to='/contact'>CONTACT</Link>
        {currentUser?
            (<div className='option' onClick={()=>{auth.signOut()}} >SIGN-OUT</div>)
            :
            (<Link className='option' to='/signin'>SIGN-IN</Link>)
        }
        <Cart></Cart>
        </div>{
            hidden?null:
        (<CardDrop></CardDrop>)
        }
    </div> </> )
}



const mapStatesToProps=createStructuredSelector({
    currentUser:currentUserSelelctor,
    hidden:hiddenSelector
})
export default connect(mapStatesToProps)(Header)