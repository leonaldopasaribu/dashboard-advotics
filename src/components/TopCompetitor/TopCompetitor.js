import React from "react";

import ButtonMore from "../Button/ButtonMore";
import ListITem from "../Item/ListITem";

import "./style.css";

const TopCompetitor = () => {
  return (
    <div className="container-2" style={{ width: 338 }}>
      <div className="container-2-center-header">
        <p className="container-2-header-title">TOP COMPETITOR SKU</p>
        <ButtonMore />
      </div>
      <ListITem />
    </div>
  );
};

export default TopCompetitor;
