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
  justify-content: ${(props) =>
    props.justifycontent ? props.justifycontent : "flex-start"};
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
  background-color: ${isWeekend ? "#0ecf4e" : "#1E1F21"};
  color: ##000000;

  &.isCurrentDay {
    border-radius: 50%;
    background-color: #0091ea;
  }
`;
const isCurrentDay = (day) => {
  const todayDay = new Date();
  return todayDay.getDate() === day.getDate();
};

const CalendarGrid = ({ calendar }) => {
  const [todayDay, setTodayDay] = useState(new Date());

  useEffect(() => {
    setTodayDay(new Date());
  }, []);

  return (
    <GridWrapper>
      {calendar.map((day) => (
        <CellWrapper
          key={day.date}
          date={day.date}
          isWeekend={
            new Date(day.date).getDay() === 6 ||
            new Date(day.date).getDay() === 0
          }
        >
          <RowInCell justifyContent="flex-end">
            <DayWrapper>
              {day.date === todayDay.getDate() ? (
                <CurrentDay className={isCurrentDay}>
                  {day.date.slice(-2)}
                </CurrentDay>
              ) : (
                <CurrentDay>{day.date.slice(-2)}</CurrentDay>
              )}
            </DayWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};

export default CalendarGrid;
