import React, { useContext, useState, useEffect } from "react";
import { subDays, startOfDay, addDays, getDate } from "date-fns";
import { CalendarContext } from "../context/contextWrapper";

const useWeekNavigate = () => {
  const { currentDay, setCurrentDay } = useContext(CalendarContext);
  const [calendarWeek, setCalendarWeek] = useState(new Date());

  useEffect(() => {
    const todayWeek = getDate(calendarWeek);
    setCalendarWeek(todayWeek);
  }, [calendarWeek]);

  const handlePreviousWeek = () => {
    let previousDates = [];
    for (let i = 1; i <= 7; i++) {
      const previousDate = subDays(currentDay, i);
      previousDates.push(startOfDay(previousDate));
    }
    setCurrentDay(previousDates[0]);
  };

  const handleNextWeek = () => {
    let nextDays = [];

    for (let i = 1; i <= 7; i++) {
      const nextDate = addDays(currentDay, i);
      nextDays.push(startOfDay(nextDate));
    }
    setCurrentDay(nextDays[0]);
  };

  return {
    handlePreviousWeek: handlePreviousWeek,
    handleNextWeek: handleNextWeek,
  };
};

export default useWeekNavigate;
