import React,{useState} from 'react'
import {dayArr} from '../../Assets/datas';
import {
  CalendarBodyWrapper,
  Days,EachDay,Dates,EachDate} from './styledCalendar'

function CalendarBody({dates}) {

  const [day,setDay] = useState(dayArr);

  return (
    <CalendarBodyWrapper>
      <Days className = 'days'>
      {day.map((el,idx)=>{
        return (
          <EachDay key = {idx}>
            {el}
          </EachDay>
        )
      })}
      </Days>
      
      <Dates>
      {dates.map((el,idx)=>{
        return (
          <EachDate
          className = 'datas'
          key = {idx}>{el}
          </EachDate>
        )
      })}
      </Dates>
    </CalendarBodyWrapper>
  )
}

export default CalendarBody
