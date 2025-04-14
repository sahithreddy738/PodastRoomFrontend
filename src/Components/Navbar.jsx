// import React from 'react';
// import "../Styles/Navbar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPodcast } from '@fortawesome/free-solid-svg-icons';
// import { Calendar, BookOpen, User } from 'lucide-react';


// const Navbar = () => {
//   return (
//     <div className="navbar-wrapper">
//       <div className="navbar-content">
//         <div className="navbar-brand">
//           <FontAwesomeIcon icon={faPodcast} />
//           <h1 className="navbar-title">PodcastReserve</h1>
//         </div>
//         <nav className="nav">
//           <a href="#" className="nav-link">
//             <Calendar className="nav-icon" />
//             <span>Rooms</span>
//           </a>
//           <a href="#" className="nav-link">
//             <BookOpen className="nav-icon" />
//             <span>Services</span>
//           </a>
//           <a href="#" className="nav-link">
//             <User className="nav-icon" />
//             <span>My Bookings</span>
//           </a>
//         </nav>
        
//         <div>
//           <button className="reserve-button">
//             Reserve Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react';
import "../Styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { Calendar, BookOpen, User } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-content">
        <div className="navbar-brand">
          <FontAwesomeIcon icon={faPodcast} className="podcast-icon" />
          <h1 className="navbar-title">PodcastReserve</h1>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">
            <Calendar className="nav-icon" />
            <span>Rooms</span>
          </a>
          <a href="#" className="nav-link">
            <BookOpen className="nav-icon" />
            <span>Services</span>
          </a>
          <a href="#" className="nav-link">
            <User className="nav-icon" />
            <span>My Bookings</span>
          </a>
        </nav>
        <div>
          <button className="reserve-button">
            Reserve Now
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
