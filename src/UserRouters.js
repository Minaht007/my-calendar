import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const RegisterPage = lazy(() => import("./page/RegisterPage"));
const MonthPage = lazy(() => import("./page/calendar"));
const WeekPage = lazy(() =>
  import("./components/calendar/calendarGrid/weekGrid")
);
const DayPage = lazy(() => import("./components/helper/calendarDay"));

const UserRouters = () => {
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<MonthPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/week" element={<WeekPage />} />
      <Route path="/day" element={<DayPage />} />
    </Routes>{" "}
    ;
  </Suspense>;
};

export default UserRouters;
