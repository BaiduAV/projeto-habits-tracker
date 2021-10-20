import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomizedInput from "../../components/CustomizedInput";
import { ButtonContainer, ContainerTitle, MainContainer } from "./styles";
import CustomButton from "../../components/Button";
import api from "../../services/api";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

export const Signup = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido!").required("Campo obrigatório"),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email")], "Emails não coincidem")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo Obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não coincidem")
      .required("Campo obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = ({username, email, password}) => {
    const user = {username, email, password}
    console.log(user)
    api
      .post("/users/", user)
      .then((response) => {
          toast.success("Conta criada com sucesso!");
          return history.push("/login");
      })
      .catch((err) => {
          toast.error("Erro ao criar a conta! Verifique suas credenciais e tente novamente.")
      });
  };

  return (
    <MainContainer>
      <ContainerTitle>
        <h3>Signup</h3>
      </ContainerTitle>
      <form onSubmit={handleSubmit(handleForm)}>
          <ButtonContainer>
            <CustomButton type="submit"/>
          </ButtonContainer>
          <CustomizedInput
            label="Nome"
            placeholder="Nome"
            name="username"
            error={errors.username?.message}
            register={register}
          />
          <CustomizedInput
            label="Email"
            placeholder="Email"
            name="email"
            error={errors.email?.message}
            register={register}
          />
          <CustomizedInput
            label="Confirme o email"
            placeholder="Confirme o email"
            name="confirmEmail"
            error={errors.confirmEmail?.message}
            register={register}
          />
          <CustomizedInput
            label="Senha"
            placeholder="Senha"
            name="password"
            error={errors.password?.message}
            register={register}
          />
          <CustomizedInput
            label="Confirme a senha"
            placeholder="Confirme a senha"
            name="confirmPassword"
            error={errors.confirmPassword?.message}
            register={register}
          />
      </form>
    </MainContainer>
  );
};
