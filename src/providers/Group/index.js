import { createContext, useContext } from "react";
import api from "../../services/api";
import { useUser } from "../User";

export const GroupContext = createContext([])

export const GroupProvider = ({ children }) => {

    const { auth } = useUser();

    const enterAGroup = (id) => {
        api
          .post(`/groups/${id}/subscribe`, auth)
          .then((response) => response.data)
          .catch((err) => console.log(err));
      };
    
      const exitAGroup = (id) => {
        api
          .delete(`/groups/${id}/unsubscribe`, auth)
          .then((response) => response.data)
          .catch((err) => console.log(err));
      };
    
      const createActivity = (data) => {
        api
          .post("/activities/", auth, data)
          .then((r) => console.log(r))
          .catch((err) => console.log(err));
      };
    
      const createGoal = (data) => {
        api
          .post("/goals/", auth, data)
          .then((r) => console.log(r))
          .catch((err) => console.log(err));
      };
    
      const updateGoal = (data, goalId) => {
        api
          .post(`/activities/${goalId}`, auth, data)
          .then((r) => console.log(r))
          .catch((err) => console.log(err));
      };
    
      const updateActivity = (data, activityId) => {
        api
          .post(`/activities/${activityId}`, auth, data)
          .then((r) => console.log(r))
          .catch((err) => console.log(err));
      };
      
      return (
          <GroupContext.Provider
            value={{ 
                enterAGroup, 
                exitAGroup, 
                createActivity, 
                createGoal, 
                updateGoal, 
                updateActivity
            }}
          >
              {children}
          </GroupContext.Provider>
      )

}

export const useGroup = () => useContext(GroupContext)