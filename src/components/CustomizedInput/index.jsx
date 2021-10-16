import { InputUnstyled } from "@mui/core"
import { styled } from "@mui/system";
import React from "react"
import { Container } from "./styles";

const StyledInput = styled('input')(`
  width: 200px;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #E5E8EC;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262D;
  transition: width 300ms ease;

  &:hover {
    background: #EAEEF3;
    border-color: #E5E8EC;
  }

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`);


const CustomInput = React.forwardRef(function CustomInput (props, ref) {
    return (
        <InputUnstyled components={{ Input: StyledInput }} {...props} ref={ref}/>
    )
})

export default function CustomizedInput({label, name, register, error = "", ...rest}) {
    return (
    <Container isErrored={!!error}>
        <div>
            {label}
        </div>
        <CustomInput 
            {...rest}
            {...register(name)}
        />
        {!!error && <span>{error}</span>}
    </Container>
    )
}
