import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const UserContainer = styled.aside`
  width: 40%;
  height: auto;
  min-height: 91.5vh;
  background-color: var(--purple);
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
  padding-top: 5%;
  -webkit-box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);
  box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);
  @media screen and (min-width: 686px) {
    box-shadow: 1px 0px 5px 5px rgb(0 0 0 / 64%);
    width: 30%;
    div {
      width: 100%;
    }
  }
  h3 {
    padding: 10px;
  }
  .last {
    margin-bottom: 80%;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  border-radius: 50px;
  width: 90px;
  height: 90px;
  @media screen and (min-width: 686px) {
    width: 70%;
    height: 40%;
  }
`;

export const GroupContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-size: conten;
  background-position: center;
  @media screen and (min-width: 686px) {
    width: 70%;
  }
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: var(--black);
  font-size: 18px;
  padding: 0.5rem;
  border: none;
  color: var(--purple);
  transition: all 0.2s ease-ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: var(--white);
    color: var(--purple);
    transition: all 0.3s ease-ease-in-out;
  }
  @media screen and (min-width: 686px) {
    padding: 1rem;
  }
`;
