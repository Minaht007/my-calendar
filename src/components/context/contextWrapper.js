import { createContext, useState } from "react";
import { getCalendarDates } from "../helper/calendarHelper.jsx";

export const CalendarContext = createContext(null);

export default function ContextWrapper({ children }) {
  const initialCalendar = getCalendarDates();
  const [calendar, setCalendar] = useState([]);
  const [currentDay, setCurrentDay] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

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
