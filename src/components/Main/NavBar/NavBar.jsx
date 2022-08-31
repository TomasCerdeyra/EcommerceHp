import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='seccion1'>
            <div className='cont-h1'>
                <h1>
                    Articulos de Harry Potter:
                </h1>
            </div>
            <aside className="aside-list">
                <nav>
                    <ul className="ul-list">
                        <li>Varitas</li>
                        <li>Libros</li>
                        <li>Funko Pop</li>
                        <li>Grageas</li>
                        <li>Accesorios</li>
                        <li>Indumentarias</li>
                        <li>Figuras</li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default NavBar