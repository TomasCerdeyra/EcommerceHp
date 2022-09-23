import React from 'react'
import './header.css'
import { BsCart3 } from 'react-icons/bs';
import logo from '../../assets/logoHarry.png';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const { totalProducts } = useContext(cartContext);

    return (
        <>
            <Link to='/'>
                <img src={logo} alt="Logo Harry potter" className='LogoHary' />
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/cart'>
                <BsCart3 size={50} color='white' className='carroLogo' />
                {
                    totalProducts()>=1 &&<span className= 'cantCart' >x{totalProducts()}</span>
                }
            </Link>
        </>
    );
}

export default CartWidget