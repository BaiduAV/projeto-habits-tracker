import api from "../../services/api";
import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MainContent } from "./styles";
import { GroupContext } from "../../providers/Group";
import { useUser } from "../../providers/User";

const GroupPage = () => {
  const { enterAGroup, exitAGroup } = useContext(GroupContext);
  const [selectedGroup, setSelectedGroup] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [inTheGroup, setInTheGroup] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const { userId } = useUser();
  console.log(userId);

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
        Objetivos:
        {selectedGroup.users_on_group !== undefined &&
          selectedGroup.goals.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
        <button>NOVO OBJETIVO</button>
      </div>
      <div>
        Activities:
        {selectedGroup.users_on_group !== undefined &&
          selectedGroup.activities.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
        <button>NOVA ATIVIDADE</button>
      </div>
      <div>
        {inTheGroup ? (
          <button onClick={() => exitAGroup(selectedGroup.id)}>
            SAIR DO GRUPO
          </button>
        ) : (
          <button onClick={() => enterAGroup(selectedGroup.id)}>
            ENTRAR NO GRUPO
          </button>
        )}
      </div>
      <button onClick={() => history.push("/discover")}>VOLTAR</button>
    </MainContent>
  );
};

export default GroupPage;
