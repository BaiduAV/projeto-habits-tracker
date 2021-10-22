import { createContext, useContext } from "react";
import api from "../../services/api";

export const GroupContext = createContext([]);

export const GroupProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Tracker:Token")) || "";
  const config = { headers: { Authorization: `Bearer ${token}` } };
  console.log(config);

  const enterAGroup = (id) => {
    api
      .post(`/groups/${id}/subscribe`, config)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  };

  const exitAGroup = (id) => {
    api
      .delete(`/groups/${id}/unsubscribe`, config)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  };

  const createActivity = (data, id) => {
    api
      .post(
        "/activities/",
        { ...data, realization_time: "2021-10-23T15:00:00Z", group: id },
        config
      )
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
  };

  const createGoal = (data, id) => {
    api
      .post("/goals/", { ...data, group: id }, config)
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
  };

  const updateGoal = (data, goalId) => {
    api
      .post(`/activities/${goalId}`, config, data)
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
  };

  const updateActivity = (data, activityId) => {
    api
      .post(`/activities/${activityId}`, config, data)
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
        updateActivity,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
