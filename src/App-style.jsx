import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({night}) => night ? "rgb(17,24,39)" : "white" };
    height: 100vh;
    position: relative;
    margin: 0;
    padding: 0;
`