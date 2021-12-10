import styled from "styled-components";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";

export const Container = styled.div`
    min-height: 25vh;
    background-color: ${({night}) => night ? "rgb(17,24,39)" : "white"};
    color: ${({night}) => night ? "white" : "black"};
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem;
`
export const Profile = styled.div`
    display: flex;
    width: 30rem;
    margin: 1rem 0;
    @media(max-width: 600px){
        flex-wrap: wrap;
    }
`
export const ImgContainer = styled.div`
    width: 8rem;
    height: 8rem;
    margin-right: 2rem;
    @media(max-width: 600px){
        margin-bottom: 1rem;
        width: 6rem;
        height: 6rem;
    }
`
export const Img = styled.img`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    object-fit: cover;
    @media(max-width: 600px){
        width: 6rem;
        height: 6rem;
    }
    
`
export const ProfileContainer = styled.div`
`
export const H1 = styled.h2`
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const H2 = styled.h2`
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: lighter;
`
export const P = styled.p`
`
export const Desc = styled.p`
    width: 25rem;
    margin: .5rem 0;
`
export const A = styled.a`
    color: rgb(153,71,195);
    cursor: pointer;
`

export const Descx = styled.div`
    width: 20rem;
    font-size: 2.5rem;
    margin: .5rem 0;
    color: ${({night}) => night ? "white" : "rgb(107,114,128)"};    
`
export const Insta = styled(Instagram)`
  &&{
        font-size: 2.5rem;
        margin-right: 1rem;
        cursor: pointer;
    }

    
`
export const Git = styled(GitHub)`
    &&{
        font-size: 2.5rem;
        margin-right: 1rem;
        cursor: pointer;
    }

`
export const Link = styled(LinkedIn)`
    &&{
        font-size: 2.5rem;
        margin-right: 1rem;
        cursor: pointer;
    }

`
export const Face = styled(Facebook)`
    &&{
        font-size: 2.5rem;
        margin-right: 1rem;
        cursor: pointer;
    }

`
export const Twitt = styled(Twitter)`
    &&{
        font-size: 2.5rem;
        margin-right: 1rem;
        cursor: pointer;
    }

`
export const B = styled.a`
    &&{
        text-decoration: none;
        
    }
`
