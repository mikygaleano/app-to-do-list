import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/userContext"


export const Home = ()=> {

    const { currentUsers, logoutUser } = useUser();

    const navigate = useNavigate();

    if (!currentUsers) {
        // Si currentUsers es nulo, muestra un mensaje o redirige a una página de inicio de sesión
        return (
          <>
            <p>Please log in to see your profile.</p>
            <button onClick={()=> navigate('/page/login')}>Login</button>
          </>
        );
      }
    
    return (
        <>
          <h4>Welcome {currentUsers.userName}</h4>
          <button onClick={logoutUser}>Logout</button>
        </>
    );
}