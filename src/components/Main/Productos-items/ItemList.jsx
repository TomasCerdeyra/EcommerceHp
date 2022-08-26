import React from 'react'
import Item from './Item'

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