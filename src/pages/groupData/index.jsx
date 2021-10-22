import GroupPage from "../../components/GroupPage";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import CustomizedInput from "../../components/CustomizedInput";
import {
  UserContainer,
  GroupContent,
  Container,
  Image,
  CreatePopup,
  Button,
  ButtonContainer,
} from "./styles";
import { useHistory } from "react-router";
import { GroupContext } from "../../providers/Group";
import { useParams } from "react-router-dom";

export const GroupData = () => {
  const { createActivity, createGoal, enterAGroup } = useContext(GroupContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isGoals, setIsGoals] = useState(false);
  const [isActivities, setIsActivities] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleActivity = (data) => {
    createActivity(data, id);
  };

  const handleGoal = (data) => {
    createGoal(data, id);
  };

  const toggleGoals = () => {
    setIsGoals(!isGoals);
    setIsActivities(false);
  };

  const toggleActivities = () => {
    setIsActivities(!isActivities);
    setIsGoals(false);
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
          <Button onClick={() => enterAGroup(id)}>Entrar no Grupo</Button>
          <CreatePopup search={isGoals} onSubmit={handleSubmit(handleGoal)}>
            <h2>Criar uma meta</h2>
            <CustomizedInput
              type="string"
              placeholder="Nome"
              name="title"
              error={errors.title?.message}
              register={register}
            />
            <CustomizedInput
              type="string"
              placeholder="Dificuldade"
              name="difficulty"
              error={errors.difficulty?.message}
              register={register}
            />
            <CustomizedInput
              type="string"
              placeholder="Percentual"
              name="how_much_achieved"
              error={errors.how_much_achieved?.message}
              register={register}
            />
            <ButtonContainer>
              <Button type="submit">Enviar</Button>
              <Button onClick={toggleGoals}>Voltar</Button>
            </ButtonContainer>
          </CreatePopup>
          <Button onClick={toggleGoals}>Criar Metas</Button>

          <CreatePopup
            search={isActivities}
            onSubmit={handleSubmit(handleActivity)}
          >
            <h2>Criar uma atividade</h2>
            <CustomizedInput
              type="string"
              placeholder="Nome"
              name="title"
              error={errors.title?.message}
              register={register}
            />
            <ButtonContainer>
              <Button type="submit">Enviar</Button>
              <Button onClick={toggleActivities}>Voltar</Button>
            </ButtonContainer>
          </CreatePopup>

          <Button onClick={toggleActivities}>Criar Atividades</Button>
          <Button onClick={() => history.push("/discover")}>Voltar</Button>
        </UserContainer>
        <GroupContent>
          <GroupPage />
        </GroupContent>
      </Container>
    </>
  );
};
