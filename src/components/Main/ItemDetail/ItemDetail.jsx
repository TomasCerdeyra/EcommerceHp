import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useContext } from "react"
import { cartContext } from '../../../Context/CartContext'


const ItemDetail = ({ items }) => {
    const [cantidad, setCantidad] = useState(0);

    const { addToCart } = useContext(cartContext);

    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem);

        //Paso valores a la funicon para agregar al carrito
        addToCart(items, cantidadItem);
    }

    return (
        <div className='cont-details' key={items.id}>
                <h2 className='titulo-details'>{items.tiltle}</h2>
                <div className='contImg-detail'>
                    <img className='img-details' src={items.img} alt="" />
                    <p className='price-detail'>${items.price}</p>
                </div>
                <p className='detalles'>{items.descrip}</p>

                <ItemCount
                    stock={items.stock}
                    onAdd={onAdd}
                />
        </div>
    )
}

export default ItemDetail