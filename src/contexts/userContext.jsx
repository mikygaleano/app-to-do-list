import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";

const Context = createContext();



export const useUser = () => useContext(Context);

export const UserContext = ({children})=> {

    const navigate = useNavigate();

    // Intenta cargar la sesión y la información del usuario desde localStorage al inicio
    const storedSesion = localStorage.getItem("sesion");
    const storedCurrentUsers = localStorage.getItem("currentUsers");

    const [sesion, setSesion] = useState(storedSesion ? JSON.parse(storedSesion) : false);

    const [ users, setUsers ] = useState([]);

    const [currentUsers, setCurrentUsers] = useState(
        storedCurrentUsers ? JSON.parse(storedCurrentUsers) : null
    );



    const registerUser = (NewUser)=> {
        if (!users.authenticated) {
            setUsers([...users, NewUser]);
            setCurrentUsers(NewUser); // Almacena el usuario actual en currentUsers
            setSesion(true);
            localStorage.setItem("sesion", JSON.stringify(true));
            localStorage.setItem("currentUsers", JSON.stringify(NewUser));
        }else {
            navigate('/')
        }
        return navigate('/')
    };

    const loginUser = (userName, password)=> {
        const foundUser = users.find(user=> user.userName === userName && user.password === password);
        if (foundUser) {
            if (sesion === false) {
                setSesion(true);
                setCurrentUsers(foundUser);
                localStorage.setItem("sesion", JSON.stringify(true));
                localStorage.setItem("currentUsers", JSON.stringify(foundUser));
                navigate('/');
            }
          } else {
            navigate('/page/register');
        }
    };

    const logoutUser = ()=> {
        setSesion(false);
        setCurrentUsers(null); // Limpia el usuario actual al cerrar sesión
        localStorage.removeItem("sesion");
        localStorage.removeItem("currentUsers");
        navigate('/page/login');
    };



    return (
        <Context.Provider value={{users, sesion, currentUsers, registerUser, loginUser, logoutUser}}>
            {
                children
            }
        </Context.Provider>
    )

}