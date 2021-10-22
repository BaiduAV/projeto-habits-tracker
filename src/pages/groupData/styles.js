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
  align-items: center;
  justify-content: space-evenly;
  padding-top: 5%;
  -webkit-box-shadow: 1px 6px 18px 0 rgba(0, 0, 0, 0.64);
  box-shadow: 1px 6px 18px 0 rgba(0, 0, 0, 0.64);
  @media screen and (min-width: 686px) {
    box-shadow: 1px 0 5px 5px rgb(0 0 0 / 64%);
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

export const GroupContent = styled.div`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CreatePopup = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 70vw;
  height: 50vw;
  background: #5712ce;
  border-radius: 5%;

  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ search }) => (search ? "100%" : "0")};
  top: ${({ search }) => (search ? "0" : "-100%")};
  transform: translate(20%, 50%);

  label {
    font-weight: bold;
  }

  @media screen and (min-width: 686px) {
    width: 50vw;
    height: 50vh;
    transform: translate(50%, 50%);
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

export const Button = styled.button`
  border-radius: 8px;
  background-color: var(--black);
  font-size: 18px;
  padding: 0.5rem;
  margin: -1rem;
  margin-bottom: 20px;
  border: none;
  color: var(--purple);
  transition: all 0.2s ease-ease-in-out;
  font-weight: bold;
  width: 107px;

  &:hover {
    background-color: var(--white);
    color: var(--purple);
    transition: all 0.3s ease-ease-in-out;
  }
  @media screen and (min-width: 686px) {
    width: 207px;
    padding: 1rem;
  }
`;
