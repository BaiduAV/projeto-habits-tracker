import { CardActions, IconButton, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import {
  Results,
  SearchResults,
  Container,
  CardContainer,
  Hidden,
} from "./styles";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const DiscoveryPage = ({ searchResults, hasSearched, text, setText }) => {
  const history = useHistory();

  const seeDetails = (id) => {
    history.push(`/groupData/${id}`);
  };

  return (
    <>
      <Container>
        {searchResults.length > 0 && (
          <SearchResults>
            {searchResults.map((group, index) => {
              return (
                <Results key={index}>
                  <CardContainer>
                    <Typography>{group.name}</Typography>
                    <Hidden>Criador: {group.creator.username}</Hidden>
                    <Hidden> {group.users_on_group.length} Membro(s)</Hidden>
                  </CardContainer>
                  <CardActions>
                    <IconButton
                      sx={{ color: "#FFF" }}
                      onClick={() => seeDetails(group.id)}
                    >
                      <ArrowForwardIosRoundedIcon />
                    </IconButton>
                  </CardActions>
                </Results>
              );
            })}
          </SearchResults>
        )}
      </Container>
    </>
  );
};

export default DiscoveryPage;
