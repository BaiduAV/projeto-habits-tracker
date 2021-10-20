import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {

    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("@Tracker:Token")) || {}
    );

    const [token, setToken] = useState("");

    const auth = { headers: { Authorization: `Bearer ${token}` } };

    const setUserToken = (token) => {
        localStorage.setItem(`@Tracker:Token`, JSON.stringify(token));
        const userID = jwt_decode(token).user_id;
        localStorage.setItem(`@Tracker:User`, JSON.stringify(userID));
        setToken(JSON.stringify(token))
    }

    const userLogin = (userData) => {
        api
            .post("/sessions/", userData)
            .then((response) => {
                const { access } = response.data;
                setUserToken(access)
                toast.success("Sucesso ao logar!")
            })
            .catch((err) => toast.error("Verifique as suas credenciais e tente novamente"));
    };

    const userLogoff = () => {
        localStorage.removeItem(`@Tracker:Token`);
        localStorage.removeItem(`@Tracker:User`);
        setToken("");
    }

    return (
        <UserContext.Provider
            value={{ 
                user,
                token,
                auth, 
                userLogin, 
                userLogoff,
             }}
        >
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);