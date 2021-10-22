import React from "react";
import { FaBars } from "react-icons/fa";
import { useUser } from "../../providers/User";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
} from "./styles";

export const Navbar = ({ toggle }) => {
  const { userLogoff } = useUser();

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/mainPage">Kenzie Tracker</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/mainPage">Página Principal</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/group">Meus Grupos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/discover">Descubra Grupos</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/" onClick={userLogoff}>
              Deslogar
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
