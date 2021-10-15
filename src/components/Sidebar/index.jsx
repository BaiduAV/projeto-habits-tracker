import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./styles";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/mainPage" onClick={toggle}>
            Main Page
          </SidebarLink>
          <SidebarLink to="/perfil" onClick={toggle}>
            Perfil
          </SidebarLink>
          <SidebarLink to="/group" onClick={toggle}>
            Group
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/" onClick={toggle}>
            Sign out
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
