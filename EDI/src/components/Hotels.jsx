// HotelList.js

import React from 'react';
import { Link } from 'react-router-dom';

const Hotels = () => {
  const hotels = [
    { id: 1, name: 'Hotel A' },
    { id: 2, name: 'Hotel B' },
    { id: 3, name: 'Hotel C' },
    // Add more hotels as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Hotel List</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id} className="mb-2">
            <Link to={`/hotel/${hotel.id}`} className="text-blue-500 hover:underline">
              {hotel.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;
