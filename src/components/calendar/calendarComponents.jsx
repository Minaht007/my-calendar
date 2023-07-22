import React from "react";
import CalendarHeader from "./calendarHeader/calendarHeader";
import PeriodMonitor from "./periodMonitor/periodMonitor";
import CalendarGrid from "./calendarGrid/calendarGrids.jsx";

const CalendarComponents = () => {
  return (
    <div>
      <CalendarHeader />
      <PeriodMonitor />
      <CalendarGrid />

      <h2>Calendar</h2>
    </div>
  );
};
export default CalendarComponents;
