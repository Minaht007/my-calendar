import React, { useContext, useState, useEffect } from "react";
import { subDays, addDays, getDate, startOfMonth } from "date-fns";
import { CalendarContext } from "../context/contextWrapper";

const useWeekNavigate = () => {
  const {
    currentDay,
    setCurrentDay,
    currentMonth,
    setCurrentMonth,
    setCurrentYear,
  } = useContext(CalendarContext);
  const [calendarWeek, setCalendarWeek] = useState(new Date());
  const [todayMonth, setTodayMonth] = useState(new Date().getDate());

  useEffect(() => {
    const todayWeek = getDate(calendarWeek);
    setCalendarWeek(todayWeek);
  }, [calendarWeek]);

  const handlePreviousWeek = () => {
    const previousWeek = subDays(currentDay, 7);
    setCurrentDay(previousWeek);

    const previousMonth = subDays(currentMonth, 7);
    setCurrentMonth(previousMonth);
    if (previousMonth.getMonth() === 11) {
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  const handleNextWeek = () => {
    const nextWeek = addDays(currentDay, 7);
    setCurrentDay(nextWeek);
  };

  useEffect(() => {
    setCurrentMonth(startOfMonth(currentDay));
    setCurrentYear(currentDay.getFullYear());
  }, [currentDay]);

  const todayCurrentWeek = () => {
    const today = new Date();
    setCurrentDay(today);
    setCurrentMonth(startOfMonth(today));
    setCurrentYear(today.getFullYear());
  };

  return {
    handlePreviousWeek: handlePreviousWeek,
    handleNextWeek: handleNextWeek,
    todayCurrentWeek: todayCurrentWeek,
  };
};

export default useWeekNavigate;
