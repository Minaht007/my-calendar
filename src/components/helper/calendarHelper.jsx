import {
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  addDays,
  format,
} from "date-fns";

const getCalendarDates = () => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "UTC",
  };

  const startDate = startOfWeek(startOfMonth(new Date()), { weekStartsOn: 1 }); // Начало недели - понедельник
  const endDate = endOfWeek(endOfMonth(new Date()), { weekStartsOn: 1 }); // Конец недели - понедельник

  const formatDate = (date) => format(date, "yyyy-MM-dd");

  const calendar = [];

  let currentDay = startDate;
  while (currentDay <= endDate) {
    calendar.push({ date: formatDate(currentDay) });
    currentDay = addDays(currentDay, 1);
  }

  return calendar;
};

export default getCalendarDates;
