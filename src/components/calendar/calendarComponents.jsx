import React from "react";
import CalendarHeader from "./calendarHeader/calendarHeader";
import PeriodMonitor from "./periodMonitor/periodMonitor";
import Calendar from "../../page/calendar";

const CalendarComponents = () => {
  return (
    <div>
      <CalendarHeader />
      <PeriodMonitor />
      <Calendar />

      <h2>Calendar</h2>
    </div>
  );
};

export default CalendarComponents;
