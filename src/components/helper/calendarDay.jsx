import React from "react";
import { useContext, useState } from "react";
import { CalendarContext } from "../context/contextWrapper";
import { format } from "date-fns";
import CalendarModal from "./calendarModal";
import useWeekNavigate from "./calendarWeekNavigate";

const CalendarDay = ({ EventModal }) => {
  const { currentDay } = useContext(CalendarContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const { handleNextWeek, handlePreviousWeek, todayCurrentWeek } =
    useWeekNavigate();

  const handleCellClick = (date, time) => {
    setSelectedCell({ date, time });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSave = (eventData) => {
    console.log(eventData);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-teal-50">
      <h3 className="base:text-[0.74em] sm:text-[0.875em] md:text-[0.875em] lg:text-[1em] desk:text-[1.125em] desk2k:text-[1.5em]">
        Calendar Day
      </h3>
      <div className="pt-[15px]">
        <p>{format(currentDay, "eeee, MMMM dd")}</p>
        <div className="pt-[15px]">
          <button className="mr-[60px]" onClick={handlePreviousWeek}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              transform="scale(-1, 1)"
            >
              <title>milestone-thin-border</title>
              <path
                fill="none"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-miterlimit="4"
                stroke-width="1"
                stroke="#000"
                d="M24 8h-17.333c-1.473 0-2.667 1.194-2.667 2.667v0 4c0 1.473 1.194 2.667 2.667 2.667v0h17.333l5.333-4.667-5.333-4.667z"
              ></path>
              <path
                fill="none"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-miterlimit="4"
                stroke-width="1"
                stroke="#000"
                d="M16 17.333v10.667"
              ></path>
              <path
                fill="none"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-miterlimit="4"
                stroke-width="1"
                stroke="#000"
                d="M16 4v4"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <title>home3</title>
              <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"></path>
            </svg>
          </button>
          <button className="ml-[60px]">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <title>milestone-thin-border</title>
              <path
                fill="none"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-miterlimit="4"
                stroke-width="1"
                stroke="#000"
                d="M24 8h-17.333c-1.473 0-2.667 1.194-2.667 2.667v0 4c0 1.473 1.194 2.667 2.667 2.667v0h17.333l5.333-4.667-5.333-4.667z"
              ></path>
              <path
                fill="none"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-miterlimit="4"
                stroke-width="1"
                stroke="#000"
                d="M16 17.333v10.667"
              ></path>
              <path
                fill="none"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-miterlimit="4"
                stroke-width="1"
                stroke="#000"
                d="M16 4v4"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mt-10 pl-4 pr-4 flex-items-center">
          <CalendarModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onSave={handleModalSave}
          />

          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              onClick={() => handleCellClick(currentDay, index)}
              className="flex base:h-[40px] sm:h-[46px] md:h-[50px] lg:h-[56px] desk:h-[80px] desk2k:h-[100px] base:text-[0.74em] sm:text-[0.875em] md:text-[0.875em] lg:text-[1em] desk:text-[1.125em] desk2k:text-[1.5em] items-center  border-b-2 border-red-200"
            >
              <p>{index + 1}</p>
            </div>
          ))}
        </div>
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
  );
};

export default CalendarDay;
