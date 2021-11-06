import { style } from "./CalendarStyles";

const DatesOfMonth = ({
  isToday,isSelectedDate,currMonth,
  datesOfMonth,handleClickedDate}) => {
  // const {
  //   currMonth,
  //   isToday,
  //   isSelectedDate,
  //   datesOfMonth,
  //   handleClickedDate,
  // } = useCalendar();

  return (
    <DatesOfMonthLayout>
      {datesOfMonth.map((date) => (
        <Date key={`date-${date.month}-${date.date}`}>
          <DateButton
            onClick={() => handleClickedDate(date, currMonth)}
            category={date.month}
            isToday={isToday(date)}
            isSelectedDate={isSelectedDate(date)}
          >
            {date.date}
          </DateButton>
        </Date>
      ))}
    </DatesOfMonthLayout>
  );
};

export default DatesOfMonth;

const { DatesOfMonthLayout, Date, DateButton } = style;
