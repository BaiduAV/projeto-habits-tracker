import styled from "styled-components";

export const MyHabits = styled.li`
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  height: auto;
  width: 90%;
  background-color: var(--purple);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  -webkit-box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);
  box-shadow: 1px 6px 18px 0px rgba(0, 0, 0, 0.64);

  &:hover {
    filter: brightness(0.8);
    height: calc(auto + 1vh);
  }

  @media screen and (min-width: 686px) {
    flex-direction: row;
  }
`;
