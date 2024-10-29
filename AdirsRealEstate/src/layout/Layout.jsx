import NavBar from "../components/navBar/NavBar"
import './layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
