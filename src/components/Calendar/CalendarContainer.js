import React from 'react'
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import {Wrapper,
} from './styledCalendar'

function CalendarContainer() {

  const date = new Date();
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  //이전달과 이번달의 마지막 일의 한국표준시까지 일단 구한다. 
  const prevLast = new Date(viewYear,viewMonth,0);
  const thisLast = new Date(viewYear,viewMonth+1,0);

  //구한 이전달과 이번달 각각의 마지막 일,요일의 인덱스 구한다.
  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();
  //0:일,1월,2화~~,3,4,5,6:토
  // console.log('PLDate::',PLDate,'PLDay::',PLDay)
  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();
  // console.log('TLDate::',TLDate,'TLDay::',TLDay)
  
  //각 달에 찍힌 숫자형 date 를 배열로 바꾼다.
  //0:undefined -> 배열의 키만 담고 0제외해야하니까 +1, 맨마지막값 slice하기.
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];
  
  //토요일(6) 이 아니면 하나씩 추가하면서 돌고 
  if(PLDay !== 6){
    for(let i = 0; i<PLDay+1; i++){
      prevDates.unshift(PLDate - i);
      // console.log('preddvDates:::',PLDate,i)
    }
  }
  //다음달 보여주려면 오늘날짜가 끝나는지점까지 i 가 돌고 그 i만큼 배열에 담아준다.
  for(let i = 1; i<7-TLDay; i++){
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates,nextDates);
  console.log('dates::',dates);
  // 뿌려서 보여준다.

  dates.forEach((date,i)=>{
    // console.log('date:::',date)
    dates[i] = date
  })



  return (
    <>
      <Wrapper className = 'calendar'>
        <CalendarHeader 
        viewYear = {viewYear}
        viewMonth = {viewMonth}
        />
        <CalendarBody 
        dates = {dates}
        />
      </Wrapper> 
    </>
  )
}

export default CalendarContainer
