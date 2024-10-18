import { useState } from 'react'
import './App.css'
import './index.css'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import AppointmentPopup from './components/AppointmentPopup.jsx';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
 return (
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              openAppointmentPopup={() => setIsPopupOpen(true)} 
            />
          } 
        />
        </Routes>
        {/* Appointment Popup */}
      <AppointmentPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
      </BrowserRouter>
    );
  }

