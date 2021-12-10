import styled from "styled-components";
import Star from "@material-ui/icons/Star";
import StarHalf from "@material-ui/icons/StarHalf";
import StarOutline from "@material-ui/icons/StarOutline";

export const Container = styled.div`
    min-height: 40vh;
    background-color: ${({night}) => night ? "rgb(17,24,39)" : "white"};
    color: ${({night}) => night ? "lightgray" : "black"};
    padding: 1rem 4rem;
    @media(max-width: 600px){
        padding: 1rem 2rem;
    }

`
export const H1 = styled.h1`
    font-weight: lighter;
    text-align: center;
    padding-top: 1rem;
`
export const P = styled.p`
    text-align: center;
    margin-top: 1rem;
    font-size: 1.13rem;
`
export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 2rem 1rem;
    flex-wrap: wrap;

`
export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    width: 5rem;
    align-items: center;
    margin: .5rem 2rem;
    @media(max-width:  600px){
        width: 4rem;
    }
`
export const H2 = styled.h2`
    margin-top: .5rem;
    font-weight: lighter;
    width: 6.5rem;
    font-size: 1.4rem;
    text-align: center;
    @media(max-width:  600px){
        width: 4rem;
        font-size: 1rem;
    }
`
export const StarContainer = styled.div`
    width: 6.5rem;
    margin: .5rem 0;
    @media(max-width:  600px){
        width: 5rem;
    }
`
export const Sta = styled(Star)`
    &&{
        color: rgb(249,115,22);
        font-size: 1.3rem;
        @media(max-width:  600px){
            font-size: 1rem;
        }
    }
`
export const HalfStar = styled(StarHalf)`
    && {
        font-size: 1.3rem;
        color: rgb(249,115,22);
        @media(max-width:  600px){
            font-size: 1rem;
        }
    }
`
export const OutlineStar = styled(StarOutline)`
    &&{
        font-size: 1.3rem;
        color: rgb(249,115,22);
        @media(max-width:  600px){
            font-size: 1rem;
        }
    }
`

