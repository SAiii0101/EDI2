// components/DateRangePicker.js
import React, { useState } from 'react';

const DateRangePicker = ({setNext}) => {
    const [disabled, setDisabled] = useState(true)
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    setDisabled(false)
  };

  return (
    <div className="flex items-center justify-center mt-8 flex-col gap-6 h-full">
      <div className="flex space-x-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-white">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={handleStartDateChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-white">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={handleEndDateChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
      </div>
      <button
      onClick={()=>{
        setNext(true)
      }}
      disabled={disabled}
      className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
      } focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300`}
    >
      Next
    </button> 
    </div>
  );
};

export default DateRangePicker;
