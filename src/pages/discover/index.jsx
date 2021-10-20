import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import DiscoveryPage from "../../components/DiscoveryPage";
import {
  UserContainer,
  Container,
  Image,
  Header,
  Button,
  BtnContainer,
} from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { TextField } from "@mui/material";

export const Discover = () => {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const searchGroups = () => {
    api
      .get(`/groups/?search=${text}`)
      .then((response) => {
        setSearchResults(response.data.results);
        setHasSearched(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .get(`/groups/?page=${page}`)
      .then((r) => setSearchResults(r.data.results))
      .catch((err) => console.log(err));
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Container>
        <UserContainer>
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="person"
          />
          <h3>Nome</h3>

          {searchResults.length === 0 &&
            hasSearched &&
            toast.error("Sua pesquisa não retornou resultados")}
          <Header>
            <TextField
              type="search"
              label="Buscar Grupos"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Header>
          <Button variant="contained" onClick={searchGroups}>
            BUSCAR
          </Button>
          <BtnContainer>
            {page > 1 && (
              <Button onClick={previousPage}>PÁGINA ANTERIOR</Button>
            )}
            <Button onClick={nextPage}>PRÓXIMA PÁGINA</Button>
          </BtnContainer>
        </UserContainer>
        <DiscoveryPage
          searchResults={searchResults}
          hasSearched={hasSearched}
          text={text}
          setText={setText}
        />
      </Container>
    </>
  );
};
