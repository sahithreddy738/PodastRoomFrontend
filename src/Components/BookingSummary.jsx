import React, { useState, useEffect } from "react";
import "../Styles/BookingSummary.css";
import { FiCreditCard } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuCircleCheckBig } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const BookingSummary = ({ selectedRoom, selectedServices }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState(null);

  const roomName = selectedRoom?.name || "N/A";
  const roomPrice = selectedRoom?.pricePerHour || 0;
  const servicesTotal = selectedServices.reduce((acc, svc) => acc + svc.price, 0);
  const total = roomPrice + servicesTotal;

  const validateForm = () => {
    if (!name.trim()) {
      setPopup("Please enter your name.");
      return false;
    }
    if (!email.trim()) {
      setPopup("Please enter your email.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setPopup("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleConfirmBooking = () => {
    if (validateForm()) {
      navigate("/booking-confirmed", {
        state: {
          name,
          email,
          room: selectedRoom,
          services: selectedServices,
          // date: "2025-04-14", 
          // time: "14:30"  
          total     
        }
      });
    }
  };

  
  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => {
        setPopup(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  return (
    <div className="summary-container">
      {popup && <div className="popup-toast">{popup}</div>}

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
        <input
          type="text"
          placeholder="Your Name"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-container">
        <MdOutlineEmail className="input-icon" />
        <input
          type="email"
          placeholder="Your Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <p className="confirmation-msg">
        <LuCircleCheckBig className="circle-check" />
        A confirmation email will be sent to your email address with all booking details.
      </p>

      <button className="confirm-button" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingSummary;
