import React,{useEffect, useState} from 'react';
import { Product } from './Product';
import '../../assets/stylesheets/productslist.css';
import Axios from 'axios';


export const ProductsList = () => {
    const [productos, setProductos] = useState(false)

    //Esto se ejecuta al inicio del componente y solo aqui
    useEffect(()=>{
            console.log("Hola, funciona");
            Axios.get("https://5f3c95f36c11f80016d6f21e.mockapi.io/saboritech/items")
            .then(response => {
                setProductos(response.data);
            })
            
        },[])
        //con corchetes vacios se usa solo al principio del componente
    
        useEffect(()=>{
            console.log(productos);
        }, [productos])

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <div className="productslist">
            {productos ? 
                productos.map((producto, i)=>(
                    <div>
                        <Product key={producto.nombre + i} nombre={producto.nombre} precio = {producto.precio} descripcion = {producto.descripcion}/>
                    </div>
                ))
                : 
                "Trayendo info del server"
            }
        </div>
    )
}
