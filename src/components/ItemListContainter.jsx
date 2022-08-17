import React from 'react'
import '../styles/ItemList.css'

const ItemListContainter = (props) => {
    return (
        <div className='container-list'>
            <p className='texto'>{props.saludo}</p>
        </div>
    )
}

export default ItemListContainter