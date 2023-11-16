import { useState, useEffect } from "react";
import { useUser } from "../contexts/userContext"
import { useNavigate } from "react-router-dom";


export const Register = ()=> {

    const navigate = useNavigate();

    const { registerUser, sesion } = useUser();

    const [ userNew, setUserNew ] = useState({userName: '', password: '', authenticated: false});


    const handleRegister = (e)=> {
        e.preventDefault();
        setUserNew({...userNew, authenticated: true});
        registerUser(userNew);
        navigate('/')
    };


    useEffect(() => {
        // Si ya hay una sesión, redirige a la página principal
        if (sesion) {
            navigate('/');
        }
    }, [sesion]);

    return (
        <>
            <form
                onSubmit={(e)=> handleRegister(e)}
            >

                <input 
                    type="text"
                    placeholder="UserName"
                    value={userNew.userName}
                    onChange={(e) => setUserNew({ ...userNew, userName: e.target.value})}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={userNew.password}
                    onChange={(e) => setUserNew({...userNew, password: e.target.value})}
                
                />
                <button type="submit">Register</button>
            </form>
        </>
    )
}