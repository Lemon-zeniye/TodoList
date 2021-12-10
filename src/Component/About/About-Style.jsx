import styled from "styled-components";
export const AboutContainer = styled.div`
    min-height: 50vh;
    background-color: rgb(168,85,247);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div`
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    @media(max-width: 1000px){
        width: 70%;
        font-size: 14px;
    };
    @media(max-width:  600px){
            width: 90%;
            padding: 1rem;
        }
`
export const H1 = styled.h1`
    margin-bottom: 1rem;
    font-weight: bold;
`
export const Dis = styled.p`
    line-height: 1.5;
    font-family: cursive;
    font-size: 1.1rem;
    font-weight: lighter;
    @media(max-width: 1000px){
        font-size: 1rem;
    }
`