import { useForm } from "react-hook-form";
import CustomButton from "../../components/Button";
import CustomizedInput from "../../components/CustomizedInput";
import {
  MainContainer,
  ContainerTitle,
  ButtonContainer,
  ImageContainer,
  Container,
  FormContainer,
} from "./styles";
import { useHistory } from "react-router";
import { useUser } from "../../providers/User";
import background from "../../assets/signup.svg";

export const Login = () => {
  const { userLogin } = useUser();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    userLogin(data);
    return history.push("/mainPage");
  };

  return (
    <MainContainer>
      <Container>
        <ContainerTitle>
          <h3>Login</h3>
        </ContainerTitle>
        <FormContainer>
          <form onSubmit={handleSubmit(handleForm)}>
            <ButtonContainer></ButtonContainer>
            <CustomizedInput
              label="Nome"
              placeholder="Nome"
              name="username"
              error={errors.username?.message}
              register={register}
            />
            <CustomizedInput
              label="Senha"
              placeholder="Senha"
              name="password"
              error={errors.password?.message}
              register={register}
            />
            <CustomButton type="submit" />
          </form>
        </FormContainer>
      </Container>
      <ImageContainer
        style={{ backgroundImage: `url(${background})` }}
      ></ImageContainer>
    </MainContainer>
  );
};
