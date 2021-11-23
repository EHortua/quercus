import React from 'react'

export const Perfil = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div>
        <h2>Perfil</h2>
        <h3>Team: Quercus</h3> 
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre del usuario"/>
                <br/>
                <input type="text" placeholder="Apellido del usuario"/>
                <br/>
                <input type="text" placeholder="Email"/>
                <br/>
                <button>Actualizar</button>
            </form>
        </div>
    )
}
