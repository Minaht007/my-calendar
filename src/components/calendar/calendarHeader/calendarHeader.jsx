import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Auth from "./Auth";
import UserRouters from "../../../UserRouters";

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
        <NavLink to="/">Month</NavLink>
        <NavLink to="/week">Week</NavLink>
        <NavLink to="/day">Day</NavLink>

        <Auth />
      </DivWrapper>
      <UserRouters />
    </>
  );
};

export default CalendarHeader;
