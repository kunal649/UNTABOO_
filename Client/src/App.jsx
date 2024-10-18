import { useState } from 'react'
import './App.css'
import './index.css'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";

export default function App() {
 return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }

