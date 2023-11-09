import { useUser } from "../contexts/userContext"


export const Home = ()=> {

    const { users, logoutUser } = useUser();

    return (
        <>
            <h4>Welcome {users.map(user => user.userName)}</h4>
            <button onClick={logoutUser}>Logout</button>
        </>
    )
}