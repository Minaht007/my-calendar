import React from "react";
import CalendarComponents from "./components/calendar/calendarComponents.jsx";
import ContextWrapper from "./components/context/contextWrapper.js";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { useContext } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextWrapper>
          <CalendarComponents />
        </ContextWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
