import React, { useState } from 'react';
import './ItemCount.css';
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, onAdd }) => {
    const [cont, setCont] = useState(1);

    const restar = () => {
        if (cont > 1) {
            setCont(cont - 1)
        }
    };

    function sumar() {
        if (cont < stock) {
            setCont(cont + 1);
        }
    };

    return (
        <div className='contenedorGeneral-contador'>
            <div className='contenedor-contador'>
                <p className='boton-cont' onClick={restar} >-</p>
                <p className='contador-detail'>{cont}</p>
                <p className='boton-cont' onClick={sumar}  >+</p>
            </div>
            <p>Stock de: {stock}</p>
            <div>
                <Link to={'/cart'}>
                    <button className='boton-agregarCarrito' onClick={(() => onAdd(cont))} >Agregar al carrito</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemCount