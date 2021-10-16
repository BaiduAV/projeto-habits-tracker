import styled from "styled-components";

export const MainContainer = styled.div`
    background: var(--black);
    width: 100vw;
    height: 100vh;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    }
    
`

export const ContainerTitle = styled.div`
    color: var(--white);
    position: relative;
    top: 1.5rem;
    left: 2.2rem;
    
    h3 {
        width: fit-content;
        font-size: 18pt;
    }
`

export const ButtonContainer = styled.div`
    position:relative;
    left: 5rem;
    margin-bottom: 0.5rem;
`