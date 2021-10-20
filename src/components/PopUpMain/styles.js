import styled from "styled-components";

export const CreatePopup = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 70vw;
  height: 50vh;
  background: var(--purple);
  -webkit-box-shadow: 1px 1px 18px 5px rgba(0, 0, 0, 0.64);
  box-shadow: 0px ​0px 22px 10px rgb(0 0 0 / 64%);
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ search }) => (search ? "100%" : "0")};
  top: ${({ search }) => (search ? "0" : "-100%")};
  transform: translate(20%, 50%);
  border-radius: 8px;
  label {
    font-weight: bold;
    @media screen and (min-width: 686px) {
      padding: 1rem;
    }
  }
  h2 {
    padding: 0.5rem;
    @media screen and (min-width: 686px) {
      padding: 1.5rem;
    }
  }

  @media screen and (min-width: 686px) {
    width: 30vw;
    height: 400px;
    transform: translate(120%, 50%);
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

export const ContainerBtn = styled.section`
  margin-top: 0.5rem;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  @media screen and (min-width: 686px) {
    width: 100%;
  }
`;
