import React from 'react'
import NavBar from './NavBar/NavBar'
import ItemListContainter from './ItemLisContainer/ItemListContainter'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import './main.css'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart/Cart'

const Main = () => {
    return (
        <main>
            <NavBar />
            <Routes>
                {/* Ruta Home */}
                <Route
                    path='/'
                    element={<ItemListContainter />}
                />
                {/* Ruta detalles */}
                <Route
                    path='/item/:id'
                    element={<ItemDetailContainer />}
                />
                {/* Ruta categoria Productos */}
                <Route
                    path='/category/:id'
                    element={<ItemListContainter />} 
                />
                <Route 
                    path='/cart'
                    element={<Cart />}
                />    
            </Routes>
        </main>
    )
}

export default Main