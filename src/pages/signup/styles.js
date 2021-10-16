import styled from "styled-components";

export const MainContainer = styled.div`
    background: var(--black);
    width: 100vw;
    height: 100vh;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
`

export const ContainerTitle = styled.div`
    color: var(--white);
    margin: 0 auto;
    
    h3 {
        padding: 1.5rem 0rem 0rem 1.5rem ;
        width: fit-content;
    }
`

export const ButtonContainer = styled.div`
    position:relative;
    left: 5rem;
`