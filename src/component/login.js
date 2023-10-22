import React, { useState } from "react";
import Logo from "../images/logo.png";
import { useNavigate } from 'react-router-dom';
import "../css/style.css"


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogged, setIsLpgged] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        const mUsername = 'admin';
        const mPassword = 'admin';

        const uUsername = 'budhi';
        const uPassword = 'budhi';

        if (username === mUsername && password === mPassword ) {
            setIsLpgged(true)
            navigate('/dashboard');
        } if (username === uUsername && password === uPassword) {
            setIsLpgged(true)
            navigate('/dashboardu');
        } else {
            alert('Login gagal. Silakan chek password dan username kembali');
        }
    };

    return (
        <div className="container">
            <div className="cover">
                <img className="Logo d-block mx-auto" src={Logo}></img>
                <input className="login-input" 
                    type="text" 
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <input className="password-input" 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <button className="login-btn" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default LoginPage;