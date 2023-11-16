import { NavLink } from "react-router-dom"
import { useUser } from "../contexts/userContext";

export const UlMenuUsers = ()=> {

    const { currentUsers, sesion, logoutUser } = useUser();


    return (
        <ul className="flex gap-2">
                {!sesion && 
                    <li>
                        <NavLink to={'/page/login'}>
                            Login
                        </NavLink>
                    </li>
                }
                {!currentUsers && 
                    <li>
                        <NavLink to={'/page/register'}>
                            Register
                        </NavLink>
                    </li>
                }
                {currentUsers || sesion?
                    <div className="flex gap-2">
                        <li>
                            <NavLink to={'/page/profile'} >
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <button onClick={logoutUser}>Logout</button>
                        </li>
                    </div>
                    : ''
                }
                <li>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                </li>
        </ul>
    )
}