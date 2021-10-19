import { useEffect, useState } from "react";
import { TextField, Typography, CardContent } from "@mui/material";
import { toast } from "react-toastify";
import api from "../../services/api";
import {
  Header,
  Results,
  SearchButton,
  SearchResults,
  PagesButton,
} from "./styles";

const DiscoveryPage = () => {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setPage] = useState(1);

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
      {searchResults.length === 0 &&
        hasSearched &&
        toast.error("Sua pesquisa não retornou resultados")}
      <Header>
        <div>
          <TextField
            type="search"
            label="Buscar Grupos"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <SearchButton variant="contained" onClick={searchGroups}>
            BUSCAR
          </SearchButton>
        </div>
      </Header>
      <section>
        {searchResults.length > 0 && (
          <SearchResults>
            {searchResults.map((group, index) => {
              return (
                <Results key={index}>
                  <CardContent>
                    <Typography>{group.name}</Typography>
                    <Typography>Criador: {group.creator.username}</Typography>
                    <Typography>
                      {group.users_on_group.length} Membro(s)
                    </Typography>
                  </CardContent>
                </Results>
              );
            })}
          </SearchResults>
        )}
        {page > 1 && (
          <PagesButton onClick={previousPage}>PÁGINA ANTERIOR</PagesButton>
        )}
        <PagesButton onClick={nextPage}>PRÓXIMA PÁGINA</PagesButton>
      </section>
    </>
  );
};

export default DiscoveryPage;
