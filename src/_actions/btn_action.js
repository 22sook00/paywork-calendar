import {CLICK_DATE,
  CLICK_PREV_BUTTON,
  CLICK_NEXT_BUTTON,
  CLICK_THISMONTH_BUTTON} from './type'

export const clickDate = ({ clickedDate, displayedMonth }) => ({
  type: CLICK_DATE,
  payload: { clickedDate, displayedMonth },
});
export const clickPrevButton = () => ({
  type: CLICK_PREV_BUTTON,
});
export const clickNextButton = () => ({
  type: CLICK_NEXT_BUTTON,
});
export const clickThisMonthButton = () => ({
  type: CLICK_THISMONTH_BUTTON,
});