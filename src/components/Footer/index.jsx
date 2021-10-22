import profileavatar from "../../assets/profile_avatar.svg";


import {
  AboutAppContainer,
  Background,
  AboutBenefitsContainer,
  ContentSecond,
  BackgroundSecond,
  AboutGoodNight,
  ContentThird,
  BackgroundThird,
  AboutUsContainer,
  ImageContainer,
  Image,
} from "./styles";

export const Footer = () => {
  return (
    <>
      <AboutAppContainer>
        <h1>Como funciona?</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Background />
      </AboutAppContainer>
      <AboutBenefitsContainer>
        <ContentSecond>
          <h1>Mantenha corpo e mente saudáveis</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium. Sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </ContentSecond>
        <BackgroundSecond />
      </AboutBenefitsContainer>
      <AboutGoodNight>
        <BackgroundThird />
        <ContentThird>
          <h1>Aproximando as pessoas</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </ContentThird>
      </AboutGoodNight>
      <AboutUsContainer>
        <h1>Sobre Nós</h1>
        <p>
          Somos um grupo de jovens desenvolvedores que acredita no uso da
          tecnologia como veículo de mudança e de impacto positivo na vida de
          todas as pessoas.
        </p>
        <p>
          Pequenas mudanças farão você se sentir muito melhor, e o Habitare
          nasce com o intuito de te levar motivação para a maior conquista de
          todas: ter uma vida mais feliz, saudável e produtiva!
        </p>
        <span>
{/* 
          <Image src={profileavatar} alt="profile2" />
          <Image src={profileavatar} alt="profile2" />
          <Image src={profileavatar} alt="profile2" />
          <Image src={profileavatar} alt="profile2" /> */}
        </span>
      </AboutUsContainer>
    </>
  );
};
