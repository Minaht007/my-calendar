import { createContext, useState, useEffect } from "react";

export const CalendarContext = createContext(null);

export default function ContextWrapper({ children }) {
  const [calendar, setCalendar] = useState(null);
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
