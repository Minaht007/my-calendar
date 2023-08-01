import React, { useContext } from "react";
import { CalendarContext } from "../context/contextWrapper";
import { getCalendarDates } from "../helper/calendarHelper";
import { format } from "date-fns";
import style from "../helper/helper.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CalendarWeek = () => {
  const { currentMonth, currentYear } = useContext(CalendarContext);

  const calendarDates = getCalendarDates(currentMonth);

  const getNearestDates = () => {
    const currentDayIndex = calendarDates.findIndex(
      (dateInfo) =>
        format(new Date(dateInfo.date), "dd") === format(new Date(), "dd")
    );
    return calendarDates.slice(currentDayIndex, currentDayIndex + 7);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Calendar Week</h2>
      <Slider {...sliderSettings}>
        {getNearestDates().map((dateInfo) => {
          const formattedDate = format(new Date(dateInfo.date), "dd");
          return (
            <div key={dateInfo.date} className={style.weekdayCalendar}>
              <p>{formattedDate}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CalendarWeek;
