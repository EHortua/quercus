import React,{useEffect, useState} from 'react';
import Product from './Product';
import Axios from 'axios';

export default function Productslist() {
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
// npm i axios LISTO
// 
// Axios.get(url)
//         .then((response)=>{
//             console.log(response.data);
//         })


    return (
        <div>
            <h1>Productos</h1>
            {productos ? 
                productos.map((producto, i)=>(
                    <div>
                        <Product nombre={producto.nombre} precio = {producto.precio} descripcion = {producto.descripcion}/>
                    </div>
                ))
                : 
                "Trayendo info del server"
            }
        </div>
    )
}

