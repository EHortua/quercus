import React, { useContext } from 'react'
import Image from 'react-bootstrap/Image'
import '../../assets/stylesheets/sidebar.css'
import Logo from '../../assets/logopng.png'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

export const Dashboard = () => {
    const {handleAuth} = useContext(AuthContext);

    const handleLogout = ()=>{
        handleAuth(false);
    }
    return (
        <div>
            <nav className="sidebar">
                <ul>
                    <li>
                        <Link to="/"><Image src={Logo} fluid /></Link>
                    </li>
                    <li>
                        <Link to="/">Perfil</Link>
                    </li>
                    <li>
                        <Link to="products">Products</Link>
                    </li>
                    <li>
                        <Link to="products">People</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Log out</button>
                    </li>
                </ul>
            </nav>
            {/*-----------Renderizar las rutas anidadas-------- */}
            <Outlet/>
        </div>
    )
}
