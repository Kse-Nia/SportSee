import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js"; // Import and organize navbars and content
import Home from "./pages/Home.js"; // Import Home page
import HomeError from "./components/errors/HomeError.js";
const userUrl = import.meta.env.VITE_USER_URL;

export default function App() {
  // Variable to store user data objects
  const userData = {};
  const userActivity = {};
  const userSessions = {};

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              userData={userData}
              userActivity={userActivity}
              userSessions={userSessions}
            />
          }
        />
        <Route path="*" element={<HomeError />} />
      </Route>
    </Routes>
  );
}
