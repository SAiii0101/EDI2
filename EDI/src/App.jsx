import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Bookings from "./pages/Bookings";

function App() {
let response = [
    {
        "name": "Ajanta Caves",
        "location": "Aurangabad",
        "description": "Ancient Buddhist cave monuments",
        "rating": 4.5
    },
    {
        "name": "Gateway of India",
        "location": "Mumbai",
        "description": "Iconic arch monument",
        "rating": 4.8
    },
    {
        "name": "Elephanta Caves",
        "location": "Mumbai",
        "description": "Historical cave temples",
        "rating": 4.3
    },
    {
        "name": "Shirdi",
        "location": "Ahmednagar",
        "description": "Famous pilgrimage site",
        "rating": 4.6
    },
    {
        "name": "Lonavala",
        "location": "Pune",
        "description": "Hill station and tourist destination",
        "rating": 4.2
    },
    {
        "name": "Matheran",
        "location": "Raigad",
        "description": "Hill station with panoramic views",
        "rating": 4.4
    },
    {
        "name": "Khandala",
        "location": "Pune",
        "description": "Scenic hill station",
        "rating": 4.1
    },
    {
        "name": "Panchgani",
        "location": "Satara",
        "description": "Hill station known for its table land",
        "rating": 4.0
    },
    {
        "name": "Mahabaleshwar",
        "location": "Satara",
        "description": "Popular hill station with viewpoints",
        "rating": 4.7
    },
    {
        "name": "Juhu Beach",
        "location": "Mumbai",
        "description": "Famous beach with a lively atmosphere",
        "rating": 4.2
    },
]

  return (
    <div className='flex flex-col'>
      <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/bookings/:section" element={<Bookings/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
