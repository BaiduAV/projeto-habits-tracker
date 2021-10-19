import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import background from "../../assets/MainPage.png";
import {
  UserContainer,
  HabitsContainer,
  Container,
  Image,
  HabitsHeader,
} from "./styles";
import { HabitsCard } from "../../components/HabitsCard";
import { Typography } from "@material-ui/core";

import { Popup } from "../../components/PopUp";

export const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [habit, setHabit] = useState();

  const UserHabits = [
    {
      achieved: true,
      category: "Saúde",
      difficulty: "Fácil",
      frequency: "Diária",
      how_much_achieved: 100,
      id: 226,
      title: "Andar de bike",
      user: 80,
    },
    {
      achieved: true,
      category: "rotina",
      difficulty: "Fácil",
      frequency: "Diária",
      how_much_achieved: 100,
      id: 226,
      title: "Andar de bike",
      user: 80,
    },
  ];

  // useEffect(() => {
  //   api
  //     .post("/habits/", habit, {
  //       headers: {
  //         Authorization: `Bearer: ${token}`,
  //       },
  //     })
  //     .then((response) => {})
  //     .catch((err) => console.log(err));
  // }, [habit]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearch(!isSearch);
  };

  console.log(habit);
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
          <Popup
            name="Hábito"
            toggleSearch={toggleSearch}
            isSearch={isSearch}
            setIsSearch={setIsSearch}
            setHabit={setHabit}
          />
        </UserContainer>

        <HabitsContainer style={{ backgroundImage: `url(${background})` }}>
          <HabitsHeader>
            <Typography className="first"> Nome </Typography>
            <Typography> Categoria </Typography>
            <Typography> Frequencia </Typography>
            <Typography> Concluido </Typography>
            <Typography> Excluir </Typography>
          </HabitsHeader>
          {UserHabits.map((habit, index) => (
            <HabitsCard key={index} habit={habit} />
          ))}
        </HabitsContainer>
      </Container>
    </>
  );
};
