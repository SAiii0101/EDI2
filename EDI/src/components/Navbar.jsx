import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='flex flex-row w-full shadow-lg h-12 items-center justify-around bg-lime-400 bg-opacity-70'>
      <span className='text-lg font-medium'>MakeMyPlan</span>
      <ul className='flex flex-row gap-10'>
        <NavLink to={`/`}><li className='text-black'>Home</li></NavLink>
        <li>Packages</li>
        <li><button>Login</button></li>
        <li><button>Sign up</button></li>
      </ul>
    </nav>
  )
}

export default Navbar