import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../Styles/BookingConfirmed.css'; 

const BookingConfirmed = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const name = state?.name || "Guest";
  const email = state?.email || "Not Provided";
  const room = state?.room || null;
  const roomName = room?.name || "N/A";
  const date = state?.date || "Not Selected";
  const time = state?.time || "Not Selected";
  const services = state?.services || [];
  const total = state?.total || 0;

  const handleBackToBooking = () => {
    if (room) {
      navigate("/booking", {
        state: { selectedRoom: room }
      });
    } else {
      navigate("/booking");
    }
  };

  return (
    <div className="confirmation-wrapper">
      <div className="confirmation-card">
        <h2>🎉 Booking Confirmed!</h2>
        <p>Hi <strong>{name}</strong>, your podcast room has been booked.</p>

        <div className="podcast-details">
          <p><strong>Podcast Name:</strong> {roomName}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
        </div>

        <div className="services">
          <p><strong>Selected Services:</strong></p>
          <div className="service-tags">
            {services.length > 0 ? (
              services.map((svc, idx) => <span key={idx}>{svc.name}</span>)
            ) : (
              <span>None</span>
            )}
          </div>
        </div>

        <div className="total-price">
          <p><strong>Total Price:</strong> ${total}</p>
        </div>

        <p className="email-note">📧 A confirmation email has been sent to <strong>{email}</strong></p>

        <button className="home-button" onClick={handleBackToBooking}>
          BACK TO BOOKING
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmed;
