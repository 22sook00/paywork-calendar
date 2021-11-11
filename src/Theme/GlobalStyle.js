import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html , body {
    margin : 0px; 
    padding : 0px;
    box-sizing: border-box;
    font-display: swap; 
    -webkit-font-smoothing : antialiased;
    -ms-overflow-style: none;
    scrollbar-width: none;
    transition : all 0.5s;
    &::-webkit-scrollbar{
      display: none;
    };
    
    font-family: 'Nanum Gothic Coding', monospace;
    font-family: 'Ubuntu', sans-serif;
  }

  button{
    border: none;
    cursor: pointer;
    &:active,&:focus{
      outline: none;
    }
    &:hover{
      transition : all 0.5s;
    }
  }
`;
export const TextColor = "#57575c";
export const PointColor = "#418ef2";
export const HoverGreyColor = "rgba(0,0,0,0.03)";

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Ubuntu;
  font: inherit;
`;
