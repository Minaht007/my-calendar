import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "./calendarHeader/calendarHeader";
import PeriodMonitor from "./periodMonitor/periodMonitor";
import Calendar from "../../page/calendar";
import { getCalendarDates, formatDate } from "../helper/calendarHelper";
// import CalendarNavigate from "../helper/calendarNav";

import { sub, addDays, format, compareAsc } from "date-fns";
import styled from "styled-components";

import { CalendarContext } from "../context/contextWrapper";

const ShadowWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border-top: 1px solid rgb(242, 15, 15);
  border-bottom: 0.5px solid #464648;
  border-left: 0.5px solid #464648;
  border-right: 0.5px solid #464648;
  box-shadow: 0 0 0 0.5px #0ff25a, 0 8px 20px 6px #888;
`;

const CalendarComponents = () => {
  const calendarDates = getCalendarDates();
  const today = calendarDates.find(
    (day) => day.date === formatDate(new Date())
  );
  const monthName = today ? today.monthName : null;
  const year = today ? today.year : null;

  const [todayMonth, setTodayMonth] = useState(new Date().getDate());
  const { currentMonth, setCurrentMonth } = useContext(CalendarContext);

  useEffect(() => {
    const todayMonth = currentMonth.getDate();
    setTodayMonth(todayMonth);
  }, [currentMonth]);

  const prevHandelMonth = () => {
    const prevMonth = sub(currentMonth, { months: 1 }); 
    setCurrentMonth(prevMonth); 

  return (
    <ShadowWrapper>
      <CalendarHeader />
      <PeriodMonitor
        month={currentMonth.toLocaleString("en", { month: "long" })}
        year={year}
        prevHandelMonth={prevHandelMonth}
        year={year}
        prevHandelMonth={prevHandelMonth}
      />
      <Calendar />
    </ShadowWrapper>
  );
};

export default CalendarComponents;
