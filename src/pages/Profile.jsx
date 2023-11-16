import { useUser } from "../contexts/userContext";

export const Profile = ()=> {
    
    const { currentUsers, logoutUser } = useUser();
    
    return (
        <>
          <h4>Welcome {currentUsers.userName}</h4>
          <button onClick={logoutUser}>Logout</button>
        </>
    );
}