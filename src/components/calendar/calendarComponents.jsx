import React from "react";
import CalendarHeader from "./calendarHeader/calendarHeader";
import PeriodMonitor from "./periodMonitor/periodMonitor";

const CalendarComponents = () => {
  return (
    <div>
      <CalendarHeader />
      <PeriodMonitor />

      <h2>Calendar</h2>
    </div>
  );
};

export default CalendarComponents;
