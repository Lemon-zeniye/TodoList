import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${({night}) => night ? "rgb(17,24,39)" : "white"} ;
    color: ${({night}) => night ? "white" : "black"};
    padding-top: 1rem;
    position: relative;
`

export const H1 = styled.h1`
    font-weight: lighter;
    text-align: center;
    padding: 1rem;
`
export const P = styled.p`
    margin: 1rem;
    font-family: cursive;
    text-align: center;
    font-size: 1.2rem;
`
export const C = styled.div`
    background-color: red;
`

export const WorkContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 1rem;
    z-index: -2;
`
export const Card = styled.div`
    width: 32rem;
    height: 17rem;
    margin: 1rem;
    object-fit: cover;
    position: relative;
    opacity: 1;
    @media(max-width: 600px){
        width: 21rem;
        height: 12rem;
    }

`
export const Card1 = styled.div`
    width: 32rem;
    height: 17rem;
    background: linear-gradient(to bottom, white, #4d4d4d, black);
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    opacity: .6;
    @media(max-width: 600px){
        width: 21rem;
        height: 12rem;
    }

`

export const Img = styled.img`
    object-fit: cover;
    width: 32rem;
    height: 17rem;
    border-radius: .2rem;
    z-index: -5;
    @media(max-width: 600px){
        width: 21rem;
        height: 12rem;
    }
    
`
export const DiscContainer = styled.div`
    position: absolute;
    bottom: 1rem;
    margin-left: 2.2rem;
    width: 28rem;
    color: white;
    opacity: 1;
    z-index: 10;
    @media(max-width: 600px){
        width: 20rem;
        margin-left: .3rem;
    }
`
export const Title = styled.h3`
    font-size: 1.4rem;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`
export const Desc = styled.p`
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    font-size: 1.1rem;
    margin: .3rem 0;


`
export const Button = styled.button`
    padding: .45rem;
    display: block;
    background-color: rgb(147,51,234);
    color: white;
    border: none;
    border-radius: .5rem;
    font-family: serif;
    font-size: 1.2rem;
    width: 100%;
    outline: none;
    cursor: pointer;
    opacity: 1;
    font-family: inherit;
`
