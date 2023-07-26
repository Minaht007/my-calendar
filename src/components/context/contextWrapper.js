import { createContext, useState, useEffect } from "react";

export const CalendarContext = createContext(null);

export default function ContextWrapper({ children }) {
  const [calendar, setCalendar] = useState(null);
  const [currentDay, setCurrentDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);

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
