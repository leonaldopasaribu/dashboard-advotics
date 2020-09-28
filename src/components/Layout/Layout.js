import React from "react";
import useDimensions from "react-use-dimensions";

import TopBar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

import "./style.css";

const Layout = ({ children }) => {
  const [topBarRef, { height }] = useDimensions();

  return (
    <div className="layout">
      <TopBar ref={topBarRef} />
      <div className="layout-content">
        <div
          style={{
            marginTop: `${height - 2 || 0}px`,
            display: "flex",
            flex: 1
          }}
        >
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
