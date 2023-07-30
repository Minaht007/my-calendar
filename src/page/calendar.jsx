import React, { useContext, useEffect } from "react";
import CalendarGrid from "../components/calendar/calendarGrid/calendarGrids";
import { getCalendarDates } from "../components/helper/calendarHelper.jsx";
import { CalendarContext } from "../components/context/contextWrapper";

const Calendar = () => {
  const { calendar, setCalendar, currentDay, currentMonth, setCurrentMonth } =
    useContext(CalendarContext);

  useEffect(() => {
    const temp = getCalendarDates(currentMonth); // Используйте currentMonth для обновления календаря
    setCalendar(temp);
  }, [currentMonth, setCalendar]);

  return (
    <div>
      <CalendarGrid />
    </div>
  );
};

export default Calendar;
