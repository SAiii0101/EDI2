import React from 'react'
import { useState } from 'react';

function Search({ places, onSearch, setRenderSites}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [options,setOptions] = useState(places)

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const filterPlaces = () => {
    if(searchQuery===''){
      return []
    }
    return options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  return (
    <div className="flex items-center mt-8 flex-col justify-center">
      <span className='text-white font-semibold text-2xl mb-10'>Search Your Destination</span>
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        id="searchPlaces"
        onChange={handleInputChange}
        className="py-2 pl-10 pr-4 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300"
      />
      <button
        // onClick={handleSearch}
        className="absolute left-0 top-0 h-full px-3 text-blue-500 hover:text-blue-700 cursor-pointer"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m4-6h-8a6 6 0 00-6 6 6 6 0 006 6h8a6 6 0 006-6 6 6 0 00-6-6z"
          ></path>
        </svg>
      </button>
    </div>
    <ul className='bg-slate-700 text-white w-full rounded-md '>
        {filterPlaces().map((option) => (
          <li key={option} onClick={()=>{
            setSearchQuery(option)
            setOptions([])
            setRenderSites(true)
          }} className='hover:cursor-pointer'>{option}</li>
        ))}
      </ul>
  </div>

  )
}

export default Search