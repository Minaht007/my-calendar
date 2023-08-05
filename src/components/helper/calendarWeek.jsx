import React, { useContext } from "react";
import { CalendarContext } from "../context/contextWrapper";
import { format, startOfDay, addDays, isSameDay } from "date-fns";

const CalendarWeek = () => {
  const { currentDay } = useContext(CalendarContext);
  const today = new Date();

  const getNearestDates = () => {
    const firstDayOfWeek = addDays(startOfDay(currentDay), -2);
    const nearestDates = [];

    for (let i = 0; i < 7; i++) {
      const date = addDays(firstDayOfWeek, i);
      nearestDates.push(date);
    }

    return nearestDates;
  };

  return (
    <div className="w-full h-full px-2 py-3">
      <h4 className="text-red-500 font-bold text-xl">Calendar Week</h4>
      <button>prev</button>
      <button>next</button>

      <div className="flex w-full h-full overflow-y-scroll">
        <div className="grid grid-rows-25 w-[50px]">
          <div className="w-[50px] h-[30px]"></div>
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="flex h-[30px] items-center">
              <p>{index + 1}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row w-full h-full">
          {getNearestDates().map((date, indexData) => {
            const formattedDate = format(date, "d");
            const isTodayDate = isSameDay(date, today);

            return (
              <div key={date}>
                <div
                  className={`grid ${
                    indexData === 6 ? "lg:grid-rows-10" : "lg:grid-rows-6"
                  } w-[30px]`}
                >
                  <p className={`h-[30px]`}>{formattedDate}</p>
                  {Array.from({ length: 24 }).map((_, indexTime) => (
                    <div
                      key={indexTime}
                      className="flex h-[30px] items-center border-b-[1px] border-r-[1px] border-gray-200"
                      onClick={() => {
                        alert(formattedDate + " time " + indexTime);
                      }}
                      style={{
                        borderBottom:
                          indexTime === 23 ? "none" : "1px solid #E5E7EB",
                        borderRight:
                          indexData === 6 ? "none" : "1px solid #E5E7EB",
                      }}
                    >
                      <p></p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarWeek;
