import { useState } from "react";
import { useUser } from "../contexts/userContext"


export const Login = ()=> {

    const { loginUser } = useUser();

    const [ nameUser, setNameUser ] = useState('');

    const handlelogin = (e)=> {
        setNameUser(e.target.value);
    }

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