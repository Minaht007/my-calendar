import React, { useContext } from "react";
import { CalendarContext } from "../context/contextWrapper";
import { format, startOfDay, addDays, isSameDay } from "date-fns";

const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarWeek = () => {
  const { currentDay } = useContext(CalendarContext);
  const today = new Date();

  console.log(currentDay);

  const getNearestDates = () => {
    const firstDayOfWeek = addDays(startOfDay(currentDay), -2);
    const nearestDates = [];
    console.log(firstDayOfWeek);
    for (let i = 0; i < 7; i++) {
      const date = addDays(firstDayOfWeek, i);
      const isTodayDate = isSameDay(date, today);
      const dayOfWeekIndex = date.getDay();
      nearestDates.push({ date, isTodayDate, dayOfWeekIndex });
    }

    return nearestDates;
  };

  return (
    <div className="w-full h-full px-2 py-3">
      <h4 className="text-red-500 font-bold text-xl">Calendar Week</h4>
      <div className="flex w-full h-full overflow-y-scroll">
        <div className="grid grid-rows-25 grid-cols-[50px]">
          <div></div>

          <div className="w-[50px] h-[30px]"></div>

          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="flex h-[30px] items-center">
              <p>{index + 1}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row w-full h-full">
          {getNearestDates().map((date, indexData) => {
            const formattedDate = format(date.date, "d");
            const isTodayDate = isSameDay(date.date, today);

            return (
              <div
                key={date.date}
                className={`flex-grow relative ${
                  indexData === 2 ? "lg:h-[90px]" : "lg:h-[30px]"
                }`}
              >
                <p
                  // DataCells
                  className={`base:h-[30px] sm:h-[36px] md:h-[40px] lg:h-[40px] desk:h-[40px] desk2k:h-[40px] ${
                    isTodayDate && indexData === 2
                      ? "bg-green-300 border-[50%] border-2"
                      : "bg-transparent"
                  }`}
                >
                  {formattedDate}
                </p>
                <p>{dayOfWeek[date.dayOfWeekIndex]}</p>
                {Array.from({ length: 24 }).map((_, indexTime) => (
                  <div
                    key={indexTime}
                    className="flex base:h-[30px] sm:h-[40px] md:h-[48px] lg:h-[56px] desk:h-[64px] desk2k:h-[72px] items-center border-b-[1px] border-r-[1px] border-gray-200"
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarWeek;

// Точкаотсчета
