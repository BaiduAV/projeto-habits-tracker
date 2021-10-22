import { useForm } from "react-hook-form";
import CustomButton from "../../components/Button";
import CustomizedInput from "../../components/CustomizedInput";
import { MainContainer, ContainerTitle, ButtonContainer} from "./styles";
import { useUser } from "../../providers/User";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";


export const Login = () => {

  const history = useHistory();

  const { userLogin } = useUser();

  const { register, handleSubmit, formState: {errors} } = useForm();

  const handleForm = (data) => {
      api
        .post("/sessions/", data)
        .then((response) => {
            const { access } = response.data
            userLogin(access);
            return history.push("/mainPage")
        })
        .catch((err) => toast.error("Erro ao criar a conta! Verifique suas credenciais e tente novamente."))
  }

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
