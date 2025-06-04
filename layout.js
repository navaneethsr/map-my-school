import React, { useState } from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button className="close-btn" onClick={toggleSidebar}>
            ✖
          </button>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div className="content-area">
        <header className="mobile-header">
          <button className="menu-btn" onClick={toggleSidebar}>
            ☰
          </button>
          <h1>My App</h1>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;