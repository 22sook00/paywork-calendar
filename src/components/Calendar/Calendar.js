import React from 'react';
import { useDispatch } from "react-redux";
import {
  clickDate,
  clickPrevButton,
  clickNextButton,
  clickThisMonthButton,
} from '../../_actions/btn_action';
import { style } from "./CalendarStyles";
import * as moment from "moment";

import CalendarButtons from "./CalendarButtons";
import DaysOfWeek from './DaysOfWeeks';
import DatesOfMonth from './DatesOfMonth';

const Calendar = () => {
  // const [tempArr , setTempArr] = useState([]);
  const dispatch = useDispatch();

  const today = {
      year: moment().year(),
      month: moment().month() + 1,
      date: moment().get("date"),
  }
  const currYear = moment().year()
  const currMonth = moment().month() + 1
  const selectedDate = null

  const isToday = (date) => {
    return (
      currYear === today.year &&
      currMonth === today.month &&
      date.date === today.date
    );
  };

  const isSelectedDate = (date) => {
    return (
      selectedDate &&
      currYear === selectedDate.year &&
      currMonth === selectedDate.month &&
      date.date === selectedDate.date
    );
  };

  //보여지는 월의 마지막 날짜
  const lastDateOfCurrMonth = 
  moment([currYear, 0, 31])
  .month(currMonth - 1)
  .format("DD");

  //이번달 1일의 요일
  const firstDayOfThisMonth = 
  moment([currYear, currMonth - 1, 1])
  .day();

  //이번달 마지막날의 요일
  const lastDayOfThisMonth = 
  moment([
    currYear,
    currMonth - 1,
    lastDateOfCurrMonth,
  ])
  .day();

  //이전달의 마지막 날짜
  const lastDateOfLastMonth = 
  moment([currYear, 0, 31])
  .month(currMonth - 1 - 1)
  .format("DD");

  //보여지는 월의 1 ~ 마지막날짜까지 일자를 갖고 있는 배열
  const datesOfCurrMonth = 
  Array.from(
    { length: lastDateOfCurrMonth },
    (v, i) => {
      return {
        date: i + 1,
        month: "cur",
      };
    }
  );

  const getDatesOfLastMonth = () => {
    const emptyArr = Array.from({ length: firstDayOfThisMonth });
    let firstShowingDate = lastDateOfLastMonth - firstDayOfThisMonth + 1;
    return emptyArr.map(() => {
      return {
        date: firstShowingDate++,
        month: "prev",
      };
    });
  };

  const getDatesOfNextMonth = () => {
    const emptyArr = Array.from({ length: 6 - lastDayOfThisMonth });
    let count = 1;
    return emptyArr.map(() => {
      return {
        date: count++,
        month: "next",
      };
    });
  };

  const datesOfMonth = [
    ...getDatesOfLastMonth(),
    ...datesOfCurrMonth,
    ...getDatesOfNextMonth(),
  ];
  // console.log('datesOfMonth:::',datesOfMonth)

  const handleClickedDate = (clickedDate, displayedMonth) => {
    dispatch(
      clickDate({
        clickedDate,
        displayedMonth,
      })
    );
  };

  const handlePrevButtonClick = () => {
    dispatch(clickPrevButton());
  };

  const handleNextButtonClick = () => {
    dispatch(clickNextButton());
  };

  const handleThisMonthButtonClick = () => {
    dispatch(clickThisMonthButton());
  };
  return (
    <CalendarContainer>
      <CalendarLayout>
        <CalendarHeader>
          <CurrentYearMonthLayer>

            <CurrentYear>{currYear}</CurrentYear>
            <CurrentMonth>.{currMonth}</CurrentMonth>

          </CurrentYearMonthLayer>

          <CalendarButtonLayer>
            <CalendarButtons 
            handlePrevButtonClick = {handlePrevButtonClick}
            handleNextButtonClick = {handleNextButtonClick}
            handleThisMonthButtonClick = {handleThisMonthButtonClick}
            />
          </CalendarButtonLayer>

        </CalendarHeader>

        <CalendarBody>
          <DaysOfWeek />
          <DatesOfMonth 
          isToday = {isToday}
          isSelectedDate = {isSelectedDate}
          currMonth = {currMonth}
          datesOfMonth={datesOfMonth}
          handleClickedDate = {handleClickedDate}
          />
        </CalendarBody>
        
      </CalendarLayout>
    </CalendarContainer>
  );
};

export default Calendar;

const {
  CalendarContainer,
  CalendarLayout,
  CalendarHeader,
  CurrentYearMonthLayer,
  CurrentYear,
  CurrentMonth,
  CalendarButtonLayer,
  CalendarBody,
} = style;
