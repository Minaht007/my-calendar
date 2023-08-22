import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


const RegisterPage = lazy(() => import("./page/RegisterPage"));
const LoginPage = lazy(() => import("./page/LoginPage"));
const MonthPage = lazy(() => import("./page/calendar"));
const WeekPage = lazy(() =>
  import("./components/calendar/calendarGrid/weekGrid")
);
const DayPage = lazy(() => import("./components/helper/calendarDay"));

const UserRouters = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MonthPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/week" element={<WeekPage />} />
        <Route path="/day" element={<DayPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRouters;
