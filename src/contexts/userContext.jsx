import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";

const Context = createContext();



export const useUser = () => useContext(Context);

export const UserContext = ({children})=> {

    const navigate = useNavigate();

    const [authenticated, setAuthenticated] = useState(false);
    const [ users, setUsers ] = useState([]);
    const [ currentUsers, setCurrentUsers ] = useState(null);


    const registerUser = (NewUser)=> {
        if (!authenticated) {
            setUsers([...users, NewUser]);
            setCurrentUsers(NewUser);
          }    
    };

    const loginUser = (userName)=> {
        const foundUser = users.find((user) => user.userName === userName);
        if (foundUser) {
          setAuthenticated(true);
          setCurrentUsers(foundUser); // Almacena el usuario actual en currentUsers
          navigate('/');
        } else {
          navigate('/page/register');
        }
    };

    const logoutUser = ()=> {
        setAuthenticated(false);
        setCurrentUsers([]); // Limpia el usuario actual al cerrar sesión
        navigate('/page/login');
    };


    return (
        <Context.Provider value={{users, authenticated, currentUsers, registerUser, loginUser, logoutUser}}>
            {
                children
            }
        </Context.Provider>
    )

}