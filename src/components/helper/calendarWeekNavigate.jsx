import React, { useContext, useState, useEffect } from "react";
import { sub, startOfDay, addDays, getDate } from "date-fns";
import { CalendarContext } from "../context/contextWrapper";

const WeekNavigate = ({ prevWeek, nextWeek }) => {
  const [currentDay] = useContext(CalendarContext);
  const [calendarWeek, setCalendarWeek] = useState();

  useEffect(() => {
    const todayWeek = calendarWeek.getDate();
    setCalendarWeek(todayWeek);
  }, [calendarWeek]);

  const handlePreviousWeek = () => {
    const today = getDate(new Date());
    const startOfDay = new Date();
    const previousDays = [];
    for (let i = 1; i <= 7; i++) {
      const previousDate = today.sub(i);
      previousDays.push(startOfDay(previousDate));
    }
    prevWeek(previousDays[0]);
  };

  console.log(handlePreviousWeek);

  const handleNextWeek = () => {
    const nextDays = [];
    for (let i = 1; i <= 7; i++) {
      const nextDate = addDays(calendarWeek, i);
      nextDays.push(startOfDay(nextDate));
    }
    nextWeek(nextDays[0]);
  };
  console.log(handleNextWeek);
  return (
    <div>
      <handlePreviousWeek />
      <handleNextWeek />
    </div>
  );
};

export default WeekNavigate;
