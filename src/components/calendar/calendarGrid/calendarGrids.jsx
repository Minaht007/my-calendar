import React from "react";
import style from "styled-components";

const GridWrapper = style.div`
display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  background-color: rgb(245, 242, 98);
`;

const CellWrapper = style.div`

min-width: 148px;
min-height: 80px;
background-color: rgb(183, 232, 235);
color: rgb(237, 55, 67);
text-align: right;
padding: 4px;
border-radius: 4px;
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
