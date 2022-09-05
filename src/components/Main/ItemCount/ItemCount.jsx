import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {
    const [cont, setCont] =useState(1);

    const restar = ()=> {
        if (cont > 1) {
            setCont(cont-1)
        }
    };

    function sumar() {
        if (cont < stock) {
            setCont(cont+1);
        }
    };

    return (
        <div className='contenedorGeneral-contador'>
            <p>Stock de: {stock}</p>
            <div className='contenedor-contador'>
                <button className='boton-cont' onClick={restar} >-</button>
                <p>{cont}</p>
                <button className='boton-cont' onClick={sumar}  >+</button>
            </div>
            <button className='boton-agregarCarrito' onClick={(()=> onAdd(cont))} >Agregar al carrito</button>
        </div>
    );
};

export default ItemCount