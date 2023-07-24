import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { isWeekend } from "date-fns";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  background-color: rgb(245, 242, 98);
`;

const CellWrapper = styled.div`
  min-width: 148px;
  min-height: 80px;
  background-color: ${(props) =>
    isWeekend(new Date(props.date))
      ? "rgb(60, 153, 240)"
      : "rgb(161, 201, 240)"};
  color: rgb(237, 55, 67);
  border-radius: 4px;
`;

const RowInCell = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifycontent || "flex-start"};
`;

const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CurrentDay = styled.div`
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  color: ##000000;

  &.isCurrentDay {
    border-radius: 50%;
    background-color: #d8f2ee;
  }
`;

const isCurrentDay = (day) => {
  const todayDay = new Date();
  return todayDay.getDate() === new Date(day).getDate();
};

const CalendarGrid = ({ calendar }) => {
  const [todayDay, setTodayDay] = useState(new Date());

  useEffect(() => {
    setTodayDay(new Date());
  }, []);

  return (
    <GridWrapper>
      {calendar.map((day) => (
        <CellWrapper key={day.date} date={day.date}>
          <RowInCell justifycontent="flex-end">
            <DayWrapper>
              <CurrentDay
                className={isCurrentDay(day.date) ? "isCurrentDay" : ""}
              >
                {day.date.slice(-2)}
              </CurrentDay>
            </DayWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};

export default CalendarGrid;
