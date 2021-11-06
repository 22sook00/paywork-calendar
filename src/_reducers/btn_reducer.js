import * as moment from "moment";

import { stateCreator, isSameSelectedDate } 
from './change_reducer';

import {CLICK_DATE,
  CLICK_PREV_BUTTON,
  CLICK_NEXT_BUTTON,
  CLICK_THISMONTH_BUTTON} from '../_actions/type';

export const calendarInitialState = {
  today: {
    year: moment().year(),
    month: moment().month() + 1,
    date: moment().get("date"),
  },
  currYear: moment().year(),
  currMonth: moment().month() + 1,
  selectedDate: null,
};


function calendarReducer(calendarState = calendarInitialState, action) {
  switch (action.type) {
    case CLICK_DATE: {
      let newCalendarState = stateCreator({
        type: action.payload.clickedDate.month,
        currCalendarState: calendarState,
      });
      // 선택한 날짜 재선택 === 해제
      if (
        isSameSelectedDate({
          payload: action.payload,
          selectedDate: newCalendarState.selectedDate,
        })
      ) {
        return {
          ...newCalendarState,
          selectedDate: null,
        };
      }
      // 최초로 날짜 선택, 다른 날짜 선택 === 선택
      return {
        ...newCalendarState,
        selectedDate: {
          year: newCalendarState.currYear,
          month: newCalendarState.currMonth,
          date: action.payload.clickedDate.date,
        },
      };
    }
    case CLICK_PREV_BUTTON: {
      console.log('prevcalendarState::',calendarState)
      return stateCreator({
        type: "prev",
        currCalendarState: calendarState,
      });
    }
    case CLICK_NEXT_BUTTON: {
      console.log('nextcalendarState::',calendarState)
      return stateCreator({ 
        type: "next", 
        currCalendarState: calendarState });
    }
    case CLICK_THISMONTH_BUTTON: {
      console.log('thiscalendarState::',calendarState)
      return {
        ...calendarState,
        currYear: calendarState.today.year,
        currMonth: calendarState.today.month,
      };
    }
    default:
      return calendarState;
  }
}

export { calendarReducer };
