import moment from "moment";

const getCalendarDates = () => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timezone: "UTC",
  };

  const startDate = moment().startOf("month").startOf("week");
  const endDate = moment().endOf("month").endOf("week");

  const formatDate = (date) => date.format("YYYY-MM-DD");

  const calendar = [];

  let currentDay = startDate.clone();
  while (currentDay.isSameOrBefore(endDate)) {
    calendar.push({ date: formatDate(currentDay) });
    currentDay.add(1, "day");
  }

  return calendar;
};

export default getCalendarDates;
