import React from "react";

import ButtonMore from "../Button/ButtonMore";
import ListITem from "../Item/ListITem";

import "./style.css";

const BestSelling = () => {
  return (
    <div className="container-2">
      <div className="container-2-center-header">
        <p className="container-2-header-title">BEST SELLING SKU</p>
        <ButtonMore />
      </div>
      <ListITem />
    </div>
  );
};

export default BestSelling;
