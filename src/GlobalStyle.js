import styled, {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

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
    &::-webkit-scrollbar{
      display: none;
    };
    transition : all 0.5s;
    font-family: 'Nanum Gothic Coding', monospace;
    font-family: 'Ubuntu', sans-serif;
  }
  article{
    &:hover{
    transform: translateX(10px);
    transition: 0.5s;
    }
  }
  a {
    text-decoration: none;
  }
  button{
    border: none;
    cursor: pointer;
    &:active,&:focus{
      outline: none;
    }
  }
`
export const PointColor = 
'linear-gradient(135deg, #4568DC 0%, #B06AB3 100%)'

export const TextColor = 
'#3b3d40';

export const Container = styled.main`
height : 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

font : inherit;
font-family: 'NanumSquareRound';
@media screen and (min-width: 767px) {
  
};
`
