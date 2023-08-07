import React, { useContext, useState, useEffect } from "react";
import { subDays, startOfDay, addDays, previousDay } from "date-fns";
import { CalendarContext } from "../context/contextWrapper";

const WeekNavigate = ({ prevWeek, nextWeek }) => {
  const [currentDay] = useContext(CalendarContext);
  const [calendarWeek, setCalendarWeek] = useState(new Date());

  //   useEffect(() => {
  //     const todayWeek = calendarWeek.getDate();
  //     setCalendarWeek(todayWeek);
  //   }, [calendarWeek]);

  console.log("1");
  const handlePreviousWeek = () => {
    debugger;
    const previousDates = [];
    console.log(previousDates);
    console.log("2");
    for (let i = 1; i <= 7; i++) {
      const previousDate = subDays(currentDay, i);
      previousDates.push(startOfDay(previousDate));
    }
    return prevWeek(previousDates[0]);
  };

  const handleNextWeek = () => {
    const nextDays = [];
    console.log("3");
    for (let i = 1; i <= 7; i++) {
      const nextDate = addDays(currentDay, i);
      nextDays.push(startOfDay(nextDate));
    }
    return nextWeek(nextDays[0]);
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
