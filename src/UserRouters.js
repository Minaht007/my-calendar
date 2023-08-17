import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const RegisterPage = lazy(() => import("./page/RegisterPage"));

const UserRouters = () => {
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>{" "}
    ;
  </Suspense>;
};

export default UserRouters;
