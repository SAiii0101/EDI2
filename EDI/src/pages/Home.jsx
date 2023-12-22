import React from 'react'
import { NavLink } from 'react-router-dom'
import { sections } from '../redux/slices/MainSlice'
import {useSelector} from 'react-redux'
function Home() {
  const sno = useSelector((state)=>state.main.sno)
  return (
    
      <div className='bg-black h-[100vh] flex flex-col justify-center text-white'>
            <div className='flex h-fit flex-col gap-8 w-[40%] ml-8'>
        <span className='font-poppins text-4xl font-bold'>Create your <span className='text-yellow-300'>travel plan</span> even for short trips</span>
        <span className='font-light text-sm'>Make your trip smooth by pre-booking hotel,guides,car rentals,Fares for museums and heritage sites</span>
        <div className='flex gap-4'>
        <span className='border-[1px] w-fit p-2 hover:border-yellow-300 hover:cursor-pointer rounded-lg'><NavLink to={`/bookings/${sections[sno]}`}>Make a Plan</NavLink></span>
        <span className='w-fit underline hover:cursor-pointer p-2'>How we work</span>
        </div>
        </div>  
            
    </div>
  )
}

export default Home