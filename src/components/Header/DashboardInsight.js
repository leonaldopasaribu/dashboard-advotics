import React from "react";

import Idea from "../../assets/images/idea.png";
import ArrowGreen from "../../assets/images/arrow-green.png";

const DashboardInsight = () => {
  return (
    <div className="dashboard-insight">
      <div>
        <p className="p2-d">MARKET INSIGHT</p>
      </div>
      <div className="content-right-insight">
        <img src={Idea} alt="ini" width={20} style={{ marginRight: "4px" }} />
        <p
          style={{
            marginRight: "1.6rem",
            textDecoration: "underline",
            fontSize: "1.4rem"
          }}
          className="img-button"
        >
          Click Here for Help
        </p>
        <img
          src={ArrowGreen}
          alt="ini"
          width={17}
          height={11}
          className="img-button"
        />
      </div>
    </div>
  );
};

export default DashboardInsight;
