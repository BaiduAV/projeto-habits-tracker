import GroupPage from "../../components/GroupPage";
import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import {
  UserContainer,
  GroupContent,
  Container,
  Image,
  CreatePopup,
  Button,
} from "./styles";

export const GroupData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGoals, setIsGoals] = useState(false);
  const [isActivies, setIsActivies] = useState(false);
  // const [criateGoals, setCriateGoals] = useState(false);
  // const [criateActive, setCriateActive] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleGoals = () => {
    setIsGoals(!isGoals);
  };

  const toggleActivies = () => {
    setIsActivies(!isActivies);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Container>
        <UserContainer>
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="person"
          />
          <h3>Nome</h3>
          <div>
            <Button>Entrar no Grupo</Button>
          </div>

          <CreatePopup search={isGoals}>
            <h2>Criar uma atividade</h2>
            <input type="string" placeholder="Nome" />
            <input type="string" placeholder="Dificuldade" />
            <input type="string" placeholder="Percentual" />
            <Button>Enviar</Button>
            <Button onClick={toggleGoals}>Voltar</Button>
          </CreatePopup>
          <Button onClick={toggleGoals}>Criar Metas</Button>

          <CreatePopup search={isActivies}>
            <h2>Criar uma atividade</h2>
            <input type="string" placeholder="Nome" />
            <input type="data" placeholder="Data" />

            <Button type="submit">Enviar</Button>
            <Button onClick={toggleGoals}>Voltar</Button>
          </CreatePopup>

          <Button onClick={toggleActivies}>Criar Atividades</Button>
        </UserContainer>
        <GroupContent>
          <GroupPage />
        </GroupContent>
      </Container>
    </>
  );
};
