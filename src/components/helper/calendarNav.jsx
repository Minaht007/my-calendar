import React from "react";
import { useState } from "react";
import { sub, addDays, isToday } from "date-fns";

const CalendarNavigate = () => {
  const [today, setToday] = useState(new Date());

  const prevHandle = () => {
    const prevDate = sub(today, { days: 1, months: 1, years: 1 });
    setToday(prevDate);
    console.log("prev");
  };
  const todayHandle = () => {
    setToday = new Date();
  };
  const nextHandle = () => {
    const nextDate = addDays(today, { days: 1, months: 1, years: 1 });
    setToday(nextDate);
    console.log("next");
  };

  return <div>{prevHandle}</div>;
};

export default CalendarNavigate;
