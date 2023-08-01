import React, { useContext, useEffect } from "react";
import CalendarGrid from "../components/calendar/calendarGrid/calendarGrids";
import { getCalendarDates } from "../components/helper/calendarHelper.jsx";
import { CalendarContext } from "../components/context/contextWrapper";
import { sub, add } from "date-fns";
import CalendarModal from "../components/helper/calendarModal";

const Calendar = ({ eventModal }) => {
  const { calendar, setCalendar, currentDay, currentMonth, setCurrentMonth } =
    useContext(CalendarContext);

  useEffect(() => {
    const currentMonthCalendar = getCalendarDates(currentMonth);
    const prevMonthCalendar = getCalendarDates(sub(currentMonth, 1));
    const nextMonthCalendar = getCalendarDates(add(currentMonth, 1));

    const updatedCalendar = [
      ...prevMonthCalendar,
      ...currentMonthCalendar,
      ...nextMonthCalendar,
    ];
    setCalendar(updatedCalendar);
  }, [currentMonth, setCalendar]);

  return (
    <div>
      <CalendarGrid eventModal={eventModal} />
    </div>
  );
};

export default Calendar;
