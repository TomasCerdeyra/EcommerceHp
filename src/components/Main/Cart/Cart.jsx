import React from 'react'
import './Cart.css';
import { useContext } from 'react';
import { cartContext } from '../../../Context/CartContext';
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';



const Cart = () => {

    const { cart, clear, removeItem, totalPrice, totalProducts } = useContext(cartContext);

    console.log(totalProducts());

    return (
        <section className='section-cart'>
            {
                totalProducts() === 0 ?
                    <>
                        <h3 className='h3-cart'>Aun no hay productos en tu carrito...</h3>
                        <Link to={'/'}> 
                            <button className='button-VerProductos' > Ver productos</button> 
                        </Link>
                    </> :
                    <>
                    <h2 className='titulo-carrito'>Carrito de compra</h2>
                    <div className='cont-productosCart'>
                        <CartProduct cart={cart} removeItem={removeItem} />
                        <div className='cont-terminarCompra'>
                            <Link to={'/comprar'}>
                            <button className='button-terminarCompra'>Terminar mi compra</button>
                            </Link>
                            <p className='p-TotalPrice'>Total <span>x{totalProducts()}</span> : <span>${totalPrice()}</span></p>
                        </div>
                    </div>
                    <div className='contButton-deleteAll'>
                        <button className='deleteAll-button' onClick={(() => clear())}>Eliminar Productos</button>
                    </div>
                </>
            }
        </section >
    )
}

export default Cart