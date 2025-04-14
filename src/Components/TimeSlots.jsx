import React from "react";
import { IoMdTime } from "react-icons/io";
import { rooms } from "../data/mockData";
import "../Styles/TimeSlots.css";

const TimeSlots = () => {
  return (
    <div className="time-slots-container">
      <h3 className="time-slots-title">
        <IoMdTime className="time-icon" />
        <span className="Timeslots-heading">Available Time Slots</span>
      </h3>
      {/* <div>
        {rooms.map((room,index)=>(
          
        ))}
      </div> */}
      
    </div>
  );
};

export default TimeSlots;
