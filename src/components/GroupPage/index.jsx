import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MainContent } from "./styles";

const GroupPage = () => {
  const [selectedGroup, setSelectedGroup] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/groups/${id}/`)
      .then((response) => setSelectedGroup(response.data))
      .catch((err) => console.log(err));
  });

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

  const createActivity = (data) => {
    api
      .post("/activities/", config, data)
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
  };

  const createGoal = (data) => {
    api
      .post("/goals/", config, data)
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
    <MainContent>
      <div>
        <h1>{selectedGroup.name}</h1>
        <p>Categoria: {selectedGroup.category}</p>
      </div>
      <div>
        <p>{selectedGroup.description}</p>
      </div>
      <div>
        Usuários no grupo:
        {selectedGroup.users_on_group !== undefined &&
          selectedGroup.users_on_group.map((item, index) => (
            <p key={index}>{item.username}</p>
          ))}
      </div>
      <div>
        Goals:
        {selectedGroup.users_on_group !== undefined &&
          selectedGroup.goals.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
      </div>
      <div>
        Activities:
        {selectedGroup.users_on_group !== undefined &&
          selectedGroup.activities.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
      </div>
      <div>
        <button>ENTRAR NO GRUPO</button>
      </div>
    </MainContent>
  );
};

export default GroupPage;
