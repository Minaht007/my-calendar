import React from "react";
import moment from "moment";

const Calendar = () => {
  //   window.moment = moment();

  //   moment.updateLocale("en", { week: { dow: 1 }, month: { dow: 0 } });
  //   const startDay = moment().startOf("month").startOf("week");
  //   const endDay = moment().endOf("month").endOf("week");
  //   const calendar = [];
  //   const day = startDay.clone();
  //   while (!day.isAfter(endDay)) {
  //     calendar.push(day.clone());
  //     day.add(1, "day");
  //   }

  //   console.log(calendar);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timezone: "UTC",
  };

  const startDate = new Date();
  const getYear = startDate.getFullYear();
  const getMonth = startDate.getMonth();
  const endDate = new Date(getYear, getMonth, +1, 0, 23, 59, 59);

  // смотрю консоль
  //   console.log(startDate);
  //   console.log(getYear);
  //   console.log(getMonth);
  //   console.log(endDate);

  const isSameMonth = (date1, date2) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth();

  const formatDate = (date) => date.toLocaleDateString(undefined, options);

  const calendar = [];

  while (isSameMonth(startDate, endDate)) {
    calendar.push({ date: formatDate(startDate) });
    startDate.setDate(startDate.getDate() + 1);
  }

  console.log(calendar);
  // возвращаем
  return (
    <div>
      <h1>Helo from calendar</h1>
    </div>
  );
};

export default Calendar;
