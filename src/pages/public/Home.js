import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                </ul>
            </nav>
            {/*-----------Renderizar las rutas anidadas-------- */}
            <Outlet/>
            
        </div>
    )
}
