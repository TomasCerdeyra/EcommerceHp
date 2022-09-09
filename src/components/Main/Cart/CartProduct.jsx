import React from 'react'

const CartProduct = ({ cart, removeItem }) => {

    return (
        <>
            {
                cart.map((item)=>(
                    <div key={item.id} className='cont-item-cart' >
                        <img className='img-card' src={item.img} style={{ width: 55 }} alt="" />
                        <p className='p-card'>{item.tiltle}</p>
                        {/* Multiplico el precio por la cantidad para sumarle el costo */}
                        <p className='price-cart'>Precio: ${item.price * item.cantidad} </p>
                        <button className='button-elementDelete' onClick={()=>removeItem(item.id)} >Eliminar</button>
                    </div>
                ))
            }
        </>
    )
}

export default CartProduct