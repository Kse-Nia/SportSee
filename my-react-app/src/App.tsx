import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js"; // Import and organize navbars and content
import Home from "./pages/Home.js"; // Import Home page
import HomeError from "./components/errors/HomeError.js"; // Home error page for fetch or route issues
const userUrl = import.meta.env.VITE_USER_URL;

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<HomeError />} />
      </Route>
    </Routes>
  );
}
