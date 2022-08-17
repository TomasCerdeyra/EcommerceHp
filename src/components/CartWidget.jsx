import React from 'react'
import '../styles/header.css'
import {BsCart3} from 'react-icons/bs';
import logo from '../assets/logoHarry.png';
import { hover } from '@testing-library/user-event/dist/hover';

const CartWidget = () => {
    return (
        <>
        <img src={logo} alt="Logo Harry potter" className='LogoHary'/>
        <BsCart3 size={50} color='white' className='carroLogo' />
        </>
    );
}

export default CartWidget