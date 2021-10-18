import { useState } from "react";
// import { Calendar } from "react-calendar";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import "react-calendar/dist/Calendar.css";
import background from "../../assets/MainPage.png";

import {
  UserContainer,
  HabitsContainer,
  Container,
  Image,
  Button,
  HabitsHeader,
} from "./styles";
import { HabitsCard } from "../../components/HabitsCard";
import { Typography } from "@material-ui/core";
import SimpleDialogDemo from "../../components/PopUp";

export const MainPage = () => {
  // const [value, onChange] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const UserHabits = [
    {
      achieved: true,
      category: "Sáude",
      difficulty: "Fácil",
      frequency: "Diária",
      how_much_achieved: 100,
      id: 226,
      title: "Andar de bike",
      user: 80,
    },
    {
      achieved: true,
      category: "Sáude",
      difficulty: "Fácil",
      frequency: "Diária",
      how_much_achieved: 100,
      id: 226,
      title: "Andar de bike",
      user: 80,
    },
  ];

  const toggle = () => {
    setIsOpen(!isOpen);
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
          {/* <Button>Search Habit</Button>
          <Button className="last">Criate Habit</Button> */}
          <SimpleDialogDemo name="Search Habit" />
          <SimpleDialogDemo name="Criate Habit" />
        </UserContainer>
        <HabitsContainer style={{ backgroundImage: `url(${background})` }}>
          <HabitsHeader>
            <Typography className="first"> Nome </Typography>
            <Typography> Categoria </Typography>
            <Typography> Frequencia </Typography>
            <Typography> Concluido </Typography>
          </HabitsHeader>
          {UserHabits.map((habit, index) => (
            <HabitsCard key={index} habit={habit} />
          ))}
        </HabitsContainer>

        {/* <Calendar onChange={onChange} value={value} /> */}
      </Container>
    </>
  );
};
