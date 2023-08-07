import React, { useContext, useState, useEffect } from "react";
import { subDays, startOfDay, addDays } from "date-fns";
import { CalendarContext } from "../context/contextWrapper";

const WeekNavigate = ({ prevWeek, nextWeek }) => {
  const [currentDay] = useContext(CalendarContext);
  //   const [calendarWeek, setCalendarWeek] = useState(new Date());
  const [previousDate, setPrevDays] = useState();

  //   useEffect(() => {
  //     const todayWeek = calendarWeek.getDate();
  //     setCalendarWeek(todayWeek);
  //   }, [calendarWeek]);

  console.log("1");
  const handlePreviousWeek = () => {
    debugger;
    const today = currentDay;
    const previousDate = [];
    console.log(previousDate);
    console.log("2");
    for (let i = 1; i <= 7; i++) {
      previousDate = subDays(today, i);
      previousDate.push(startOfDay(previousDate));
    }
    return prevWeek(nextDays[0]);
  };

  const handleNextWeek = () => {
    const nextDays = [];
    for (let i = 1; i <= 7; i++) {
      nextDate = addDays(currentDay, i);
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
