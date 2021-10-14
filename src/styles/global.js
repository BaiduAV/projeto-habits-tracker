import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
        font-family: "Encode Sans Expanded", sans-serif;
    }
    button{
        cursor:pointer;
    }
    :root {
        --white:#f5f5f5;
        --black: #0c0d0d;
        --softblack: #232a34;
        --gray: #666360;
    }`;
