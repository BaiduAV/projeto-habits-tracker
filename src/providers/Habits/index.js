import { createContext, useContext, useState} from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {

    const [habits, setHabits] = useState([])

    const loadHabits = () => {
        const token = JSON.parse(localStorage.getItem("@Tracker:Token")) || "";
        api
            .get("/habits/personal/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setHabits(response.data)
            })
            .catch((err) => console.log(err))
    }

    const createHabit = (data) => {
        const token = JSON.parse(localStorage.getItem("@Tracker:Token")) || "";
        const userID = jwt_decode(token).user_id;
        const habit = {
            ...data,
            how_much_achieved: 0,
            achieved: false,
            user: userID,
        };
        api
            .post("/habits/", habit, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resp) => {
                setHabits([...habits, resp.data])
                toast.success("Hábito criado com sucesso")
            })  
            .catch((err) => toast.error("Erro ao criar o hábito"))
    }

    const deleteHabit = (habitID) => {
        const token = JSON.parse(localStorage.getItem("@Tracker:Token")) || "";
        api
            .delete(`/habits/${habitID}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((_) => {
                loadHabits()
                toast.success("Hábito deletado com sucesso!")
            })
            .catch((err) => {
                toast.error("Erro ao deletar o hábito")
                console.log(err)
            })
    }
    
    return (
        <HabitsContext.Provider
            value={{ 
                loadHabits,
                createHabit,
                deleteHabit,
                habits,
            }}
        >
            {children}
        </HabitsContext.Provider>
    );
};

export const useHabits = () => useContext(HabitsContext)