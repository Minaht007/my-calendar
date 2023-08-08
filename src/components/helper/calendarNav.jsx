import { useContext } from "react";
import { sub, add } from "date-fns";
import CalendarContext from "../context/contextWrapper";

const useCalendarMonthNavigate = () => {
  const { currentMonth, setCurrentMonth, setCurrentYear } =
    useContext(CalendarContext);

  const prevHandelMonth = () => {
    const prevMonth = sub(currentMonth, { months: 1 });
    setCurrentMonth(prevMonth);
    if (prevMonth.getMonth() === 11) {
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  const nextHandelMonth = () => {
    const nextMonth = add(currentMonth, { months: 1 });
    setCurrentMonth(nextMonth);
    if (nextMonth.getMonth() === 0) {
      setCurrentYear((prevYear) => prevYear + 1);
    }
  };

  const todayCurrentMonth = () => {
    setCurrentMonth(new Date());
    setCurrentYear(new Date().getFullYear());
  };

  return {
    prevHandelMonth,
    todayCurrentMonth,
    nextHandelMonth,
  };
};

export default useCalendarMonthNavigate;
