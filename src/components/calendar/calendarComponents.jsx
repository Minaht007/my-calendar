import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "./calendarHeader/calendarHeader";
import PeriodMonitor from "./periodMonitor/periodMonitor";
import Calendar from "../../page/calendar";
import { getCalendarDates, formatDate } from "../helper/calendarHelper";
import TaskList from "../helper/taskList";
import styled from "styled-components";
import CalendarWeekGrid from "./calendarGrid/weekGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalendarContext from "../context/contextWrapper";
import useCalendarMonthNavigate from "../helper/calendarNav";

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
  // const calendarDates = getCalendarDates();
  // const today = calendarDates.find(
  //   (day) => day.date === formatDate(new Date())
  // );

  // const [todayMonth, setTodayMonth] = useState(new Date().getDate());

  const { currentMonth, currentYear } = useContext(CalendarContext);

  // useEffect(() => {
  //   const todayMonth = currentMonth.getDate();
  //   setTodayMonth(todayMonth);
  // }, [currentMonth]);

  const { prevHandelMonth, todayCurrentMonth, nextHandelMonth } =
    useCalendarMonthNavigate();
  return (
    <Router>
      <div className="base:max-w-full md:max-w[900px] lg:m=w=[1100px] desk:m-w-[1400px] desk2k:m-w-[200px]">
        <ShadowWrapper>
          <CalendarHeader />
          <PeriodMonitor
            month={currentMonth.toLocaleString("en", { month: "long" })}
            year={currentYear.toString()}
            prevHandelMonth={() => prevHandelMonth()}
            todayCurrentMonth={() => todayCurrentMonth()}
            nextHandelMonth={() => nextHandelMonth()}
          />

          <Routes>
            <Route path="/" element={<Calendar />} />
            <Route path="/week" element={<CalendarWeekGrid />} />
          </Routes>
          <TaskList />
        </ShadowWrapper>
      </div>
    </Router>
  );
};

export default CalendarComponents;
