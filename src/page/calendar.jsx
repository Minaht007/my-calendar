import React, { useContext, useEffect } from "react";
import CalendarGrid from "../components/calendar/calendarGrid/calendarGrids";
import {
  getCalendarDates,
  forma,
} from "../components/helper/calendarHelper.jsx";
import { CalendarContext } from "../components/context/contextWrapper";

const Calendar = () => {
  const { setCalendar, currentDay } = useContext(CalendarContext);

  useEffect(() => {
    const temp = getCalendarDates(currentDay);
    setCalendar(temp);
  }, [currentDay, setCalendar]);

  return (
    <div>
      <CalendarGrid />
    </div>
  );
};

export default Calendar;
