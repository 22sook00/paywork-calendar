const notCurMonth = (day, value) => {
  return day.format("MM") !== value.format("MM");
};
const isSelected = (day, value) => {
  return value.isSame(day, "day");
};
const isToday = (day) => {
  return day.isSame(new Date(), "day");
};
export const dayStyles = (day, value) => {
  if (notCurMonth(day, value)) return "not-cur-month";
  if (isToday(day)) return "today";
  if (isSelected(day, value)) return "focus";
  return "";
};
