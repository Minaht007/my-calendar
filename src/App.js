import React from "react";
import CalendarComponents from "./components/calendar/calendarComponents.jsx";
import ContextWrapper from "./components/context/contextWrapper";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextWrapper>
        <CalendarComponents />
      </ContextWrapper>
    </div>
  );
}

export default App;
