import styled from "styled-components";
import ImgFooter0 from "../../assets/ImgFooter0.svg";
import readabook2 from "../../assets/readabook2.png";
import sharedGoals from "../../assets/sharedGoals.svg";

export const AboutAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: var(--darkpurple);
  padding: 1rem;

  h1 {
    text-align: center;
    color: var(--white);
    font-weight: 900;
    font-size: 38px;
    margin-top: 4rem;
  }

  p {
    margin-top: 30px;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: var(--white);
    width: 90vw;
  }
`;

export const Background = styled.div`
  padding: 3px;
  border-radius: 20px;
  margin-top: 70px;
  margin-bottom: 40px;
  @media screen and (min-width: 600px) {
    flex: 1;
    background: url(${ImgFooter0}) no-repeat center, var(--darkpurple);
    background-size: contain;
  }
`;

////

export const AboutBenefitsContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const ContentSecond = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding: 1rem;

  h1 {
    text-align: left;
    color: var(--black);
    font-weight: 900;
    font-size: 42px;
  }
  p {
    margin-top: 30px;
    font-size: 25px;
    line-height: 32px;
    text-align: left;
  }
`;

export const BackgroundSecond = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${readabook2}) no-repeat center, var(--white);
    background-size: contain;
  }
`;

////

export const AboutGoodNight = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: blueviolet;
  h1 {
    text-align: left;
    color: var(--black);
    font-weight: 900;
    font-size: 42px;

    margin-right: 30px;
  }
  p {
    margin-right: 30px;
    margin-top: 20px;
    font-size: 25px;
    line-height: 32px;
    text-align: left;
  }
`;

export const ContentThird = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const BackgroundThird = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${sharedGoals}) no-repeat center, blueviolet;
    background-size: contain;
  }
`;

/////

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: var(--gray);
  padding: 1rem;

  h1 {
    text-align: center;
    color: var(--white);
    font-weight: 900;
    font-size: 38px;
    margin-top: 4rem;
  }

  p {
    margin-top: 30px;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: var(--white);
    width: 90vw;
  }

  span{
    flex-direction: row;
    align-items:center;
    justify-content: center;
    max-width: 340px
  }
`;


export const Image = styled.img`
  
  background: var(--gray);
  background-size: contain;
  background-repeat: no-repeat;
  height: 5rem;
  margin: 0 100%;
  margin: 0;
  @media screen and (min-width: 600px) {
    margin: 0;
  }
`;
