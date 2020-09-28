import React from "react";

import ImageLogo from "../../assets/images/NoPath.png";
import "./item.css";

const Item = () => {
  return (
    <div
      className="item"
      style={{
        marginTop: "8px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        style={{
          height: "6rem",
          width: "6rem",
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
        <p style={{ fontSize: "1.6rem", color: "#000000DE" }}>[Nama Product]</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            fontSize: "1.2rem",
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

export default Item;
