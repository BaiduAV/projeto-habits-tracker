import { useHistory } from "react-router";
import logo from "../../assets/intro.png";
import {
  Container,
  Logo,
  Button,
  ImageContainer,
  TextContainer,
  Image,
} from "./styles";

export const Intro = () => {
  const history = useHistory();

  const HandleLogin = () => {
    history.push("/login");
  };

  const HandleSignUP = () => {
    history.push("/signup");
  };

  return (
    <Container>
      <TextContainer>
        <Logo>Kenzie Tracker</Logo>
        <div className="login">
          <Button
            onClick={() => HandleLogin()}
            color="var(--white)"
            background="var(--purple)"
            variant="contained"
          >
            Login
          </Button>
        </div>
        <div className="signup">
          <Button
            onClick={() => HandleSignUP()}
            color="var(--purple)"
            background="var(--white)"
            variant="outlined"
          >
            Sign Up
          </Button>
        </div>
      </TextContainer>
      <ImageContainer>
        <Image src={logo} alt="logo" />
      </ImageContainer>
    </Container>
  );
};
