import React from "react";
import CalendarGrid from "../components/calendar/calendarGrid/calendarGrids";
import {
  getCalendarDates,
  format,
} from "../components/helper/calendarHelper.jsx";

const Calendar = () => {
  const calendar = getCalendarDates();

  return (
    <div>
      <CalendarGrid calendar={calendar} />
    </div>
  );
};

export default Calendar;
