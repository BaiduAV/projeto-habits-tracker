import styled from "styled-components";

export const Button = styled.button`
  border-radius: 8px;
  background-color: var(--white);
  font-size: 18px;
  padding: 1rem;
  margin: 8% 15%;
  border: none;
  color: var(--black);
  transition: all 0.2s ease-ease-in-out;

  &:hover {
    background-color: var(--black);
    color: var(--purple);
    transition: all 0.2s ease-ease-in-out;
  }
  @media screen and (min-width: 686px) {
    margin: 8% 15% 5% 15%;
    padding: 18px 36px;
  }
`;
