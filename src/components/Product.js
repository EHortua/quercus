import React from 'react'

export default function Product({nombre, precio, descripcion}) {

    return (
        <div>
            <h4>producto: {nombre}</h4>
            <h6>precio:{precio}</h6>
            <h6>descripcion:{descripcion}</h6>
        </div>
    )
}
