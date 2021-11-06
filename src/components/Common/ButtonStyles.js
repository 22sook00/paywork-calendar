import styled from "styled-components";


const PrevArrow = styled.button`
width : 30px;height:30px;

`
const NextArrow = styled.button`
width : 30px;height:30px;

`
const StyledButton = styled.button`
  ${(props) => props.varientStyle}

  padding: 0.3rem 0.5rem;
  cursor: pointer;
  background-color: "#f9f9f9";
  border: none;
  border-radius: 5px;

  :hover {
    background-color: #d0d0d0;
    transition: background-color 0.2s;
  }
`;

export const style = {
  PrevArrow,
  NextArrow,
  StyledButton,
};
