import React from 'react'
import './Cart.css';
import { useContext, useState } from 'react';
import { cartContext } from '../../../Context/CartContext';
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';
import ContForm from '../Form/ContForm';
import { useEffect } from 'react';



const Cart = () => {

    const { cart, clear, removeItem, totalPrice, totalProducts } = useContext(cartContext);

    //Guardo el id para mostrarlo cuando finalice la compra
    const [idCompra, setIdCompra] = useState('');

    //Guardo el esteado de la compra (Si se termina o sigue en el carritos)
    const [terminarCompra, setTerminarCompra] = useState(false);

    //Funcion para agarrar el id de la orden de compra
    const idOrder = (id) => {
        setIdCompra(id)
    }

    //Funciones para mostrar y eliminar el form
    const mostrarForm = () => {
        setTerminarCompra(true);
    }
    const eliminarFomr = () =>{
        setTerminarCompra(false);
    }

    //Si idCompra es true muestro el cartel de finalizar compra
    if (idCompra) {
        return <div className='contCompraFinalizada'>
            <h2> Gracias por tu compra</h2>
            <p >Tu id de compra es: {idCompra}</p>
            <Link to={'/'}>
                <button className='buttonVolverProductos'>Ver mas productos</button>
            </Link>
        </div>
    }

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
                        {/* Si terminarCompra es true muestro el form sino el carrito */}
                        {
                            terminarCompra ?
                                <>
                                    <h2 className='titulo-carrito'>Tu compra casi esta lista!!</h2>
                                    <ContForm cart={cart} total={totalPrice} clearCart={clear} idOrder={idOrder} />
                                    <div className='contButton-deleteAll'>
                                        <button className='deleteAll-button'  onClick={eliminarFomr} >Volver</button>
                                    </div>
                                </>
                                :
                                <>
                                    <h2 className='titulo-carrito'>Carrito de compra</h2>
                                    <div className='cont-productosCart'>
                                        <CartProduct cart={cart} removeItem={removeItem} />
                                        <div className='cont-terminarCompra'>
                                            <button className='button-terminarCompra' onClick={mostrarForm}>Terminar mi compra</button>
                                            <p className='p-TotalPrice'>Total <span>x{totalProducts()}</span> : <span>${totalPrice()}</span></p>
                                        </div>
                                    </div>
                                    <div className='contButton-deleteAll'>
                                        <button className='deleteAll-button' onClick={(() => clear())}>Eliminar Productos</button>
                                    </div>
                                </>
                        }
                    </>
            }
        </section >
    )
}

export default Cart