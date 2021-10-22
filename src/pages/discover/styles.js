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
  justify-content: flex-start;
  align-items: center;
  padding-top: 5%;
  -webkit-box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);
  box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);
  @media screen and (min-width: 686px) {
    box-shadow: 1px 0px 5px 5px rgb(0 0 0 / 64%);
    width: 30%;
  }
  h3 {
    padding: 10px;
  }
  .last {
    margin-bottom: 80%;
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

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin button {
    font-size: 12px;
    margin-top: 10px;
  }

  @media screen and (min-width: 686px) {
    margin: 0.5rem;
    flex-direction: row;
  }
`;

export const Header = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: var(--black);
  font-size: 18px;
  padding: 0.5rem;
  margin: 0.5rem;
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
