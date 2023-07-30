import React, { useContext } from "react";
import styled from "styled-components";
import {
  isWeekend,
  startOfMonth,
  endOfMonth,
  isSameDay,
  isWithinInterval,
  parseISO,
  getMonth,
} from "date-fns";
import { CalendarContext } from "../../context/contextWrapper";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: ${(props) => (props.isHeader ? 0 : 1)}px;
  background-color: rgb(245, 242, 98);
`;

const CellWrapper = styled.div`
  display: flex;
  min-width: 148px;
  min-height: ${(props) => (props.isHeader ? 30 : 80)}px;
  justify-content: ${(props) => (props.isHeader ? "flex-end" : "flex-end")};
  align-items: ${(props) => (props.isHeader ? "center" : "")};
  padding-right: ${(props) => (props.isHeader ? "4" : "")}px;
  background-color: ${(props) =>
    isWeekend(new Date(props.date))
      ? "rgb(60, 153, 240)"
      : "rgb(161, 201, 240)"};
  color: #ffffff;
  border-radius: ${(props) => (props.isHeader ? 0 : 4)}px;
`;

const RowInCell = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifycontent || "flex-start"};
`;

const DayWrapper = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  margin-top: 4px;
`;

const CurrentDay = styled.div`
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.isCurrentDay ? "#d8f2ee" : "transparent"};
  color: ${(props) => (props.currentMonth ? "#000000" : "#0d6b28")};
`;

const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CalendarGrid = () => {
  const { calendar, setCalendar, currentMonth } = useContext(CalendarContext);

  const isCurrentDay = (day) => {
    const today = new Date();
    const currentMonthStart = startOfMonth(currentMonth);
    const currentMonthEnd = endOfMonth(currentMonth);
    return (
      isSameDay(today, parseISO(day)) &&
      isWithinInterval(parseISO(day), {
        start: currentMonthStart,
        end: currentMonthEnd,
      })
    );
  };
  const todayMonth = (day) => {
    const currentMonth = getMonth(new Date());
    const dayMonth = getMonth(parseISO(day));
    return currentMonth === dayMonth;
  };

  return (
    <>
      <GridWrapper>
        {dayOfWeek.map((day) => (
          <CellWrapper key={day} isHeader justifycontent="flex-end">
            {day}
          </CellWrapper>
        ))}
        {calendar?.map((day) => (
          <CellWrapper key={day?.date} date={day?.date}>
            <RowInCell justifycontent="flex-end">
              <DayWrapper>
                <CurrentDay
                  isCurrentDay={isCurrentDay(day?.date)}
                  currentMonth={todayMonth(day?.date)}
                >
                  {day?.date.slice(-2)}
                </CurrentDay>
              </DayWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </>
  );
};

export default CalendarGrid;
