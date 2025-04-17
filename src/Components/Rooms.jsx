// import React, { useState } from "react";
// import "../Styles/rooms.css";
// import BookingCalendar from "./BookingCalendar";
// import BookYourPage from "./BookYourPage";
// import ServiceSuggestions from "../Components/ServiceSuggestions.jsx";
// import { LuUsers } from "react-icons/lu";
// import { CiClock2 } from "react-icons/ci";
// import BookingSummary from "../Components/BookingSummary.jsx";

// const Rooms = ({ rooms }) => {
//   const [selectedRoomId, setSelectedRoomId] = useState(null);
//   const [selectedServices, setSelectedServices] = useState([]);

//   const handleSelectRoom = (id) => {
//     setSelectedRoomId(selectedRoomId === id ? null : id);
//   };

//   return (
//     <div>
//       <div className="room-container">
//         <div className="room-card">
//           {rooms.map((room, index) => (
//             <div
//               key={index}
//               className={`map-element ${
//                 selectedRoomId === room.id ? "selected-room-card" : ""
//               }`}
//             >
//               <div className="room-image-wrapper">
//                 <img src={room.image} alt={room.name} className="room-image" />
//               </div>
//               <div>
//                 <h3 className="room-title">{room.name}</h3>
//                 <p className="room-description">{room.description}</p>
//                 <div className="a">
//                   <div className="room-capacity-wrapper">
//                     <LuUsers />
//                     <span className="room-capacity">
//                       Up to {room.capacity} people
//                     </span>
//                   </div>
//                   <div className="room-price-wrapper">
//                     <CiClock2 />
//                     <span className="room-price">
//                       ${room.pricePerHour}/hour
//                     </span>
//                   </div>
//                   <div className="room-amenities">
//                     <h4 className="amenities-title">Amenities</h4>
//                     <div className="amenities-list">
//                       {room.amenities.map((amenity, index) => (
//                         <span key={index} className="amenity-tag">
//                           {amenity}
//                         </span>
//                       ))}
//                     </div>
//                     <button
//                       className="room-button"
//                       onClick={() => handleSelectRoom(room.id)}
//                     >
//                       {selectedRoomId === room.id ? "Selected" : "Select Room"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {selectedRoomId && (
//         <>
//           <BookYourPage />
//           <div className="booking-details-wrapper">
//             <BookingCalendar />
//             <BookingSummary
//               selectedRoom={rooms.find((r) => r.id === selectedRoomId)}
//               selectedServices={selectedServices}
//             />
//           </div>

//           <ServiceSuggestions
//             selectedRoomId={selectedRoomId}
//             onServiceSelect={(services) => setSelectedServices(services)}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default Rooms;
import React from "react";
import "../Styles/rooms.css";
import { LuUsers } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Rooms = ({ rooms }) => {
  const navigate = useNavigate();

  const handleSelectRoom = (room) => {
    navigate("/booking", {
      state: { selectedRoom: room },
    });
  };

  return (
    <div>
      <div className="room-container">
        <div className="room-card">
          {rooms.map((room, index) => (
            <div key={index} className="map-element">
              <div className="room-image-wrapper">
                <img src={room.image} alt={room.name} className="room-image" />
              </div>
              <div>
                <h3 className="room-title">{room.name}</h3>
                <p className="room-description">{room.description}</p>
                <div className="a">
                  <div className="room-capacity-wrapper">
                    <LuUsers />
                    <span className="room-capacity">
                      Up to {room.capacity} people
                    </span>
                  </div>
                  <div className="room-price-wrapper">
                    <CiClock2 />
                    <span className="room-price">
                      ${room.pricePerHour}/hour
                    </span>
                  </div>
                  <div className="room-amenities">
                    <h4 className="amenities-title">Amenities</h4>
                    <div className="amenities-list">
                      {room.amenities.map((amenity, index) => (
                        <span key={index} className="amenity-tag">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <button
                      className="room-button"
                      onClick={() => handleSelectRoom(room)}
                    >
                      Select Room
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
