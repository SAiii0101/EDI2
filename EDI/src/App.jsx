import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Bookings from "./pages/Bookings";
import Hotels from "./components/Hotels";
import HotelDetails from "./components/HotelDetails";

function App() {


  return (
    <div className='flex flex-col'>
      <Navbar></Navbar>
        <Routes>
            <Route path={`/`||`/EDI`} element={<Home/>}/>
            <Route path="/bookings/:section" element={<Bookings/>}></Route>
            <Route path="/hotel" element={<Hotels/>}></Route>
            <Route path="/hotel/:hotelId" element={<HotelDetails/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
