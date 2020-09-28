import React, { useState } from "react";
import { DateRange } from "react-date-range";
import {
  isToday,
  isFuture,
  isAfter,
  subDays,
  startOfMonth,
  subMonths
} from "date-fns";

import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";
import IconCalender from "../../assets/images/calendar.png";

import "./style.css";

const EVENT = ["handleYesterday", "last7days", "last30days", "thisMonth"];

const FilterPeriod = ({ handleClose }) => {
  const [activeSelected, setActiveSelected] = useState("");
  const [selectionRange2, setSelectionRange2] = useState({
    startDate: subDays(new Date(), 1),
    endDate: subDays(new Date(), 1),
    key: "selection"
  });

  const handleSelectionRange = data => {
    const { startDate, endDate } = data.selection;
    if (isToday(startDate) || isFuture(startDate)) return null;
    if (isToday(endDate) || isFuture(endDate)) return null;
    // not more than maximum 6 months
    const lastDateMaximum = subMonths(endDate, 6);
    if (isAfter(startDate, lastDateMaximum)) {
      setSelectionRange2(data.selection);
      setActiveSelected("");
    }
  };

  const handleYesterday = () => {
    const dateYesterday = subDays(new Date(), 1);
    setSelectionRange2({
      startDate: dateYesterday,
      endDate: dateYesterday,
      key: "selection"
    });
    setActiveSelected(EVENT[0]);
  };

  const handleLast7days = () => {
    const yesterday = subDays(new Date(), 1);
    const last7day = subDays(new Date(), 7);
    setSelectionRange2({
      startDate: last7day,
      endDate: yesterday,
      key: "selection"
    });
    setActiveSelected(EVENT[1]);
  };

  const handleLast30days = () => {
    const yesterday = subDays(new Date(), 1);
    const last30day = subDays(new Date(), 30);
    setSelectionRange2({
      startDate: last30day,
      endDate: yesterday,
      key: "selection"
    });
    setActiveSelected(EVENT[2]);
  };

  const handleThisMonth = () => {
    const yesterday = subDays(new Date(), 1);
    const firstDateOfMonth = startOfMonth(yesterday);
    setSelectionRange2({
      startDate: firstDateOfMonth,
      endDate: yesterday,
      key: "selection"
    });
    setActiveSelected(EVENT[3]);
  };

  return (
    <div className="conatainer-filter-period">
      <div
        style={{
          display: "flex",
          marginBottom: "2rem",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={IconCalender}
            width={22}
            height={24}
            alt="callender"
            style={{ marginRight: "1.6rem" }}
          />
          <p style={{ fontSize: "2.3rem", color: "#8b8b8b" }}>Period</p>
        </div>
        <div>
          <button className="btn-close" onClick={handleClose}>
            &times;
          </button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "21rem",
            paddingRight: "2.4rem",
            borderRight: "1px solid grey"
          }}
        >
          <button className="button-filter-range">Today</button>
          <button
            className={`button-filter-range ${activeSelected === EVENT[0] &&
              "selected-filter"}`}
            onClick={handleYesterday}
          >
            Yesterday
          </button>
          <button
            className={`button-filter-range ${activeSelected === EVENT[1] &&
              "selected-filter"}`}
            onClick={handleLast7days}
          >
            Last 7 days
          </button>
          <button
            className={`button-filter-range ${activeSelected === EVENT[2] &&
              "selected-filter"}`}
            onClick={handleLast30days}
          >
            Last 30 days
          </button>
          <button
            className={`button-filter-range ${activeSelected === EVENT[3] &&
              "selected-filter"}`}
            onClick={handleThisMonth}
          >
            This Month
          </button>
          <button className="button-filter-range-2">Custom</button>
          <button className="button-apply">
            Apply
          </button>
        </div>
        <div
          style={{
            marginRight: "2rem",
            display: "flex",
            flex: 1,
            backgroundColor: "red"
          }}
        >
          <DateRange
            months={2}
            direction="horizontal"
            ranges={[selectionRange2]}
            rangeColors={["green"]}
            disabledDates={[new Date()]}
            moveRangeOnFirstSelection={false}
            onChange={handleSelectionRange}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPeriod;
