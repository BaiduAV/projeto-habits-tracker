import styled from "styled-components";
import { Card, Typography, CardContent } from "@mui/material";

export const Container = styled.section`
  width: 70%;
`;

export const CardContainer = styled(CardContent)``;

export const SearchResults = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 686px) {
    width: 100%;
    flex-direction: row;
  }
`;

export const Results = styled(Card)`
  margin: 2% 0.5% 0.5% 0.5%;
  width: 90%;
  height: auto;
  border-radius: 5%;
  display: flex;
  align-items: center;

  @media screen and (min-width: 686px) {
    box-shadow: 1px 0px 5px 5px rgb(0 0 0 / 64%);
    width: 40%;
    height: 100px;
    flex-direction: column;
  }

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
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:nth-child(2n - 1) {
    animation-name: presentation2;
    animation-duration: 2s;
    background-color: var(--black);
    color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Hidden = styled(Typography)`
  display: none;
  @media screen and (min-width: 686px) {
    display: block;
  }
`;
