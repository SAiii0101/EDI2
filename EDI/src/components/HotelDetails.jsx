// HotelDetails.js

import React, { useState } from 'react';

const HotelDetails = ({ match }) => {
  // Replace with your data fetching logic using useState
  const [hotelDetails] = useState({
    1: { name: 'Hotel A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    2: { name: 'Hotel B', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    3: { name: 'Hotel C', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  });

  const { params } = match;
  const hotel = hotelDetails[params.id];

  if (!hotel) {
    return <div className="container mx-auto mt-8">Hotel not found</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">{hotel.name}</h1>
      <p>{hotel.description}</p>
    </div>
  );
};

export default HotelDetails;
