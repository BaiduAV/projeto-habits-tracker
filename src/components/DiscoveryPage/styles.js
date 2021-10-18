import styled from "styled-components";
import { Button, Card } from "@mui/material";

export const Header = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 35px;
`;

export const SearchButton = styled(Button)`
  background-color: red;
  padding: 10px 20px;
  border-radius: 5%;
  outline: none;
`;

export const PagesButton = styled(Button)`
  padding: 10px 20px;
  border-radius: 5%;
  outline: none;
`;

export const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Results = styled(Card)`
  width: 520px;
  height: 115px;
  padding: 10px 35px;
  border-radius: 5%;
  margin-left: 20px;
  margin-bottom: 10px;

  @keyframes presentation1 {
    from {
      transform: translateX(-2000px);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes presentation2 {
    from {
      transform: translateX(2000px);
    }
    to {
      transform: translateX(0);
    }
  }

  &:nth-child(2n) {
    animation-name: presentation1;
    animation-duration: 2s;
    background-color: var(--purple);
    color: white;
  }

  &:nth-child(2n - 1) {
    animation-name: presentation2;
    animation-duration: 2s;
    background-color: var(--black);
    color: antiquewhite;
  }
`;
