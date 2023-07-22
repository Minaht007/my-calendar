import React from "react";
import CalendarGrid from "../components/calendar/calendarGrid/calendarGrids";
import getCalendarDates from "../components/helper/calendarHelper";

const Calendar = () => {
  const calendar = getCalendarDates();

  return (
    <div>
      <h1>Hello from calendar</h1>
      <CalendarGrid calendar={calendar} />
    </div>
  );
};

export default Calendar;
