import React from "react";
import random from "random-number-in-range";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import "./style.css";

const LabelToolNip = ({ color, title, value }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div className="dot" style={{ backgroundColor: color }}></div>{" "}
    <div className="label-t">{title}</div>{" "}
    <div className="value-t" style={{ color }}>
      {value}{" "}
    </div>
  </div>
);

const CustomTooltiop = props => {
  const { active, payload } = props;
  if (!active) return null;

  const data = payload[0].payload;
  return (
    <div className="custom-tool-nip">
      <p className="t-date">Date/Month/Year</p>
      <LabelToolNip color="#37B04C" title={"Nett"} value={data.nett} />
      <LabelToolNip color="#289E45" title={"Gross"} value={data.gross} />
      <LabelToolNip
        color="#7AE28C"
        title={"APV"}
        value={data.averagePurchaseValue}
      />
      <LabelToolNip
        color="#707070"
        title={"UPT"}
        value={data.unitPerTransaction}
      />
    </div>
  );
};

const data = [
  {
    name: "Jan 12",
    nett: random(15, 30),
    gross: random(0, 19),
    averagePurchaseValue: random(15, 30),
    unitPerTransaction: random(10, 20)
  },
  {
    name: "Tue",
    nett: random(15, 30),
    gross: random(0, 19),
    averagePurchaseValue: random(15, 30),
    unitPerTransaction: random(10, 20)
  },
  {
    name: "Wed",
    nett: random(),
    gross: random(),
    averagePurchaseValue: random(),
    unitPerTransaction: random()
  },
  {
    name: "Thud",
    nett: random(),
    gross: random(),
    averagePurchaseValue: random(),
    unitPerTransaction: random()
  },
  {
    name: "Fri",
    nett: random(15, 30),
    gross: random(0, 19),
    averagePurchaseValue: random(15, 30),
    unitPerTransaction: random(10, 20)
  },
  {
    name: "Sat",
    nett: random(15, 30),
    gross: random(0, 19),
    averagePurchaseValue: random(15, 30),
    unitPerTransaction: random(10, 20)
  },
  {
    name: "Sun",
    nett: random(15, 30),
    gross: random(0, 19),
    averagePurchaseValue: random(15, 30),
    unitPerTransaction: random(10, 20)
  }
];

export default () => {
  return (
    <div style={{ textAlign: "center", display: "block" }}>
      <ComposedChart width={520} height={320} data={data} al>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" padding={{ left: 30 }} />
        <YAxis />
        <Tooltip content={CustomTooltiop} />
        <Bar dataKey="nett" stackId="a" barSize={25} fill="#37B04C" />
        <Bar dataKey="gross" stackId="a" barSize={25} fill="#289E45" />
        <Bar
          dataKey="averagePurchaseValue"
          stackId="a"
          barSize={25}
          fill="#7AE28C"
        />
        <Bar
          dataKey="unitPerTransaction"
          stackId="a"
          barSize={25}
          fill="#707070"
        />
        <Line dataKey="nett" stroke="#FFE854" />
        <Legend align="center" iconType="circle" iconSize={8} />
      </ComposedChart>
    </div>
  );
};
