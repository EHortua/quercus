import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import AuthContext from '../../context/AuthContext';

/* axios.defaults.withCredentials = true; */

export const Login = () => {
    
    /* const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //Redux no lo necesitaría
    const [errorusername, seterrorUsername] = useState("");
    const [errorpassword, seterrorPassword] = useState(""); */

    const {handleAuth} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRecover = ()=>{
        navigate('recover');
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleAuth(true);
        /* seterrorPassword("");
        seterrorUsername("");
        axios.post("http://localhost:8080/api/auth/signin", {username, password})
        .then((response) => {
                console.log(response)
        })
        .catch((error) => {
                const {username,password} = error.response.data;
                seterrorPassword(password)
                seterrorUsername(username)
        }) */
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" />
                {/* <small>{errorusername}</small> */}
                <br/>
                <input type="password" placeholder="Password" />
                {/*value={password} onChange={(e) => setPassword(e.target.value)}*/}
                {/* <small>{errorpassword}</small> */}
                <br/>
                <button type="submit">Iniciar sesión</button>
            </form>
            <br/>
                <button onClick={handleRecover}>Recover password</button>
        </div>
    )
}
