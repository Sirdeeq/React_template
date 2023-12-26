import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppLayout from "../components/layout/applayout";
import DashboardLayout from "../components/layout/dashboardlayout";
import SignIn from "../pages/auth/SignIn";
import Dashboard from "../pages/dashboard";
import Index from "../pages/Index";
import AppListWrapper from "../pages/registration/AppListWrapper";

const appLayoutRoutes = [{ path: "/", element: <SignIn /> }];

const dashboardLayoutRoutes = [
  // { path: "*", element: <Index /> },
  { path: "*", element: <Dashboard /> },
  { path: "/register", element: <Index /> },
  { path: "/applist", element: <AppListWrapper /> },
];

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
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
