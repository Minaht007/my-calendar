import { createContext, useState } from "react";
import { formatDate, getCalendarDates } from "../helper/calendarHelper.jsx";

export const CalendarContext = createContext(null);

export default function ContextWrapper({ children }) {
  const initialCalendar = getCalendarDates();
  const [calendar, setCalendar] = useState(initialCalendar);
  const [currentDay, setCurrentDay] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date());

  return (
    <CalendarContext.Provider
      value={{
        calendar,
        setCalendar,
        currentDay,
        setCurrentDay,
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
