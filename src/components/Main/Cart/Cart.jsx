import React from 'react'
import './Cart.css';
import { useContext } from 'react';
import { cartContext } from '../../../Context/CartContext';
import CartProduct from './CartProduct';



const Cart = () => {

    const { cart, clear, removeItem } = useContext(cartContext);

    return (
        <section className='section-cart'>
            <h2 className='titulo-carrito'>Carrito de compra</h2>
            <div className='cont-productosCart'>
                <CartProduct cart={cart} removeItem={removeItem} />
            </div>
            <div className='contButton-deleteAll'>
                <button className='deleteAll-button' onClick={(() => clear())}>Eliminar Productos</button>
            </div>
        </section>
    )
}

export default Cart