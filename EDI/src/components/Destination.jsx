import React, { useState } from "react";
import Search from "./Search";
import DateRangePicker from "./DatePicker";
import Sites from "./Sites";
import { mapping } from "../redux/slices/MainSlice";
function Destination() {
  const [renderSites, setRenderSites] = useState(false);
  const handleSearch = (query) => {
    // Add any additional logic based on the search query
    console.log("Search query:", query);
  };
  const touristPlaces = [
    "Mumbai",
    "Pune",
    "Nashik",
    "Aurangabad",
    "Kolhapur",
    "Mahabaleshwar",
    "Shirdi",
    "Lonavala",
    "Alibaug",
  ];

  const [next, setNext] = useState(false);

  return (
    <div className="bg-black min-h-[100vh] flex justify-center">
      {renderSites ? (
        <Sites places={mapping["mumbai"]} />
      ) : next ? (
        <Search
          places={touristPlaces}
          onSearch={handleSearch}
          setRenderSites={setRenderSites}
        />
      ) : (
        <DateRangePicker setNext={setNext} />
      )}
    </div>
  );
}

export default Destination;
