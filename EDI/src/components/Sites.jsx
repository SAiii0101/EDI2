import React from 'react';
import { NavLink } from 'react-router-dom';
import { sections } from '../constants/data';
import {useSelector,useDispatch} from 'react-redux'
import { next } from '../redux/slices/MainSlice';


const TouristPlaceCard = ({ place }) => {
  return (
    <div className="max-w-[80%] mx-auto bg-white shadow-md  rounded-md my-4">
      <img
        className="object-cover object-center w-full h-48"
        src={place.image}  // Add image source based on your data
        alt={place.name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{place.name}</h2>
        <p className="text-gray-600 mt-2">{place.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-blue-500">{place.location}</span>
          <span className="text-gray-700">{`Rating: ${place.rating}`}</span>
        </div>
      </div>
    </div>
  );
};

const Sites = ({ places }) => {
  const sno = useSelector((state)=>state.main.sno)
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col text-white'>
      <div className='flex items-center relative'>
        <div className='flex flex-col'>
        <span className='font-semibold text-3xl m-8'>Here are some famous sites</span>
        <span className='mx-8'>You can select multiple sites or if you have dynamic plan then skip to next part</span>
        </div>
        <NavLink to={`/bookings/${sections[sno+1]}`}>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md h-fit absolute right-10' onClick={()=>{dispatch(next())}}>
          Next
        </button>
        </NavLink> 
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {places.map((place) => (
        <TouristPlaceCard key={place.name} place={place} />
      ))}
    </div>
    </div>
  );
};

export default Sites;
