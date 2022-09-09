import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

//Creo el context
export const cartContext = createContext();

const CartContext = ({ children }) => {

    //En este hook la lista de productos del carrito
    const [cart, setCart] = useState([]);

    //Funcion para agreagr items al carrito(agregar items al hook cart);
    const addToCart = (items, cantidad) => {
        if (isInCart(items.id)) {
            //si elitem esta en cart solo sumarle uno a la cantidad
            cart.filter(item=> (item.cantidad += cantidad)); 
        }else{
            //sino setear los nuevos items con la cantidad
            setCart([...cart, { ...items, cantidad }]);
        }
    }

    //Funcion para ver si ya esta en el carrito
    const isInCart = (id) => cart.find((item)=> item.id === id); 

    //Funcion para eliminar un item por id
    const removeItem = (id)=>{
        //filtro los productos q sean diferentes al valor ingresado
        const itemDelete = cart.filter( (item)=>
            item.id !== id
        );
        setCart(itemDelete);
    }

    //Funcion para eliminar todos los productos del carrito(eliminar items en cart);
    const clear = () => {
        setCart([]);
    }

    return (
        <cartContext.Provider value={{ 
            cart,
            addToCart, 
            clear, 
            removeItem 
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext