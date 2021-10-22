import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomizedInput from "../../components/CustomizedInput";
import {
  ButtonContainer,
  ContainerTitle,
  MainContainer,
  ImageContainer,
  Container,
  FormContainer,
} from "./styles";
import CustomButton from "../../components/Button";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import api from "../../services/api";
import background from "../../assets/signup.svg";

export const Signup = () => {

  const history = useHistory();

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = ({username, email, password}) => {
    const user = { username, password, email}
    api
      .post("/users/", user)
      .then((response) => {
          toast.success("Conta criada com sucesso!")
          return history.push("/login")
      })
      .catch((err) => toast.error("Erro ao cadastrar, verifique novamente!"))
  };

  return (
    <MainContainer>
      <ImageContainer style={{ backgroundImage: `url(${background})` }} />
      <Container>
        <ContainerTitle>
          <h3>Signup</h3>
        </ContainerTitle>
        <FormContainer onSubmit={handleSubmit(handleForm)}>
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
            type="password"
            label="Senha"
            placeholder="Senha"
            name="password"
            error={errors.password?.message}
            register={register}
          />
          <CustomizedInput
            type="password"
            label="Confirme a senha"
            placeholder="Confirme a senha"
            name="confirmPassword"
            error={errors.confirmPassword?.message}
            register={register}
          />
          <ButtonContainer>
            <CustomButton type="submit" />
          </ButtonContainer>
        </FormContainer>
      </Container>
    </MainContainer>
  );
};
