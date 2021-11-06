import styled from 'styled-components';

export const Wrapper = styled.section`
width : 430px;
height : 460px;
box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
border-radius: 8px;
`
export const CalendarHeaderWrapper = styled.header`

`
export const YearMonth = styled.div`

`
export const CalendarNav = styled.nav`

`
export const CalendarBtn = styled.button`

`
export const CalendarBodyWrapper = styled.section`

`
export const Days = styled.div`
display: flex;
flex-flow: row wrap;
`

export const EachDay = styled.div`
width: calc(100% / 7);
text-align : center;
`
export const DatesTable = styled.table`
display: flex;
flex-flow: row wrap;
`
export const DatesBody = styled.tbody`
box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
width : calc(100% / 7);
margin : 5px;
border-radius: 3px;
text-align : center;
`