import React,{useState,useEffect} from 'react'
import moment from 'moment';
import {CalendarWrapper} from './styledCalendar';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

function Calendar() {

  const [calendar ,setCalendar] = useState([]);
  const [value ,setValue] = useState(moment()); 
  
  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').endOf('week');

  useEffect(()=>{  
    const day = startDay.clone().subtract(1,'day')
    const calendarArr = [];
    while(day.isBefore(endDay,'day')){
      calendarArr.push(
      Array(7).fill(0)
      .map(()=>day.add(1,'day').clone())
      );
    }
    setCalendar(calendarArr);
  },[value])

  const isSelected = (day,value) => {
    // console.log('selected::',day)
    return value.isSame(day,'day')
  }
  //month 로 바꾸면 되지않을까.
  const beforeThisMonth = (day) => {
    // console.log('before::',day)
    return day.isBefore(new Date(),'day')
  }
  const isToday = (day) => {
    // console.log('today::',day)
    return day.isSame(new Date(), 'day')
  }
  const dayStyles = (day,value) => {
    if(beforeThisMonth(day)) return 'before'
    if(isToday(day)) return 'today'
    if(isSelected(day,value)) return 'focus'
    return ''
  }

  const prevMonth = () => {
    return value.clone().subtract(1,'month');
  }
  const curYear = () => {
    return value.format('YYYY')
  }
  const curMonth = () => {
    return value.format('MM')
  }
  const nextMonth = () => {
    // console.log('asdf',value.clone().add(1,'month'))
    return value.clone().add(1,'month')
  }
  const thisMonth = () => {
    // console.log('valueuu',moment())
    return moment();
  }


  return (
    <CalendarWrapper className = 'calendar'>
      
      <CalendarHeader
      setValue = {setValue}
      prevMonth = {prevMonth}
      thisMonth = {thisMonth}
      curYear = {curYear}
      curMonth = {curMonth}
      nextMonth = {nextMonth}
      />
      <CalendarBody
      calendar = {calendar}
      value = {value}
      setValue = {setValue}
      dayStyles = {dayStyles}
      />

    </CalendarWrapper>
  )
}

export default Calendar
