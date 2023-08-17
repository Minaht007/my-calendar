import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "./calendarHeader/calendarHeader";
import PeriodMonitor from "./periodMonitor/periodMonitor";
import styled from "styled-components";

import useCalendarMonthNavigate from "../helper/calendarNav";
import { CalendarContext } from "../context/contextWrapper";
import UserRouters from "../../UserRouters";

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
  const { currentMonth, currentYear } = useContext(CalendarContext);

  const { prevHandelMonth, todayCurrentMonth, nextHandelMonth } =
    useCalendarMonthNavigate();
  return (
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
        <UserRouters />
      </ShadowWrapper>
    </div>
  );
};

export default CalendarComponents;
