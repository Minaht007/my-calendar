import React, { useContext } from "react";
import { CalendarContext } from "../context/contextWrapper";
import { format, startOfWeek, addDays } from "date-fns";

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
    <div className=" w-full h-full px-2 py-3 ">
      <h4 className=" text-red-500 font-bold text-xl">Calendar Week</h4>
      <div className=" flex w-full h-full overflow-y-scroll">
        <div className=" grid grid-rows-25 w-[50px]">
          <div className=" w-[50px] h-[30px]"></div>
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className=" flex h-[30px] items-center">
              <p>{index + 1}</p>
            </div>
          ))}
        </div>
        <div className=" flex flex-row w-full h-full">
          {getNearestDates().map((date, indexData) => {
            const formattedDate = format(date, "d");
            return (
              <div key={date}>
                <div
                  className={`grid ${
                    indexData === 6 ? "lg:grid-rows-10" : "lg:grid-rows-6"
                  } w-[30px]`}
                >
                  <p className="h-[30px]">{formattedDate}</p>
                  {Array.from({ length: 24 }).map((_, indexTime) => (
                    <div
                      key={indexTime}
                      className="flex h-[30px] items-center border-b-[1px] border-r-[1px] border-gray-200"
                      onClick={() => {
                        alert(date + " time " + indexTime);
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
