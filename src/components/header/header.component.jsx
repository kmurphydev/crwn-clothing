import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import CurrentUserContext from '../../contexts/current-user/current-user.context';
import {CartContext} from '../../providers/cart/cart.provider'
import './header.styles.scss';

const Header = () => {
    const currentUser = useContext(CurrentUserContext);
    const {hidden} = useContext(CartContext);

    return (
    <div className = 'header'>
        <Link className = 'logo-container'
        to="/">
            <Logo className = 'logo'/>
        </Link>

        <div className = 'options'>
            <Link to='/shop'>
                <div className = 'option'>SHOP</div>
            
            </Link>
            
            <Link to='/shop'>
                <div className = 'option'>CONTACT</div>
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=> {
                    auth.signOut();
                    console.log('signed out');
                }}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
                <CartIcon/>
            
        </div>
        {
            hidden? null 
            :
            <CartDropdown/>
        }
        
    
    </div>
)}


export default Header;