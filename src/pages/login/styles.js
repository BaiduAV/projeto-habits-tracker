import styled from "styled-components";

export const MainContainer = styled.div`
  background: var(--black);
  width: 100vw;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
  @media screen and (min-width: 600px) {
    display: flex;

    form {
      margin: 2rem;
    }
  }
`;

export const ContainerTitle = styled.div`
  color: var(--white);
  position: relative;
  width: fit-content;
  top: 1.5rem;
  left: 2.2rem;

  h3 {
    font-size: 18pt;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  left: 5rem;
  margin-bottom: 0.5rem;
`;

export const ImageContainer = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: block;
    width: 70vw;
    heigth: 90vh;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 95vh;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    width: 30vw;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
