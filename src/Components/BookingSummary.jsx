import React from "react";
import "../Styles/BookingSummary.css";
import { FiCreditCard } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuCircleCheckBig } from "react-icons/lu";

const BookingSummary = ({ selectedRoom, selectedServices }) => {
  const roomName = selectedRoom?.name || "N/A";
  const roomPrice = selectedRoom?.pricePerHour || 0;
  const servicesTotal = selectedServices.reduce(
    (acc, svc) => acc + svc.price,
    0
  );
  const total = roomPrice + servicesTotal;

  return (
    <div className="summary-container">
      <div className="summary-header">
        <FiCreditCard className="credit-icon" />
        <span className="summary-title">Complete Your Booking</span>
      </div>

      <div className="summary-box">
        <h1 className="summary-name">Booking Summary</h1>
        <div className="summary-details">
          <div className="summary-row">
            <span className="summary-label">Room:</span>
            <span className="summary-value">{roomName}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Date:</span>
            <span className="summary-value"></span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Time:</span>
            <span className="summary-value"></span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Services:</span>
            <span className="summary-value">
              {selectedServices.length > 0
                ? selectedServices.map((svc, idx) => (
                    <span key={idx} className="service-tag">
                      {svc.name}
                    </span>
                  ))
                : "None"}
            </span>
          </div>
        </div>
        <div className="total-row">
          <span className="total-label">Total:</span>
          <span className="total-value">${total}</span>
        </div>
      </div>

      <div className="input-container">
        <FaRegUser className="input-icon" />
        <input type="text" placeholder="Your Name" className="input-field" />
      </div>

      <div className="input-container">
        <MdOutlineEmail className="input-icon" />
        <input type="email" placeholder="Your Email" className="input-field" />
      </div>

      <p className="confirmation-msg">
        <LuCircleCheckBig className="circle-check" />A confirmation email will
        be sent to your email address with all booking details.
      </p>
      <button className="confirm-button">Confirm Booking</button>
    </div>
  );
};

export default BookingSummary;
