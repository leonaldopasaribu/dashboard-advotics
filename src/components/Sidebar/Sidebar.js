import React from "react";

import ProgressIcon from "../../assets/images/progress-icon.png";
import DashboardIcon from "../../assets/images/Dashboard icon.svg";

import "./style.css";

const ButtonMenu = ({ icon, isSelected }) => {
  return (
    <div className={`button-area ${isSelected && "button-area--selected"}`}>
      <button className="button-menu">
        <img src={icon} width={17} alt="hummberger" />
      </button>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="menu-bar-large">
      <img src={ProgressIcon} width={24} alt="hummberger" />
      <ButtonMenu icon={DashboardIcon} isSelected />
    </div>
  );
};

export default Sidebar;
