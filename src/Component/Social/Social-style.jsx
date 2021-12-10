import styled from "styled-components";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub";
import Email from "@material-ui/icons/Email";

export const Container = styled.div`
    min-height: 50vh;
    background-color: ${({night}) => night ? "rgb(31,41,55)" : "white"};
    padding: 1rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({night}) => night ? "white" : "black"};
    @media(max-width: 600px){
        padding: 1rem 2rem;
    }
`
export const H1 = styled.h1`
    font-weight: lighter;
    margin: .5rem;
    text-align: center;
`
export const P = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: .5rem 0;
    text-align: center;
`
export const SocialContainer = styled.div`
    width: 32rem;
    display: flex;
    justify-content: space-between;
    @media(max-width: 600px){
        width: 20rem;
    }
    
`
export const SocialOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media(max-width: 800px){
        flex-direction: row;
        flex-wrap: wrap;
        margin: 1rem;
    }
`
export const Horizontal = styled.div`
    border-right: ${({night}) => night ? "1px solid white" : "1px solid black" };
    @media(max-width: 800px){
        display: none;
    }
`
export const Twitte = styled.button`
    padding: .7rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 1.4rem;
    background-color: rgb(236,72,153);
    margin: .5rem 0;
    display: flex;
    align-items: center;
    font-size: 1rem;
    justify-content: space-between;
    color: white;
    cursor: pointer;
    @media(max-width: 600px){
        margin: .3rem 0;
    }
`
export const Gith = styled(Twitte)`
    background-color: ${({night}) => night ? "white" : "black"};
    color: ${({night}) => night ? "black" : "white"};
`
export const Instag = styled(Gith)`
    background-color: rgb(59,130,246);
    color: white;
    @media(max-width: 600px){
        padding: .7rem 2rem;
    }
`
export const Ema = styled(Twitte)`
    background-color: rgb(168,85,247);
    color: white;
    @media(min-width: 800px){
        display: none;
    }
    @media(max-width: 600px){
        padding: .7rem 2rem;
    }
`
export const SocialTwo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    @media(max-width: 800px){
        display: none;
    }
`
export const H3 = styled.h3`
    font-weight: bold;
`
export const PP = styled.p`
`
export const Compose = styled.button`
    padding: .4rem 1rem;
    background-color: rgb(168,85,247);
    border: none;
    outline: none;
    border-radius:.3rem;
    display: flex;
    align-items: flex-start;
    font-size: 1.1rem;
    color: white;
    margin-top: .5rem;
    cursor: pointer;
`
export const Twitt = styled(Twitter)`
    font-size: 2rem;
    margin-right: 1rem;
 `
 
 export const Insta = styled(Instagram)`
    font-size: 2rem;
    margin-right: .5rem;
    @media(max-width: 800px){
        margin-right: 1rem;
    }
 `
 
 export const Git = styled(GitHub)`
    font-size: 2rem;
    margin-right: 1.5rem;
 `
 
 export const Emai = styled(Email)`
    font-size: 2rem;
    margin-right: 1rem;
 `
export const A = styled.a`
    text-decoration: none;
` 