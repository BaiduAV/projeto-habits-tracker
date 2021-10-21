import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  @media screen and (min-width: 686px) {
    font-size: 1.3rem;
    line-height: 1.5;
  }
`;

export const GroupContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--purple);
  padding: 1rem;
  border-radius: 8px;
  width: 95%;
  -webkit-box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);
  box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);

  h2 {
    margin: 0.5rem;
  }
  @media screen and (min-width: 686px) {
    margin: 1rem;
    padding: 1rem;
    width: 90%;
    height: 30vh;
    font-size: 120%;
  }
`;

export const GroupDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 100%;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 686px) {
    flex-direction: row;
    height: 500px;
  }
`;

export const Members = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--purple);
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 8px;
  width: 90%;
  height: 50%;
  -webkit-box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);
  box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);
  @media screen and (min-width: 686px) {
    width: 100%;
    height: 100%;
  }
`;

export const Goals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--purple);
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 8px;
  width: 90%;
  height: 50%;
  -webkit-box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);
  box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);
  @media screen and (min-width: 686px) {
    width: 100%;
    height: 100%;
  }
`;

export const Activities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--purple);
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 8px;
  width: 90%;
  height: 50%;
  -webkit-box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);
  box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);
  @media screen and (min-width: 686px) {
    width: 100%;
    height: 100%;
  }
`;
