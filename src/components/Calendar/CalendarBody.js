import React,{useState} from 'react'
import {dayArr} from '../../Assets/datas';
import {
  CalendarBodyWrapper,
  Days,EachDay,DatesTable,DatesBody} from './styledCalendar'

function CalendarBody({calendarArr}) {
  console.log('calendarArr:',calendarArr())

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
      
      <DatesTable>
        <DatesBody>
          {calendarArr()}
        </DatesBody>
      </DatesTable>

    </CalendarBodyWrapper>
  )
}

export default CalendarBody
