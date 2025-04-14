import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import "../Styles/BookingCalendar.css";
import TimeSlots from "../Components/TimeSlots.jsx";

const BookingCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <div className="calendar-title">
          <FiCalendar className="calendar-icon" />
          <span>Select Date & Time</span>
        </div>
      </div>

      <div className="calendar-container ">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            minDate={new Date()}
            className="date-calendar "
          />
        </LocalizationProvider>
      </div>

      <div>
        <TimeSlots selectedDate={value} />
      </div>
    </div>
  );
};

export default BookingCalendar;
