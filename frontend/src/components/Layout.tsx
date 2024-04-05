import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
     {/*  <Sidebar /> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
