import React from 'react'
import Item from '../item/Item'
import './ItemList.css'

const ItemList = ({ items }) => {
    return (
        <>
            {
                items.map((item) => {
                    return (
                        <div className='card' key={item.id}>
                            <Item items={item} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default ItemList