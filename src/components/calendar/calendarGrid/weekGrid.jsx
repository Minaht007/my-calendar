import React, { useContext } from "react";
import CalendarWeek from "../../helper/calendarWeek";
import WeekNavigate from "../../helper/calendarWeekNavigate";

const CalendarWeekGrid = ({
  handlePreviousWeek,
  handleNextWeek,
  currentWeek,
}) => {
  return (
    <div>
      <CalendarWeek
        prevWeek={handlePreviousWeek}
        nextWeek={handleNextWeek}
        currentWeek={currentWeek}
      />
    </div>
  );
};

export default CalendarWeekGrid;
