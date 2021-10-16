import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  .signup {
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Logo = styled.h1`
  margin: 10% 0% 10% 10%;
  color: var(--purple);
  font-weight: bold;

  @media screen and (min-width: 600px) {
    font-size: 40px;
  }
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: ${(props) => props.background};
  padding: 18px 36px;
  font-size: 18px;
  margin: 5% 15%;
  border: none;
  color: ${(props) => props.color};
  transition: all 0.2s ease-ease-in-out;
  &:hover {
    background-color: ${(props) => props.color};
    color: ${(props) => props.background};
    transition: all 0.2s ease-ease-in-out;
  }
  @media screen and (min-width: 600px) {
    margin: 8% 30%;
  }
`;

export const TextContainer = styled.div`
  @media screen and (min-width: 600px) {
    width: 50vw;
  }
`;

export const ImageContainer = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  @media screen and (min-width: 600px) {
    width: 50vw;
    height: 100%;
  }
`;

export const Image = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  width: 80%;
  height: 80%;
  margin: 0 20%;
  @media screen and (min-width: 600px) {
    margin: 0;
  }
`;
