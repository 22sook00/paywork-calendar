import React from 'react'
import {CalendarHeaderWrapper,YearMonth,
  CalendarNav,CalendarBtn,
} from './styledCalendar'

function CalendarHeader({viewYear,viewMonth}) {

  return (
    <CalendarHeaderWrapper>
      <YearMonth>{viewYear}.{viewMonth}</YearMonth>
      <CalendarNav>
        <CalendarBtn className = 'go-prev'>&lt;</CalendarBtn>
        <CalendarBtn className = 'go-next'>&gt;</CalendarBtn>
        <CalendarBtn>이번달</CalendarBtn>
      </CalendarNav>
    </CalendarHeaderWrapper>
  )
}

export default CalendarHeader
