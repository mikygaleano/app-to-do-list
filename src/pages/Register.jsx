import { useState } from "react";
import { useUser } from "../contexts/userContext"
import { useNavigate } from "react-router-dom";


export const Register = ()=> {

    const navigate = useNavigate();

    const { registerUser } = useUser();

    const [ userNew, setUserNew ] = useState({userName: '', password: '', register: false});


    const handleRegister = (e)=> {
        e.preventDefault();
        registerUser(userNew);
        setUserNew({...userNew, register: true});
        addUserLocalstorage(userNew)
        navigate('/')
    };

    const addUserLocalstorage = (user)=> {
        
        // Obtener usuarios existentes del localStorage o inicializar un arreglo vacío
        const existingUser = JSON.parse(localStorage.getItem('users')) || [];
            
        // Verificar si el usuario ya existe antes de agregarlo
        const userExists = existingUser.some((u) => u.userName === user.userName);

        if (!userExists) {
            // Agregar el nuevo usuario al arreglo
            existingUser.push(user);

            // Guardar el arreglo actualizado en el localStorage
            localStorage.setItem('users', JSON.stringify(existingUser));
        } 

    }

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