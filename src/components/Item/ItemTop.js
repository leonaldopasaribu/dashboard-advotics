import React from "react";

import ImageLogo from "../../assets/images/NoPath.png";
import "./itemTop.css";

const ItemTop = () => {
  return (
    <div
      className="item-top-1"
      style={{
        marginTop: "8px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        style={{
          height: "8rem",
          width: "8rem",
          marginRight: "8px"
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            background: `transparent url("${ImageLogo}") 0% 0% no-repeat padding-box`,
            borderRadius: "4px 0px 0px 4px",
            backgroundPosition: "center"
          }}
        ></div>
      </div>
      <div>
        <p style={{ fontSize: "2rem", color: "#000000DE" }}>[Nama Product]</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            fontSize: "1.4rem",
            color: "#00000099"
          }}
        >
          <p>Rp XXXX</p>
          <p>[jml terjual]</p>
        </div>
      </div>
    </div>
  );
};

export default ItemTop;
