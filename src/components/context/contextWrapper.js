import { createContext, useState, useEffect } from "react";
import { getCalendarDates } from "../helper/calendarHelper.jsx";
import { startOfMonth } from "date-fns";

export const CalendarContext = createContext(null);

export default function ContextWrapper({ children }) {
  const initialCalendar = getCalendarDates();
  const [calendar, setCalendar] = useState([]);
  const [currentDay, setCurrentDay] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentMonth(startOfMonth(currentWeek));
    setCurrentYear(currentWeek.getFullYear());
  }, [currentWeek]);

  return (
    <CalendarContext.Provider
      value={{
        calendar,
        setCalendar,
        currentDay,
        setCurrentDay,
        currentWeek,
        setCurrentWeek,
        currentMonth,
        setCurrentMonth,
        currentYear,
        setCurrentYear,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
