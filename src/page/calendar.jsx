import React, { useContext, useEffect } from "react";
import CalendarGrid from "../components/calendar/calendarGrid/calendarGrids";
import { getCalendarDates } from "../components/helper/calendarHelper.jsx";
import { CalendarContext } from "../components/context/contextWrapper";

const Calendar = () => {
  const { calendar, setCalendar, currentDay, setCurrentMonth } =
    useContext(CalendarContext);

  useEffect(() => {
    const temp = getCalendarDates(currentDay);
    setCalendar(temp);
    setCurrentMonth(currentDay);
  }, [currentDay, setCalendar, setCurrentMonth]);

  return (
    <div>
      <CalendarGrid />
    </div>
  );
};

export default Calendar;
