import React from 'react'
import {StyledDays,StyledEachDay} from './styledCalendar';

function CalendarBody({calendar,setValue,value,dayStyles}) {
  return (
    <>
      {calendar.map((week,idx)=>{
        return (
          <div key = {idx}>
            {week.map((day,idx)=>{
              return (
                <StyledDays
                key = {idx}
                className = 'day'
                onClick = {()=>setValue(day)}>
                  <StyledEachDay 
                  className = {dayStyles(day,value)
                  }>
                  {day.format('D').toString()}
                  </StyledEachDay>
                </StyledDays>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default CalendarBody
