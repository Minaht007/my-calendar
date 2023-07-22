import React from "react";
import styled from "styled-components";

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
  background-color: rgb(161, 201, 240);
  color: rgb(237, 55, 67);
  border-radius: 4px;
`;

const RowInCell = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
`;

const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarGrid = ({ calendar }) => {
  return (
    <GridWrapper>
      {calendar.map((day) => (
        <CellWrapper key={day.date}>
          <RowInCell justifyContent="flex-end">
            <DayWrapper>{day.date.slice(-2)}</DayWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};

export default CalendarGrid;
