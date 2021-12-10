import styled from "styled-components";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"

export const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 400;
    position: absolute;
    top: 10%;
    width: 100%;
`
export const ContainerDis = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${({active}) => active ? "rgba(31,41,55,.5)" : "black"};
    /* z-index: ${({active}) => active ? "500" :  "-100" };
    display: ${({active}) => active ? "none" : "block"}; */

    cursor: pointer;

`

export const SmallContainier = styled.div`
    background-color: ${({night}) => night ? "rgb(31,41,55)" : "white"};
    color: ${({night}) => night ? "white" : "black"};
    width: 45%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    opacity: 1;
    z-index: 1100;
    @media(max-width: 800px){
        width: 80%;
    }
`
export const Above = styled.div`
    min-height: 45vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const LeftIcon = styled(ArrowBackIos)`
    && {
        background-color: rgb(168, 85, 247);
        border-radius: 50%;
        margin-left: 1rem;
        padding: .7rem;
        padding-left: .9rem;
        width: 2.5rem;
        height: 2.5rem;
        color: white;
        cursor: pointer;
    }

`
export const RightIcon = styled(ArrowForwardIos)`
    && {
        background-color: rgb(168, 85, 247);
        border-radius: 50%;
        margin-right: 1rem;
        padding: .7rem;
        padding-left: .9rem;
        width: 2.5rem;
        height: 2.5rem;
        color: white;
        cursor: pointer;
    }
`
export const ImgContainer = styled.div`
    width: 75%;
    height: 40vh;
    object-fit: cover;
    position: relative;
`
export const Img = styled.img`
    height: 40vh;
    width: 100%;
    position: absolute; 
    border-radius: .3rem;   
`
export const DotContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 1rem;
    left: 40%;
`
export const Dot = styled.div`
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    background-color: gray;
    opacity: .8;
    margin: .3rem;
`

export const Bellow = styled.div`
    min-height: 30vh;
    margin: 0 1rem;
`
export const H1 = styled.h2`
`
export const P = styled.p`
`
export const Button = styled.button`
    padding: .6rem 1rem;
    border: none;
    outline: none;
    background-color: rgb(168, 85, 247);
    margin-top: .6rem;
    font-size: 1.1rem;
    border-radius: .5rem;
    cursor: pointer;
`
export const A = styled.a`
    text-decoration: none;
`