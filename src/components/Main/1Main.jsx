import React from 'react'
import NavBar from './2NavBar'
import ItemListContainter from './3ItemListContainter'
import './main.css'

const Main = () => {
    return (
        <main>
            <NavBar />
            <ItemListContainter saludo='Bienvenido a la tiende de Articulos de Harry Potter. ...Proximamente' />
        </main>
    )
}

export default Main