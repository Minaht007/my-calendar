import React, { useContext, useState, useEffect } from "react";
import { subDays, startOfDay, addDays, getDate } from "date-fns";
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

  useEffect(() => {
    const todayMonth = currentMonth.getDate();
    setTodayMonth(todayMonth);
  }, [currentMonth]);

  const handlePreviousWeek = () => {
    let previousDates = [];
    for (let i = 1; i <= 7; i++) {
      const previousDate = subDays(currentDay, i);
      previousDates.push(startOfDay(previousDate));
    }
    setCurrentDay(previousDates[0]);
    // upgrate month
    const previousMonth = subDays(currentMonth, 7);
    setCurrentMonth(previousMonth);
    if (previousMonth.getMonth() === 11) {
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  const handleNextWeek = () => {
    let nextDays = [];

    for (let i = 1; i <= 7; i++) {
      const nextDate = addDays(currentDay, i);
      nextDays.push(startOfDay(nextDate));
    }
    setCurrentDay(nextDays[0]);
    //   upgrate year
    const nextMonth = addDays(currentMonth, 7);
    setCurrentMonth(nextMonth);
    if (nextMonth.getMonth() === 0) {
      setCurrentYear((prevYear) => prevYear + 1);
    }
  };

  return {
    handlePreviousWeek: handlePreviousWeek,
    handleNextWeek: handleNextWeek,
  };
};

export default useWeekNavigate;
