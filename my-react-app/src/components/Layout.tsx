import { useState } from "react"; //Toggle state management
import { Outlet } from "react-router"; // Nested routing
import Navbar from "./bars/Navbar.js";
import Sidebar from "./bars/Sidebar.js";


const Layout: React.FC = () => {
  const [useMock, setUseMock] = useState(false);

  return (
    <>
      <Navbar useMock={useMock} onToggle={() => setUseMock((prev) => !prev)} />
      <div className="app__container">
        <div className="app__container-sidebars">
          <Sidebar />
        </div>
        <div className="app__container-main">
          <Outlet context={{ useMock }} />
        </div>
      </div>
    </>
  );
};

export default Layout;
