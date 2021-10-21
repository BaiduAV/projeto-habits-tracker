import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  MainContent,
  GroupContent,
  Members,
  Goals,
  Activities,
  GroupDetails,
} from "./styles";

const GroupPage = () => {
  const [selectedGroup, setSelectedGroup] = useState({});
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/groups/26/`)
      .then((response) => setSelectedGroup(response.data))
      .catch((err) => console.log(err));
  });

  return (
    <MainContent>
      <GroupContent>
        <h2>{selectedGroup.name}</h2>
        <p>
          <strong>Categoria:</strong> {selectedGroup.category}
        </p>

        <div>
          <p>
            <strong> Descrição: </strong>
            {selectedGroup.description}
          </p>
        </div>
      </GroupContent>
      <GroupDetails>
        <Members>
          <strong>Usuários no grupo:</strong>
          {selectedGroup.users_on_group !== undefined &&
            selectedGroup.users_on_group.map((item, index) => (
              <p key={index}>{item.username}</p>
            ))}
        </Members>
        <Goals>
          <strong>Goals:</strong>
          {selectedGroup.users_on_group !== undefined &&
            selectedGroup.goals.map((item, index) => (
              <p key={index}>{item.title}</p>
            ))}
        </Goals>
        <Activities>
          <strong>Activities:</strong>
          {selectedGroup.users_on_group !== undefined &&
            selectedGroup.activities.map((item, index) => (
              <p key={index}>{item.title}</p>
            ))}
        </Activities>
      </GroupDetails>
    </MainContent>
  );
};

export default GroupPage;
