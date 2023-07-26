import {
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  addDays,
  format,
  getMonth,
} from "date-fns";

const getCurrentMonth = (date) => format(date, "MMMM");
const getCurrentYear = (date) => format(date, "yyyy");
const formatDate = (date) => format(date, "yyyy-MM-dd");

const getCalendarDates = (data) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };

  const today = data || new Date();
  const startDate = startOfWeek(startOfMonth(today), { weekStartsOn: 1 });
  const endDate = endOfWeek(endOfMonth(today), { weekStartsOn: 1 });

  const calendar = [];

  let currentDay = startDate;
  while (currentDay <= endDate) {
    calendar.push({
      date: formatDate(currentDay),
      monthName: getCurrentMonth(currentDay),
      year: getCurrentYear(currentDay),
    });
    currentDay = addDays(currentDay, 1);
  }

  return calendar;
};

export { formatDate, getCalendarDates };
