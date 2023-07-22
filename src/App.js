import React from "react";
import Calendar from "../src/page/calendar.jsx";
import CalendarComponents from "./components/calendar/calendarComponents.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Calendar />
      <CalendarComponents />
    </div>
  );
}

export default App;
