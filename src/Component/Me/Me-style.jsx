import styled from "styled-components";

export const MeContainer = styled.div`
    min-height: calc(100vh - 7rem) ;
    padding-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`
export const Span = styled.span`
    color: tomato;
`
export const H1 = styled.h1`
    color: ${({night}) => night ? "white": "black"};
    text-align: center;
    padding: 0 4rem 3rem 4rem;
    @media(max-width: 800px){
        padding: 0 2rem 2rem 2rem;
        font-size: 1.5rem;
    }
`
export const Img = styled.img`
    height: 60vh;
    @media(max-width: 800px){
        height: 40vh;
    }
`