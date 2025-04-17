import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookYourPage from "../Components/BookSession";
import BookingCalendar from "../Components/BookingCalendar";
import BookingSummary from "../Components/BookingSummary";
import ServiceSuggestions from "../Components/ServiceSuggestions";
import "../Styles/BookingPage.css";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedRoom } = location.state || {};
  const [selectedServices, setSelectedServices] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <BookYourPage onBackClick={handleGoHome} />
      <div className="booking-details-wrapper">
        <BookingCalendar />
        <BookingSummary
          selectedRoom={selectedRoom}
          selectedServices={selectedServices}
        />
      </div>
      <ServiceSuggestions
        selectedRoomId={selectedRoom.id}
        onServiceSelect={setSelectedServices}
      />
    </div>
  );
};

export default BookingPage;
