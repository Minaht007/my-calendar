import React, { useContext, useState } from "react";
import { CalendarContext } from "../context/contextWrapper";
import { format, startOfDay, addDays, isSameDay } from "date-fns";
import useWeekNavigate from "../helper/calendarWeekNavigate";
import CalendarModal from "./calendarModal";

const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarWeek = ({ EventModal }) => {
  const { currentDay, setCurrentDay } = useContext(CalendarContext);
  const { handleNextWeek, handlePreviousWeek, todayCurrentWeek } =
    useWeekNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  const handleCellClick = (date, time) => {
    setSelectedCell({ date, time });
    setIsModalOpen(true);
  };

  // const handleCellClick = () => {
  //   setIsModalOpen(true);
  // };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSave = (eventData) => {
    console.log(eventData);
    setIsModalOpen(false);
  };

  const today = new Date();

  const getNearestDates = () => {
    const firstDayOfWeek = addDays(startOfDay(currentDay), -2);
    const nearestDates = [];

    for (let i = 0; i < 7; i++) {
      const date = addDays(firstDayOfWeek, i);
      const isTodayDate = isSameDay(date, today);
      const dayOfWeekIndex = date.getDay();
      nearestDates.push({ date, isTodayDate, dayOfWeekIndex });
    }

    return nearestDates;
  };

  return (
    <div className="w-full h-full px-2 py-3 bg-sky-50">
      <h4 className="text-red-500 font-bold text-xl">Calendar Week</h4>
      <button onClick={handlePreviousWeek} className="mr-10">
        &lArr; prev
      </button>
      <button onClick={todayCurrentWeek}>&hArr; Today</button>
      <button onClick={handleNextWeek} className="ml-10">
        &rArr; next
      </button>
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
                <div
                  // DataCells

                  className={`base:h-[40px] sm:h-[46px] md:h-[50px] lg:h-[56px] desk:h-[60px] desk2k:h-[60px] ${
                    isTodayDate && indexData === 2
                      ? "text-red-600"
                      : "bg-transparent"
                  } flex flex-col items-center justify-center`}
                >
                  <p>{formattedDate}</p>
                  <p className=" base:text-xs sm:text-base md:text-base lg:h-[56px] desk:h-[60px] desk2k:h-[40px] text-rose-900">
                    {dayOfWeek[date.dayOfWeekIndex]}
                  </p>
                </div>

                {Array.from({ length: 24 }).map((_, indexTime) => (
                  <div
                    key={indexTime}
                    className="flex base:h-[30px] sm:h-[40px] md:h-[48px] lg:h-[56px] desk:h-[64px] desk2k:h-[72px] items-center border-b-[1px] border-r-[1px] border-gray-200"
                    onClick={() => handleCellClick(date.date, indexTime)}
                    // onClick={() => {
                    //   alert(formattedDate + " time " + indexTime);
                    // }}
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
        {isModalOpen && (
          <CalendarModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onSave={handleModalSave}
            selectedCell={selectedCell}
          />
        )}
      </div>
    </div>
  );
};

export default CalendarWeek;

// Точкаотсчета
