import React, { useContext, useState, useEffect } from "react";
import {
  subDays,
  startOfDay,
  addDays,
  getWeek,
  startOfWeek,
  getDate,
  startOfMonth,
} from "date-fns";
import { CalendarContext } from "../context/contextWrapper";

const useWeekNavigate = () => {
  const {
    currentDay,
    setCurrentDay,
    currentMonth,
    currentWeek,
    setCurrentMonth,
    setCurrentYear,
    setCurrentWeek,
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

  //   const handlePreviousWeek = () => {
  //     let previousDates = [];
  //     for (let i = 1; i <= 7; i++) {
  //       const previousDate = subDays(currentDay, i);
  //       previousDates.push(startOfDay(previousDate));
  //     }
  //     setCurrentDay(previousDates[0]);
  //     // upgrate month
  //     const previousMonth = subDays(currentMonth, 7);
  //     setCurrentMonth(previousMonth);
  //     if (previousMonth.getMonth() === 11) {
  //       setCurrentYear((prevYear) => prevYear - 1);
  //     }
  //   };

  const handleNextWeek = () => {
    const nextWeek = addDays(currentDay, 7);
    setCurrentDay(nextWeek);
  };

  useEffect(() => {
    // Вычисляем текущий день, месяц и год на основе текущей недели
    setCurrentMonth(startOfMonth(currentDay));
    setCurrentYear(currentDay.getFullYear());
  }, [currentDay]);

  //   const handleNextWeek = () => {
  //     const nextDays = [];

  //     for (let i = 1; i <= 7; i++) {
  //       const nextDate = addDays(currentDay, i);
  //       nextDays.push(startOfDay(nextDate));
  //     }
  //     setCurrentDay(nextDays[0]);
  //     //   upgrate year
  //     const nextMonth = addDays(currentMonth, 7);
  //     setCurrentMonth(nextMonth);
  //     if (nextMonth.getMonth() === 0) {
  //       setCurrentYear((prevYear) => prevYear + 1);
  //     }
  //   };

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
