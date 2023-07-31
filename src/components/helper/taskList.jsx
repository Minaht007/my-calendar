import React, { useState, useEffect, useContext } from "react";
import { startOfMonth, endOfMonth, isWithinInterval, parseISO } from "date-fns";
import { CalendarContext } from "../context/contextWrapper";

const TaskList = () => {
  const baseURL = "http://localhost:5000";
  const [tasks, setTasks] = useState([]);
  const { currentMonth } = useContext(CalendarContext);

  useEffect(() => {
    const filterTasksByCurrentMonth = (tasks, currentMonth) => {
      const currentMonthStart = startOfMonth(currentMonth);
      const currentMonthEnd = endOfMonth(currentMonth);

      return tasks.filter((task) => {
        const taskDate = parseISO(task?.data);
        return isWithinInterval(taskDate, {
          start: currentMonthStart,
          end: currentMonthEnd,
        });
      });
    };

    fetch(`${baseURL}/events`)
      .then((res) => res.json())
      .then((res) => {
        const events = res?.events || [];
        const filteredTasks = filterTasksByCurrentMonth(events, currentMonth);
        setTasks(filteredTasks);
      });
  }, [currentMonth]);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
