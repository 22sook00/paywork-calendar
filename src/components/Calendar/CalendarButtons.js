import { style } from "./CalendarStyles";

const CalendarButtons = ({
  handlePrevButtonClick,
  handleNextButtonClick,
  handleThisMonthButtonClick
}) => {

  return (
    <CalendarButtonLayout>
      <button 
      name={"prev"}
      onClick={handlePrevButtonClick}>prev
      </button>
      
      <button 
      name={"next"}
      onClick={handleNextButtonClick}>
      next
      </button>

      <button 
      name={"curMonth"} 
      onClick={handleThisMonthButtonClick}>
      이번달
      </button>
    </CalendarButtonLayout>
  );
};

export default CalendarButtons;

const { CalendarButtonLayout } = style;
