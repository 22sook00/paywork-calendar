import React,{useState} from 'react'
import moment from 'moment';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import {Wrapper,
} from './styledCalendar'

function CalendarContainer() {

  const [getMoment, setMoment]= useState(moment());     
  const today = getMoment;  
  //1년은 52주, but moment 에서는 내년의 첫주인 1로 표시하므로 마지막주가1 이라면 53이됨.
  //윤년은 알아서 처리해줌.
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 
  ? 53 
  : today.clone().endOf('month').week();

  // console.log('fistlas::',firstWeek,lastWeek);

  
  const movePrevMonthHandler = () => {
    setMoment(getMoment.clone().subtract(1,'month'))
    // console.log('prevmomenth:::',getMoment)
  }
  const moveNextMonthHandler = () => {
    setMoment(getMoment.clone().add(1,'month'))
    // console.log('nextttt',getMoment)
  }

  //캘린더 배열로 뿌려주기.
  const calendarArr=()=>{

    let result = [];
    let week = firstWeek;
    // 7일 기준 반복문 출력. 0부터 6까지 idx 로 표현.
    // moment는 현재날짜로 초기화 되어있긴 하지만 53주째를 내년으로 출력해서 원하는값 나오지않을수 있음.
    // 명시적으로 년도를 지정해준다.

    for ( week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
        {Array(7).fill(0).map((_data, index) => {
          let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
          if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
            return (
              <td key={index} style={{backgroundColor:'red'}} >
                <span>{days.format('D')}</span>
              </td>
            )
          }else if(days.format('MM') !== today.format('MM')){
            return (
              <td key={index} style={{backgroundColor:'gray'}} >
              <span>{days.format('D')}</span>
            </td>
            )
          }else{
            return(
              <td key={index}  >
                <span>{days.format('D')}</span>
              </td>
          );
          }
          })
        }
      </tr>
        );

    }
    return result;
  }

  return (
    <>
      <Wrapper className = 'calendar'>
        <CalendarHeader 
        today = {today}
        movePrevMonthHandler = {movePrevMonthHandler}
        moveNextMonthHandler = {moveNextMonthHandler}
        />
        <CalendarBody 
        calendarArr = {calendarArr}
        />
      </Wrapper> 
    </>
  )
}

export default CalendarContainer
