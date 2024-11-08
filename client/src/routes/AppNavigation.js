import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppLayout from "../components/layout/applayout";
import DashboardLayout from "../components/layout/dashboardlayout";
import SignIn from "../pages/auth/SignIn";
import Dashboard from "../pages/dashboard";
import AppListWrapper from "../pages/registration/AppListWrapper";
import RegisterForm from "../pages/registration/RegisterForm";
import Detail from "../pages/registration/Detail";

const appLayoutRoutes = [
  { path: "/", element: <SignIn /> },
  { path: "/register", element: <RegisterForm /> },
  { path: "/applist", element: <AppListWrapper /> },
  { path: "/detail", element: <Detail /> },
];

const dashboardLayoutRoutes = [{ path: "*", element: <Dashboard /> }];

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <AppLayout>
              <Routes>
                {appLayoutRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </AppLayout>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <DashboardLayout>
              <Routes>
                {dashboardLayoutRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
