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
              <NavLinks to="/mainPage">Main Page</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/perfil">Perfil</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/group">Group</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink 
              to="/"
              onClick={userLogoff}
            >
              Sign out
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
