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
  }
  h3 {
    padding: 10px;
  }
  .last {
    margin-bottom: 80%;
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

export const HabitsHeader = styled.div`
  display: none;

  @media screen and (min-width: 686px) {
    height: 7%;
    width: 100%;
    background: var(--purple);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 8px 0px 5px 5px rgb(0 0 0 / 64%);

    /* border-bottom: 1px solid var(--black); */
    .first {
      margin: 0 11% 0 8%;
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

// export const Button = styled.button`
//   border-radius: 8px;
//   background-color: var(--white);
//   font-size: 18px;
//   padding: 1rem;
//   margin: 8% 15%;
//   border: none;
//   color: var(--black);
//   transition: all 0.2s ease-ease-in-out;

//   &:hover {
//     background-color: var(--black);
//     color: var(--purple);
//     transition: all 0.2s ease-ease-in-out;
//   }
//   @media screen and (min-width: 686px) {
//     margin: 8% 15% 5% 15%;
//     padding: 18px 36px;
//   }
// `;
