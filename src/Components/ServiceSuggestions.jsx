import React, { useState, useEffect } from 'react';
import { RxClipboard } from "react-icons/rx";
import { rooms } from "../data/mockData";
import "../Styles/ServiceSuggestions.css";

const ServiceSuggestions = ({ selectedRoomId, onServiceSelect }) => {
  const selectedRoom = rooms.find(room => room.id === selectedRoomId);
  const [selectedServiceIds, setSelectedServiceIds] = useState([]);

  const services = selectedRoom?.services || [];

  const toggleService = (id) => {
    const updatedIds = selectedServiceIds.includes(id)
      ? selectedServiceIds.filter(sid => sid !== id)
      : [...selectedServiceIds, id];

    setSelectedServiceIds(updatedIds);
  };

  useEffect(() => {
    const selected = services.filter(service => selectedServiceIds.includes(service.id));
    onServiceSelect(selected);
  }, [selectedServiceIds]);

  return (
    <div className='service-container'>
      <div className='service-header'>
        <RxClipboard className='clipboard-icon' />
        <span>Recommended Services</span>
      </div>

      <div className="service-list">
  {services.length > 0 ? (
    services.map(service => (
      <div 
        key={service.id} 
        className={`service-card ${selectedServiceIds.includes(service.id) ? 'selected' : ''}`}
        onClick={() => toggleService(service.id)}
      >
        <div className="service-wrapper">
          <h4 className="service-name">{service.name}</h4>
          <p className="service-price">${service.price}</p>
        </div>
        <p>{service.description}</p>
      </div>
    ))
  ) : (
    <p>No services available.</p>
  )}
</div>

    </div>
  );
};

export default ServiceSuggestions;