import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: var(--black);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 686px) {
    transition: 0.8s all ease;
    height: 60px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  font-size: 24px;
  color: var(--purple);
  justify-self: flex-flex-start;
  cursor: pointer;
  font-size: 1, 5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--white);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLinks = styled(LinkR)`
  color: var(--white);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%auto;
  cursor: pointer;
  transition: all 0.2s ease-ease-in-out;

  &:hover {
    color: var(--purple);
    transition: all 0.2s ease-ease-in-out;
  }

  &.active {
    border-bottom: 3px solid var(--purple);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: var(--purple);
  white-space: nowrap;
  padding: 10px 22px;
  color: var(--black);
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--white);
    color: var(--purple);
  }
`;
