import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss';

const Header = ({currentUser}) => (
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
            
        </div>
    
    </div>
)

export default Header;