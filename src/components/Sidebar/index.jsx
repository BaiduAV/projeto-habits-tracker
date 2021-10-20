import React from "react";
import { useUser } from "../../providers/User";
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
  const { userLogoff } = useUser();

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/Pagina Principal" onClick={toggle}>
            Main Page
          </SidebarLink>
          <SidebarLink to="/group" onClick={toggle}>
            Meus Grupos
          </SidebarLink>
          <SidebarLink to="/discover" onClick={toggle}>
            Descubra Grupos
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/" onClick={userLogoff}>
            Deslogar
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
