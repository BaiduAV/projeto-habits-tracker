import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {

    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("@Tracker:Token")) || {}
    );

    const userLogin = (token) => {
        localStorage.setItem(`@Tracker:Token`, JSON.stringify(token));
        const userID = jwt_decode(token).user_id;
        localStorage.setItem(`@Tracker:User`, JSON.stringify(userID));
    };

    const userLogoff = () => {
        localStorage.removeItem(`@Tracker:Token`);
        localStorage.removeItem(`@Tracker:User`);
    }

    return (
        <UserContext.Provider
            value={{ user, userLogin, userLogoff }}
        >
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);