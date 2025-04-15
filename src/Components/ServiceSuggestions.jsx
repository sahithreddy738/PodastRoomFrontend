import React from 'react'
import { RxClipboard } from "react-icons/rx";
import { rooms } from "../data/mockData";
import "../Styles/ServiceSuggestions.css";

const ServiceSuggestions = () => {
  return (
    <div className='service-container'>
      <div>
        <RxClipboard />
        <span>Recommended Services</span>
      </div>
      
        
    </div>
  )
}

export default ServiceSuggestions;