import React from 'react'
import './header.css'
import { BsCart3 } from 'react-icons/bs';
import logo from '../../assets/logoHarry.png';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <>
            <Link to='/'>
                <img src={logo} alt="Logo Harry potter" className='LogoHary' />
            </Link>
            <Link to='/cart'>
                <BsCart3 size={50} color='white' className='carroLogo' />
            </Link>
        </>
    );
}

export default CartWidget