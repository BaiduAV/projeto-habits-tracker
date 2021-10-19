import { IconButton } from "@material-ui/core";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ButtonContainer } from "./styles";

export default function CustomButton({...rest}) {
    return (
        <ButtonContainer {...rest} >
            <IconButton type="submit">
                <ArrowForwardIcon />
            </IconButton>
        </ButtonContainer>
    )
}
