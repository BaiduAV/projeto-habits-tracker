import { useForm } from "react-hook-form";
import CustomButton from "../../components/Button"
import CustomizedInput from "../../components/CustomizedInput";
import api from "../../services/api";
import { MainContainer, ContainerTitle, ButtonContainer} from "./styles";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { useUser } from "../../providers/User";


export const Login = () => {

  const { userLogin } = useUser()

  const history = useHistory();

  const { register, handleSubmit, formState: {errors} } = useForm();

  const handleForm = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
          const { access } = response.data;
          userLogin(access);
          toast.success("Sucesso ao logar!")
          return history.push("/mainPage")
      })
      .catch((err) => toast.error("Verifique as suas credenciais e tente novamente"));
  }

  return (
    <MainContainer>
      <ContainerTitle>
        <h3>Login</h3>
      </ContainerTitle>
      <form onSubmit={handleSubmit(handleForm)}>
        <ButtonContainer>
          <CustomButton type="submit" />
        </ButtonContainer>
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
      </form>
    </MainContainer>
  )
};
