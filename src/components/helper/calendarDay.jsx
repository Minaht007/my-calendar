import React from "react";
import { useContext } from "react";
import { CalendarContext } from "../context/contextWrapper";
import { format } from "date-fns";

const CalendarDay = () => {
  const { currentDay } = useContext(CalendarContext);

  return (
    <div>
      <h3>Calendar Day</h3>
      <div>
        <p>{format(currentDay, "eeee, MMMM dd")}</p>
        <div mt-10>
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="flex h-[30px] items-center  border-b-2 border-red-200"
            >
              <p>{index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarDay;
