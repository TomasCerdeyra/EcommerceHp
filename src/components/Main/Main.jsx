import React from 'react'
import NavBar from './NavBar/NavBar'
import ItemListContainter from './ItemLisContainer/ItemListContainter'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import './main.css'
import { Route, Routes } from 'react-router-dom'

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
                    element={<ItemListContainter />} />
            </Routes>
        </main>
    )
}

export default Main