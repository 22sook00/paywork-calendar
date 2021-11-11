import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100%;
  position :relative;
`;
export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: all 0.2s linear;

  background : ${({theme})=>theme.bgColor};
  color : ${({theme})=> theme.textColor};
  border: ${({theme}) => theme.borderColor};

`;

export const ThemeBtn = styled.button`
border:3px solid;
width : 100px; height : 100px;
`