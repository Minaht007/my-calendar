// {/* <div className="w-full h-screen px-2 py-3">
//   <h4 className="text-red-500 font-bold text-xl">Calendar Week</h4>
//   <div className="flex w-full overflow-x-scroll">
//     <div className="grid grid-rows-25 w-[50px]">{/* ... */}</div>
//     <div className="flex flex-row w-full h-full">
//       {getNearestDates().map((date, indexData) => {
//         const formattedDate = format(date, "d");
//         return (
//           <div key={date}>
//             <div
//               className={`grid ${
//                 indexData === 6 ? "lg:grid-rows-10" : "lg:grid-rows-6"
//               } w-[30px]`}
//             >
//               <p className="h-[30px]">{formattedDate}</p>
//               {Array.from({ length: 24 }).map((_, indexTime) => (
//                 <div
//                   key={indexTime}
//                   className="flex h-[30px] items-center border-b-[1px] border-r-[1px] border-gray-200"
//                   onClick={() => {
//                     alert(date + " time " + indexTime);
//                   }}
//                   style={{
//                     borderBottom:
//                       indexTime === 23 ? "none" : "1px solid #E5E7EB",
//                     borderRight: indexData === 6 ? "none" : "1px solid #E5E7EB",
//                   }}
//                 >
//                   <p></p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </div>; */}

{
  /* <PeriodMonitor
  month={currentMonth.toLocaleString("en", { month: "long" })}
  year={currentYear.toString()}
  prevHandelMonth={prevHandelMonth}
  nextHandelMonth={nextHandelMonth}
  todayCurrentMonth={todayCurrentMonth}
/>; */
}
{
  /* <TaskList currentMonth={currentMonth} />; */
}

// const prevHandelMonth = () => {
//   const prevMonth = sub(currentMonth, { months: 1 });
//   setCurrentMonth(prevMonth);
//   if (prevMonth.getMonth() === 11) {
//     setCurrentYear((prevYear) => prevYear - 1);
//   }
// };

// const nextHandelMonth = () => {
//   const nextMonth = add(currentMonth, { months: 1 });
//   setCurrentMonth(nextMonth);
//   if (nextMonth.getMonth() === 0) {
//     setCurrentYear((prevYear) => prevYear + 1);
//   }
// };

// const todayCurrentMonth = () => {
//   setCurrentMonth(new Date());
//   setCurrentYear(new Date().getFullYear());
// };
