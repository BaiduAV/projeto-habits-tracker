import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Popup } from "../../components/PopUpMain";
import { Sidebar } from "../../components/Sidebar";
import { Container, UserContainer, GroupContainer, Image } from "./styles";
import background from "../../assets/signup.svg";

export const Group = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [setHabit] = useState();

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
            name="Grupo"
            toggleSearch={toggleSearch}
            isSearch={isSearch}
            setIsSearch={setIsSearch}
            setHabit={setHabit}
          />
        </UserContainer>
        <GroupContainer
          style={{ backgroundImage: `url(${background})` }}
        ></GroupContainer>
      </Container>
    </>
  );
};
