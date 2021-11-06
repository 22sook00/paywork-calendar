import React from 'react'
import {CalendarHeaderWrapper,YearMonth,
  CalendarNav,CalendarBtn,
} from './styledCalendar'

function CalendarHeader({today,
  movePrevMonthHandler,moveNextMonthHandler}) {
  // console.log('today::',today)
  return (
    <CalendarHeaderWrapper>
      <CalendarNav>
        <span>{today.format('YYYY.MM')}</span>   
        <CalendarBtn 
        className = 'go-prev'
        onClick = {movePrevMonthHandler}
        >&lt;</CalendarBtn>
        <CalendarBtn 
        className = 'go-next'
        onClick = {moveNextMonthHandler}
        >&gt;</CalendarBtn>
        <CalendarBtn
        >이번달</CalendarBtn>
      </CalendarNav>
    </CalendarHeaderWrapper>
  )
}

export default CalendarHeader
