import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Auth from "./Auth";

const DivWrapper = styled.div`
  background-color: #2a2b2d;
  height: 36px;
  color: #f5f7f6;
  text-align: left;
`;

const CalendarHeader = ({ onChangeView }) => {
  const [isMonthlyView, setIsMonthlyView] = useState(true);

  const handleClick = () => {
    const newView = !isMonthlyView;
    setIsMonthlyView(newView);
    if (typeof onChangeView === "function") {
      onChangeView(newView);
    }
  };

  return (
    <>
      <DivWrapper className="flex justify-around items-center pl-4 pr-4">
        <Link to="/">Month</Link>
        <Link to="/week">Week</Link>
        <Link to="/day">Day</Link>
        <Auth />
      </DivWrapper>
    </>
  );
};

export default CalendarHeader;
