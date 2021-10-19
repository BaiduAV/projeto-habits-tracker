import { useForm } from "react-hook-form";
import CustomButton from "../../components/Button"
import CustomizedInput from "../../components/CustomizedInput";
import api from "../../services/api";
import { MainContainer, ContainerTitle, ButtonContainer} from "./styles";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { useHistory } from "react-router";


export const Login = () => {

  const history = useHistory();

  const { register, handleSubmit, formState: {errors} } = useForm();

  const handleForm = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
          const { access } = response.data;
          localStorage.setItem(`@Tracker:Token`, JSON.stringify(access));
          const userID = jwt_decode(access).user_id;
          localStorage.setItem(`@Tracker:User`, JSON.stringify(userID));
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
