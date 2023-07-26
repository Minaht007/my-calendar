import React, { useState } from "react";
import CalendarHeader from "./calendarHeader/calendarHeader";
import PeriodMonitor from "./periodMonitor/periodMonitor";
import Calendar from "../../page/calendar";
import { getCalendarDates, formatDate } from "../helper/calendarHelper";
// import CalendarNavigate from "../helper/calendarNav";

import { sub, addDays, format, compareAsc } from "date-fns";
import styled from "styled-components";
import { useContext } from "react";
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

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { setCurrentDay } = useContext(CalendarContext);

  const prevHandelMonth = () => {
    const prevMonth = sub(currentMonth, { month: 1 });
    setCurrentMonth(prevMonth);
    setCurrentDay((prevDay) => sub(prevDay, 1));
  };

  return (
    <ShadowWrapper>
      <CalendarHeader />
      <PeriodMonitor
        month={monthName}
        year={year}
        prevHandelMonth={prevHandelMonth}
      />
      <Calendar />
    </ShadowWrapper>
  );
};

export default CalendarComponents;
