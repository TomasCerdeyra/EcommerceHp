import React, { useState } from 'react'
import './main.css'
import ItemCount from './ItemCount'


const ItemListContainter = (props) => {

    function agregarCarrito() {
        alert('Se agrego el producto al carrito')
    }
    return (
        <div className='container-list'>
            <p className='texto'>{props.saludo}</p>
            <ItemCount 
            stock={5}
            initial={1}
            onAdd={agregarCarrito}
            />
        </div>
    )
}

export default ItemListContainter