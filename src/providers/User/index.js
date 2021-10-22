import { createContext, useContext } from "react";
import jwt_decode from "jwt-decode";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {

    const userLogin = async (userData) => {
            localStorage.setItem(`@Tracker:Token`, JSON.stringify(userData));
            const userID = await jwt_decode(userData).user_id;
            localStorage.setItem(`@Tracker:User`, JSON.stringify(userID));
    };

    const userLogoff = () => {
        localStorage.removeItem(`@Tracker:Token`);
        localStorage.removeItem(`@Tracker:User`);
    }

    return (
        <UserContext.Provider
            value={{  
                userLogin, 
                userLogoff,
             }}
        >
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);