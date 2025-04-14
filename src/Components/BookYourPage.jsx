import React from 'react';
import "../Styles/BookYourPage.css";
import { LuCalendarClock } from "react-icons/lu";

const BookYourPage = () => {
  return (
    <div className="container">
      <div className="title-wrapper">
        <LuCalendarClock className="calendar-icon" />
        <span className="title">Book Your Session</span>
      </div>
    </div>
  );
};

export default BookYourPage;
