import React from "react";
import style from "styled-components";

const GridWrapper = style.div`
display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const CellWrapper = style.div`
min-width: 148px;
min-height: 80px;
`;

const CalendarGrid = () => {
  const totalDays = 42;
  const daysArray = [...Array(42)];
  return (
    <GridWrapper>
      {daysArray.map((_, i) => {
        return <CellWrapper>{i}</CellWrapper>;
      })}
    </GridWrapper>
  );
};
export default CalendarGrid;
