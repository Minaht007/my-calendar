import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  isWeekend,
  startOfMonth,
  endOfMonth,
  isSameDay,
  isWithinInterval,
  parseISO,
  getMonth,
} from "date-fns";
import { CalendarContext } from "../../context/contextWrapper";
import CalendarModal from "../../helper/calendarModal";
import { useWindowSize } from "react-use";
import { nanoid } from "nanoid";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "@firebase/firestore";
import { db } from "../../../firebase.config";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: ${(props) => (props.isheader ? 0 : 1)}px;
  background-color: rgb(245, 242, 98);
`;

const CellWrapper = styled.div`
  display: flex;
  min-width: 14%;
  min-height: ${(props) => (props.isheader ? "3vh" : "8vh")};
  justify-content: ${(props) => (props.isheader ? "flex-end" : "flex-end")};
  align-items: ${(props) => (props.isheader ? "center" : "flex-start")};
  padding-right: ${(props) => (props.isheader ? "4" : "0")}px;
  background-color: ${(props) =>
    isWeekend(new Date(props.date))
      ? "rgb(60, 153, 240)"
      : "rgb(161, 201, 240)"};
  color: #ffffff;
  border-radius: ${(props) => (props.isheader ? 0 : 4)}px;
`;

const RowInCell = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifycontent || "flex-start"};
`;

const DayWrapper = styled.div`
  height: 30%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20%;
  margin-top: 30%;
`;

const CurrentDay = styled.div`
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  background-color: ${(props) =>
    props.isCurrentDay ? "#d8f2ee" : "transparent"};
  color: ${(props) => (props.currentMonth ? "#000000" : "#0d6b28")};
`;

const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CalendarGrid = ({ EventModal }) => {
  const { calendar, setCalendar, currentMonth } = useContext(CalendarContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState({ title: "", date: "" });
  const [selectedTitle, setSelectedTitle] = useState("");

  const isCurrentDay = (day) => {
    const today = new Date();
    const currentMonthStart = startOfMonth(currentMonth);
    const currentMonthEnd = endOfMonth(currentMonth);
    return (
      isSameDay(today, parseISO(day)) &&
      isWithinInterval(parseISO(day), {
        start: currentMonthStart,
        end: currentMonthEnd,
      })
    );
  };
  const todayMonth = (day) => {
    const currentMonth = getMonth(new Date());
    const dayMonth = getMonth(parseISO(day));
    return currentMonth === dayMonth;
  };

  const handleCellClick = (title) => {
    setSelectedTitle(title);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSave = async (eventData, title) => {
    const { date, startTime, endTime, taskComment, name } = eventData;
    const id = nanoid();

    try {
      const docRef = doc(db, "calendar", date, name);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const existingName = docSnap.data()[id]?.name;

        await updateDoc(docRef, {
          [id]: {
            id: id,
            name: title,
            startTime: startTime,
            endTime: endTime,
            textTask: taskComment,
          },
        });

        if (existingName) {
          const updatedCalendar = calendar.map((day) => {
            if (day.date === date) {
              return {
                ...day,
                tasks: {
                  ...day.tasks,
                  [id]: {
                    ...day.tasks[id],
                    name: title,
                  },
                },
              };
            }
            return day;
          });
          setCalendar(updatedCalendar);
        }
      } else {
        await setDoc(docRef, {
          [id]: {
            id: id,
            name: title,
            startTime: startTime,
            endTime: endTime,
            textTask: taskComment,
          },
        });

        const updatedCalendar = calendar.map((day) => {
          if (day.date === date) {
            return {
              ...day,
              tasks: {
                ...day.tasks,
                [id]: {
                  id: id,
                  name: title,
                  startTime: startTime,
                  endTime: endTime,
                  textTask: taskComment,
                },
              },
            };
          }
          return day;
        });

        setCalendar(updatedCalendar);
      }

      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  const { width } = useWindowSize();
  const screenWidth = width;
  const isMobile = screenWidth < 768;

  return (
    <>
      <GridWrapper>
        {!isMobile &&
          dayOfWeek.map((day) => (
            <CellWrapper key={day} isheader justifycontent="flex-end">
              {day}
            </CellWrapper>
          ))}
        {calendar?.map((day) => (
          <CellWrapper
            key={day?.date}
            date={day?.date}
            onClick={() => handleCellClick(day?.title)}
            isheader={false}
          >
            <RowInCell justifycontent="flex-end">
              <DayWrapper>
                <CurrentDay
                  isCurrentDay={isCurrentDay(day?.date)}
                  currentMonth={todayMonth(day?.date)}
                >
                  {day?.date.slice(-2)}{" "}
                  {day?.tasks &&
                    day?.tasks[selectedTitle] &&
                    day?.tasks[selectedTitle].name}
                </CurrentDay>
              </DayWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
      {isModalOpen && (
        <CalendarModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSave={(eventData) => handleModalSave(eventData, selectedTitle)}
          selectedTitle={selectedTitle}
        />
      )}
    </>
  );
};

export default CalendarGrid;
