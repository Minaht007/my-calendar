import React, { useContext, useState, useEffect } from "react";
import { subDays, startOfDay, addDays } from "date-fns";
import { CalendarContext } from "../context/contextWrapper";

const WeekNavigate = ({ prevWeek, nextWeek }) => {
  const [currentDay] = useContext(CalendarContext);
  const [calendarWeek, setCalendarWeek] = useState(new Date());

  useEffect(() => {
    const todayWeek = calendarWeek.getDate();
    setCalendarWeek(todayWeek);
  }, [calendarWeek]);

  console.log("1");
  const handlePreviousWeek = () => {
    debugger;
    const today = currentDay;
    const previousDays = [];
    console.log(previousDays);
    console.log("2");
    for (let i = 1; i <= 7; i++) {
      const previousDate = subDays(today, i);
      previousDays.push(startOfDay(previousDate));
    }
    return prevWeek(previousDays[0]);
  };

  console.log(handlePreviousWeek());
  console.log("3");
  const handleNextWeek = () => {
    const nextDays = [];
    for (let i = 1; i <= 7; i++) {
      const nextDate = addDays(currentDay, i);
      nextDays.push(startOfDay(nextDate));
    }
    nextWeek(nextDays[0]);
  };
  console.log(handleNextWeek());
  return (
    <div>
      {handlePreviousWeek()}
      {handleNextWeek()}
    </div>
  );
};

export default WeekNavigate;
