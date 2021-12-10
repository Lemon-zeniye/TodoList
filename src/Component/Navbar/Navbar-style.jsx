import styled from "styled-components";
import WbSunny from "@material-ui/icons/WbSunny"; 
import Language from "@material-ui/icons/Language"
import NightsStay from "@material-ui/icons/NightsStay";
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";

export const Nav = styled.nav`
    display:flex;
    height: 3.5rem;
    padding: 2.5rem;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    box-shadow: ${({scroll}) => scroll ? ".5px .5px 4px gray" : ""} ;
    z-index: 1100;
    background-color: ${({night}) => night ? "rgb(17,24,39)" : "white"};
`
export  const Langua = styled(Language)`
&&{
    color: rgb(168,85,247);
    font-size: 30px;
    margin-right:1rem;
    cursor: pointer;
}
`
export const Men = styled(Menu)`
    &&{
        font-size: 3rem;
        margin-right: .4rem;
        cursor: pointer;
        display: none;
        @media (max-width : 1000px){
            display: block;
        }
    }
`

export  const Sun =  styled(WbSunny)`
&& {
    position: absolute;
    left: -4px;
    top: -4px;
    font-size: 25px;
    cursor: pointer;
    color: #a45de7;
    background-color: #c7a6e6;
    border-radius: 50%;
}    
`
export  const Moon =  styled(NightsStay)`
&&{
    position: absolute;
    right: -4px;
    top: -4px;
    font-size: 25px;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    background-color: #a45de7;
}
`
export const Clos = styled(Close)`
&&{
    position: absolute;
    z-index: 5;
    cursor: pointer;
    font-size: 3rem;
    display: ${({nav}) => nav ? "block" : "none" }
}
`
export const Night = styled.div`
    width: 2.5rem;
    height: 1rem;
    background-color: ${({night}) => night ? "#a955f768" : "#bdbcbc"} ; 
    border-radius: .4rem;
    position: relative;
`
export const H2 = styled.h2`
    color: ${({night}) => night ? "white" : "black"};
    display: flex;
    align-items: center;
   
`
export const Ul = styled.ul`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: ${({night}) => night ? "white" : "rgb(17,24,39)"};

    @media (max-width: 1000px) {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        background-color: ${({night}) => night ? "rgb(17,24,39)" : "white"} ;
        width: 100%;
        z-index: 2;
        height: 100vh;
        padding-top: 4rem;
        transform: ${({nav}) => nav ? "translateX(0)" : "translateX(-100%)" }

    }
`

export const Li = styled.li`
    list-style: none;
    padding: 1.3rem;
    cursor: pointer;
    @media(max-width: 1000px){
        display:flex;
        flex-direction: column;
        margin-left: 4rem;
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: lighter;
    }
    @media(max-width: 700px){
        margin-left: 3rem;
        margin-top: .3rem;
        font-size: 1.2rem;
    }
`
export const A = styled.a`
    text-decoration: none;
    color: inherit;
`
export const Anc = styled.a`
    text-decoration: none;
    color: ${({night}) => night ? "black": "white"};
`
export const B = styled.span`
    color: rgb(168,85,247);
    border-top : 1px solid rgb(168,85,247);
    @media(max-width: 800px){
        font-size: 2rem;
        font-weight: lighter;
    }
`
export const C = styled.span`
    color: inherit;
`
export const Button = styled.button`
    background-color: rgb(168,85,247);
    margin-right: 1rem; 
    border-radius: 1.2rem;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: lighter;
    padding: .3rem 2rem;
    padding-bottom: .4rem;
    @media(max-width: 600px){
        display: none;
    }
`
export const IconContainer = styled.div`
    display: flex;
    align-items: center;
`
