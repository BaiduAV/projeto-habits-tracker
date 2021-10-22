import { Button, CreatePopup, ContainerBtn } from "./styles";
import { useForm } from "react-hook-form";
import CustomizedInput from "../CustomizedInput";
import { useHabits } from "../../providers/Habits";

export const Popup = ({ name, toggleSearch, isSearch }) => {
  const { register, handleSubmit } = useForm();

  const { createHabit } = useHabits();

  const handleForm = (data) => {
    createHabit(data);
    toggleSearch();
  };

  return (
    <>
      <CreatePopup
        onSubmit={handleSubmit(handleForm)}
        search={isSearch}
        toggle={toggleSearch}
      >
        <h2>Criar {name}</h2>
        <CustomizedInput
          placeholder="Nome"
          title="Nome"
          name="title"
          register={register}
        />
        <CustomizedInput
          placeholder="Categoria"
          title="Categoria"
          name="category"
          register={register}
        />
        <CustomizedInput
          placeholder="Dificuldadeoria"
          title="Dificuldade"
          name="difficulty"
          register={register}
        />
        <CustomizedInput
          placeholder="Frequencia"
          title="Frequencia"
          name="frequency"
          register={register}
        />

        <ContainerBtn>
          <Button type="submit">Criar</Button>
          <Button onClick={() => toggleSearch()}>Voltar</Button>
        </ContainerBtn>
      </CreatePopup>
      <Button onClick={() => toggleSearch()}>Novo {name}</Button>
    </>
  );
};
