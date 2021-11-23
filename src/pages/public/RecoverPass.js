import React from 'react'

export const RecoverPass = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="password" placeholder="New password"/>
                <br/>
                <input type="password" placeholder="Confirm password"/>
                <br/>
                <button type="submit">Restore now</button>
            </form>
        </div>
    )
}
