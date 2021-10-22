import { useForm } from "react-hook-form";
import CustomButton from "../../components/Button";
import CustomizedInput from "../../components/CustomizedInput";
import { MainContainer, ContainerTitle, ButtonContainer } from "./styles";
import { useHistory } from "react-router";
import { useUser } from "../../providers/User";

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
      <ContainerTitle>
        <h3>Login</h3>
      </ContainerTitle>
      <form onSubmit={handleSubmit(handleForm)}>
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
        <ButtonContainer>
          <CustomButton type="submit" />
        </ButtonContainer>
      </form>
    </MainContainer>
  );
};
