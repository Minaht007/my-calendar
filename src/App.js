import React from "react";
// import RegisterForm from "./components/calendar/RegestriForm/RegisterForm.jsx";
import CalendarComponents from "./components/calendar/calendarComponents.jsx";
import ContextWrapper from "./components/context/contextWrapper.js";

import "./App.css";
import { useContext } from "react";

function App() {
  return (
    <div className="App">
      <ContextWrapper>
        {/* <RegisterForm /> */}
        <CalendarComponents />
      </ContextWrapper>
    </div>
  );
}

export default App;
