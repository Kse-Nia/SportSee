import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./components/Layout"; // Import Navbars

import UserWelcome from "./components/UserWelcome"; // Welcome component
import HealthMetrics from "./components/HealthMetrics"; // Health metrics component
import DailyActivity from "./components/DailyActivity"; // Daily activity component
import Score from "./components/charts/Score"; // Score component
import RadarGraphe from "./components/charts/Radar"; // Radar graph component
import Duration from "./components/charts/Duration"; // Duration component

const userUrl = import.meta.env.VITE_USER_URL;

export default function App() {
  const userData = {};
  const userActivity = {};
  const userSessions = {};

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home />}
          userData={userData}
          userActivity={userActivity}
          userSessions={userSessions}
        />
      </Route>
    </Routes>
  );
}
