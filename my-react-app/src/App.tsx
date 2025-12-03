import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import and organize navbars and content
import Home from "./pages/Home"; // Import Home page
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
