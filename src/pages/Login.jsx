import { useState , useEffect} from "react";
import { useUser } from "../contexts/userContext"
import { useNavigate } from "react-router-dom";


export const Login = ()=> {

    const navigate = useNavigate();

    const { loginUser, sesion } = useUser();

    useEffect(() => {
        // Si ya hay una sesión, redirige a la página principal
        if (sesion) {
            navigate('/');
        }
    }, [sesion]);

    const [ nameUser, setNameUser ] = useState('');

    const handlelogin = (e)=> {
        setNameUser(e.target.value);
    };


    return (
        <>
            <form onSubmit={()=> loginUser(nameUser)} >
                <input 
                    type="text"
                    placeholder="userName"
                    value={nameUser}
                    onChange={(e)=> handlelogin(e)}
                />
                <button type="submit">Login</button>
            </form>
        </>
    )
}