import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { cartContext } from '../../../Context/CartContext'
import { useContext } from 'react'


const Item = ({ items }) => {

    const {addToCart} = useContext(cartContext)

    return (
        <>
            <Link className='link-card' to={`/item/${items.id}`}>
                <img className='img-card' src={items.img} alt="" />
                <p className='p-card'>{items.tiltle}</p>
                <p style={{color: 'black', fontSize: '1.1em'}} >${items.price}</p>
            </Link>
            <div className='Cont-itemButtons'>
                <Link to={`/item/${items.id}`}>
                    <button className='boton-card' >Ver Detalles</button>
                </Link>
            </div>
        </>
    )
}

export default Item