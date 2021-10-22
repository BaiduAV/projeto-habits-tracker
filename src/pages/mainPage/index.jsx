import { useEffect, useState } from "react";
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
import { useHabits } from "../../providers/Habits";

export const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const { loadHabits, habits } = useHabits();

  useEffect(() => {
    loadHabits()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [habits])

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearch(!isSearch);
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
          <Popup
            name="Hábito"
            toggleSearch={toggleSearch}
            isSearch={isSearch}
            setIsSearch={setIsSearch}

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
          {habits.map((habit, index) => (
            <HabitsCard key={index} habit={habit} />
          ))}
        </HabitsContainer>
      </Container>
    </>
  );
};
