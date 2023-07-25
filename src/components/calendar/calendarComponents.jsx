import React from "react";
import CalendarHeader from "./calendarHeader/calendarHeader";
import PeriodMonitor from "./periodMonitor/periodMonitor";
import Calendar from "../../page/calendar";
import { getCalendarDates, formatDate } from "../helper/calendarHelper";
import CalendarNavigate from "../helper/calendarNav";
import styled from "styled-components";

const ShadowWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border-top: 1px solid rgb(242, 15, 15);
  border-bottom: 0.5px solid #464648;
  border-left: 0.5px solid #464648;
  border-right: 0.5px solid #464648;
  box-shadow: 0 0 0 0.5px #0ff25a, 0 8px 20px 6px #888;
`;

const CalendarComponents = ({ prevHandle, todayHandle, nextHandle }) => {
  const calendarDates = getCalendarDates();
  const today = calendarDates.find(
    (day) => day.date === formatDate(new Date())
  );
  const monthName = today ? today.monthName : null;
  const year = today ? today.year : null;

  // Переключение дня-месяца
  // const prevHandle = () => console.log("prev");
  // const todayHandle = () => console.log("today");
  // const nextHandle = () => console.log("next");

  return (
    <ShadowWrapper>
      <CalendarHeader />
      <PeriodMonitor
        month={monthName}
        year={year}
        prevHandle={CalendarNavigate.prevHandle}
        todayHandle={CalendarNavigate.todayHandle}
        nextHandle={CalendarNavigate.nextHandle}
      />
      <Calendar />
    </ShadowWrapper>
  );
};

export default CalendarComponents;
