import React from 'react'
import {Wrapper,
  CalendarHeader,CalendarNav,CalendarBtn,
  CalendarBody,
} from './styledCalendar'

function CalendarContainer() {
  return (
    <>
      <Wrapper className = 'calendar'>
        <CalendarHeader>
          <CalendarNav>
            <CalendarBtn className = 'go-prev'>&lt;</CalendarBtn>
            <CalendarBtn className = 'go-next'>&gt;</CalendarBtn>
            <CalendarBtn>이번달</CalendarBtn>
          </CalendarNav>
        </CalendarHeader>

        <CalendarBody>
          <div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
            <div>일</div>
          </div>
        </CalendarBody>

        <div className = 'datas'></div>
      </Wrapper> 
    </>
  )
}

export default CalendarContainer
