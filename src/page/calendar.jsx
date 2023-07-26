import React, { useContext, useEffect } from "react";
import CalendarGrid from "../components/calendar/calendarGrid/calendarGrids";
import {
  getCalendarDates,
  format,
} from "../components/helper/calendarHelper.jsx";
import { CalendarContext } from "../components/context/contextWrapper";

const Calendar = () => {
  const { calendar, setCalendar, currentDay } = useContext(CalendarContext);

  useEffect(() => {
    const temp = getCalendarDates(currentDay);
    setCalendar(temp);
  }, [currentDay, setCalendar]);

  return (
    <div>
      <CalendarGrid calendar={calendar} />
    </div>
  );
};

export default Calendar;
