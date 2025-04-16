import React, { useState } from "react";
import Rooms from "../Components/Rooms";
import Navbar from "../Components/Navbar";
import { rooms as mockRooms } from "../data/mockData";
import "../Styles/PodcastHome.css";
import { Search } from "lucide-react";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

const PodcastHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [capacityFilter, setCapacityFilter] = useState("All Capacities");
  const [priceFilter, setPriceFilter] = useState("All Prices");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCapacityChange = (e) => {
    setCapacityFilter(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const filterRooms = () => {
    return mockRooms.filter((room) => {
      const matchesSearch =
        room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCapacity =
        capacityFilter === "All Capacities" ||
        (capacityFilter === "1 Person" && room.capacity === 1) ||
        (capacityFilter === "2-4 People" &&
          room.capacity >= 2 &&
          room.capacity <= 4) ||
        (capacityFilter === "5+ People" && room.capacity >= 5);

      const matchesPrice =
        priceFilter === "All Prices" ||
        (priceFilter === "Below $50" && room.pricePerHour < 50) ||
        (priceFilter === "$50 - $100" &&
          room.pricePerHour >= 50 &&
          room.pricePerHour <= 100) ||
        (priceFilter === "Above $100" && room.pricePerHour > 100);

      return matchesSearch && matchesCapacity && matchesPrice;
    });
  };

  const filteredRooms = filterRooms();

  return (
    <div>
      <Navbar />

      <div className="podcast-container">
        <div className="podcast-header">
          <h1 className="podcast-about-heading">Podcast Studio Reservation</h1>
          <button className="view-bookings-button">
            <span className="TbLayoutSidebarLeftExpand">
              <TbLayoutSidebarLeftExpand />
            </span>
            View All Bookings
          </button>
        </div>

        <div className="podcast-filters">
          <div className="search-input-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search by room name or description..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <select
            className="capacity-filter"
            value={capacityFilter}
            onChange={handleCapacityChange}
          >
            <option>All Capacities</option>
            <option>1 Person</option>
            <option>2-4 People</option>
            <option>5+ People</option>
          </select>

          <select
            className="price-filter"
            value={priceFilter}
            onChange={handlePriceChange}
          >
            <option>All Prices</option>
            <option>Below $50</option>
            <option>$50 - $100</option>
            <option>Above $100</option>
          </select>
        </div>

        <Rooms rooms={filteredRooms} />
      </div>
    </div>
    
  );
};

export default PodcastHome;
