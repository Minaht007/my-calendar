import React, { useContext } from "react";
import CalendarWeek from "../../helper/calendarWeek";
import WeekNavigate from "../../helper/calendarWeekNavigate";

const CalendarWeekGrid = ({ prevWeek, nextWeek, currentWeek }) => {
  return (
    <div>
      <CalendarWeek
        prevWeek={prevWeek}
        nextWeek={nextWeek}
        currentWeek={currentWeek}
      />
    </div>
  );
};

export default CalendarWeekGrid;
