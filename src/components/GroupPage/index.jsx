import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MainContent } from "./styles";

const GroupPage = () => {
  const [selectedGroup, setSelectedGroup] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`/groups/${id}/`)
      .then((response) => setSelectedGroup(response.data))
      .catch((err) => console.log(err));
  });

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
        <button onClick={() => history.push("/discover")}>VOLTAR</button>
      </div>
    </MainContent>
  );
};

export default GroupPage;
