import styled from 'styled-components';

export const CalendarWrapper = styled.div`
width : 430px;
height : 460px;
`
export const StyledDays = styled.div`
position : relative;
width : calc(100% / 7);
height : 44px;
display: inline-block;
padding : 0;
margin : 0;
box-sizing : border-box;
z-index: 1000;
text-align : center;
`
export const StyledEachDay = styled.div`
&.today{
  color : blue;
}
&.focus{
  color : red;
}
&.not-cur-month{
  color : grey;
}
`