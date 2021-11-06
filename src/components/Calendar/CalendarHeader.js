import React from 'react'
// import {StyledDays,StyledEachDay} from './styledCalendar';

function CalendarHeader({
  curYear,curMonth,thisMonth,
  setValue,prevMonth,nextMonth}) {
  
  return (
    <>
    <div>{curYear()}.{curMonth()}</div>
    <button
    className = 'prev'
    onClick = {()=>setValue(prevMonth())}
    >{String.fromCharCode(171)}</button>

    <button
    className = 'next'
    onClick = {()=>setValue(nextMonth())}
    >{String.fromCharCode(187)}</button>
    
    <button
    className = 'this'
    onClick = {()=>setValue(thisMonth())}
    >이번달
    </button>

    </>
  )
}

export default CalendarHeader
