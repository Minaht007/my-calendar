import React, { useContext } from "react";
import { CalendarContext } from "../context/contextWrapper";
import { format, startOfWeek, addDays } from "date-fns";
import style from "../helper/helper.module.scss";
import styled from "styled-components";

const CalendarWeek = () => {
  const { currentMonth, currentYear } = useContext(CalendarContext);

  const getNearestDates = () => {
    const firstDayOfWeek = startOfWeek(currentMonth);
    const nearestDates = [firstDayOfWeek];

    for (let i = 1; i < 7; i++) {
      nearestDates.push(addDays(firstDayOfWeek, i));
    }

    return nearestDates;
  };

  return (
    <div>
      <h4>Calendar Week</h4>
      <div className={style.weekdayCalendar}>
        {getNearestDates().map((date) => {
          const formattedDate = format(date, "d");
          return (
            <div key={date}>
              <p>{formattedDate}</p>
              {/*place for events */}
            </div>
          );
        })}
      </div>
      <div className={style.timeScale}>
        {Array.from({ length: 24 }).map((_, index) => (
          <div key={index} className={style.weekdayCell}>
            {index + 1}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWeek;
