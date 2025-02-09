import "./App.css";
import EventForm from "./components/eventform";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/register";
import UpcomingEvents from "./pages/upcomingEvents";
import GuestPage from "./pages/guestpage";
import "bootstrap/dist/css/bootstrap.min.css";


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>;

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/eventform" element={<EventForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/upcomingEvents" element={<UpcomingEvents />} />
            <Route path="/guestpage" element={<GuestPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
