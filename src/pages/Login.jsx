import { useState , useEffect} from "react";
import { useUser } from "../contexts/userContext"
import { useNavigate } from "react-router-dom";


export const Login = ()=> {

    const navigate = useNavigate();

    const { loginUser, sesion } = useUser();

    const [ nameUser, setNameUser ] = useState('');
    const [ password, setPassword ] = useState('');

    const handlelogin = (e)=> {
        setNameUser(e.target.value);
        setPassword(e.target.value);
    };

    useEffect(() => {
        // Si ya hay una sesión, redirige a la página principal
        if (sesion) {
            navigate('/');
        }
    }, [sesion]);

    return (
        <>
            <form onSubmit={()=> loginUser(nameUser, password)} >
                <input 
                    type="text"
                    placeholder="userName"
                    value={nameUser}
                    onChange={(e)=> handlelogin(e)}
                />
                <input 
                    type="password"
                    placeholder="password" 
                    value={password}
                    onChange={(e)=> handlelogin(e)}    
                />
                <button type="submit">Login</button>
            </form>
        </>
    )
}