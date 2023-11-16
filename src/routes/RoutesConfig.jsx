import { Route, Routes } from "react-router-dom"
import { UserContext } from "../contexts/userContext"
import { Home } from "../pages/Home"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { NavBar } from "../components/NavBar"
import { Profile } from "../pages/Profile"


export const RoutesConfig = ()=> {

    return (
        <UserContext >
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/page/login" element={<Login/>}/>
                <Route path="/page/register" element={<Register/>} />
                <Route path="/page/profile" element={<Profile />} />
                <Route path="*" element={<p>Page not found</p>} />
            </Routes>
        </UserContext>
    )
}