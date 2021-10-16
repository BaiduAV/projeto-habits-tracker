import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomizedInput from "../../components/CustomizedInput";
import { ButtonContainer, ContainerTitle, MainContainer } from "./styles";
import { Button } from "@mui/material";

export const Signup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
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

  const handleForm = (data) => {
    console.log("done")
  };

  return (
    <MainContainer>
      <ContainerTitle>
        <h3>Signup</h3>
      </ContainerTitle>
      <form onSubmit={handleSubmit(handleForm)}>
          <ButtonContainer>
            <Button 
              type="submit"
              variant="contained"
            >
                Signup
            </Button>
          </ButtonContainer>
          <CustomizedInput
            label="Nome"
            placeholder="Nome"
            name="name"
            error={errors.name?.message}
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
