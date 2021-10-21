import { Button, CreatePopup, ContainerBtn } from "./styles";
import { useForm } from "react-hook-form";
import CustomizedInput from "../CustomizedInput";

export const Popup = ({ name, toggleSearch, isSearch, setHabit }) => {
  const { register, handleSubmit } = useForm();

  const handleForm = (data) => {
    const { name, frequency, difficulty, category } = data;
    setHabit({
      title: name,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      achieved: false,
      how_much_achieved: 0,
      user: "user_id", //depende da api
    });
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
          name="name"
          register={register}
        />
        <CustomizedInput
          placeholder="Categoria"
          title="Categoria"
          name="category"
          register={register}
        />
        <CustomizedInput
          placeholder="Dificuldade"
          title="Dificuldade"
          name="difficulty"
          register={register}
        />
        <CustomizedInput
          placeholder="Frequência"
          title="Frequência"
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
