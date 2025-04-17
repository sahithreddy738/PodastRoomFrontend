import { BrowserRouter, Routes, Route } from "react-router-dom";
import PodcastHome from "./Pages/PodcastHome";
import BookingConfirmed from "./Components/BookingConfirmed.jsx";
import BookingPage from "./Pages/BookingPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<PodcastHome />} />
       <Route path="/booking" element={<BookingPage />} />

        <Route path="/booking-confirmed" element={<BookingConfirmed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
