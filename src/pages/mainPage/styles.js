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
  justify-content: space-evenly;
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

export const HabitsContainer = styled.ul`
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

export const HabitsHeader = styled.div`
  display: none;

  @media screen and (min-width: 686px) {
    height: 7%;
    width: 100%;
    background-color: var(--purple);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 9px 2px 5px 5px rgb(0 0 0 / 64%);

    .first {
      margin: 0 8% 0 4%;
    }
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
