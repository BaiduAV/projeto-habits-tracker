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
  Input,
  FormContainer,
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
  const [goals, setGoals] = useState({
    title: "",
    difficulty: "",
    how_much_achieved: 0,
    group: id,
  });

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

  const handleGoal = (goals) => {
    createGoal(goals, id);
  };

  const toggleGoals = () => {
    setIsGoals(!isGoals);
    setIsActivities(false);
  };

  const toggleActivities = () => {
    setIsActivities(!isActivities);
    setIsGoals(false);
  };

  console.log(goals);
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
          <CreatePopup search={isGoals}>
            <h2>Criar uma meta</h2>
            <FormContainer onSubmit={handleSubmit(handleGoal)}>
              <Input
                type="string"
                placeholder="Name"
                onChange={(e) => setGoals({ ...goals, title: e.target.value })}
              ></Input>
              <Input
                type="string"
                placeholder="Dificuldade"
                onChange={(e) =>
                  setGoals({ ...goals, difficulty: e.target.value })
                }
              ></Input>
              <Input
                type="string"
                placeholder="Dificuldade"
                onChange={(e) =>
                  setGoals({ ...goals, how_much_achieved: e.target.value })
                }
              ></Input>
              <Button type="submit">Enviar</Button>
            </FormContainer>
            <Button onClick={toggleGoals}>Voltar</Button>
          </CreatePopup>
          <Button onClick={toggleGoals}>Criar Metas</Button>

          <CreatePopup search={isActivities}>
            <h2>Criar uma atividade</h2>
            <FormContainer onSubmit={handleSubmit(handleActivity)}>
              <CustomizedInput
                type="string"
                placeholder="Nome"
                name="title"
                error={errors.title?.message}
                register={register}
              />
              <Button type="submit">Enviar</Button>
            </FormContainer>
            <Button onClick={() => toggleActivities()}>Voltar</Button>
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
