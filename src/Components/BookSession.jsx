import React from 'react';
import "../Styles/BookSession.css";
import { LuCalendarClock } from "react-icons/lu";
import { IoArrowBackSharp } from "react-icons/io5";

const BookYourPage = ({ onBackClick }) => {
  return (
    <div className="container">
      <div className="title-wrapper">
      <IoArrowBackSharp onClick={onBackClick} className="back-arrow" />
        <LuCalendarClock className="calendar-icon" />
        <span className="title">Book Your Session</span>
      </div>
    </div>
  );
};

export default BookYourPage;
