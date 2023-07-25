import React from "react";
import CalendarHeader from "./calendarHeader/calendarHeader";
import PeriodMonitor from "./periodMonitor/periodMonitor";
import Calendar from "../../page/calendar";
import { getCalendarDates, formatDate } from "../helper/calendarHelper";
// import CalendarNavigate from "../helper/calendarNav";
import { format, compareAsc } from "date-fns";
import { sub, addDays, isToday } from "date-fns";
import { useState } from "react";
import styled from "styled-components";
import { months } from "moment/moment";

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

  // Переключение дня-месяца
  const [currenyDay, setCurrendDay] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevHandleDay = () => {
    const prevDate = sub(currenyDay, { days: 1 });
    setCurrendDay(prevDate);
    console.log("prev");
  };

  const pfevHandlMonth = () => {
    const prevMonth = sub(currentMonth, { months: 1 });
    setCurrentMonth(prevMonth);
    console.log(setCurrentMonth);
  };
  // const todayHandle = () => console.log("today");
  // const nextHandle = () => console.log("next");

  return (
    <ShadowWrapper>
      <CalendarHeader />
      <PeriodMonitor
        month={monthName}
        year={year}
        pfevHandlMonth={pfevHandlMonth}
      />
      <Calendar />
    </ShadowWrapper>
  );
};

export default CalendarComponents;
