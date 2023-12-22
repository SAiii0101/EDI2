import React from 'react'
import Destination from '../components/Destination'
import {useLocation} from 'react-router-dom'
import Guides from '../components/Guides'
import Rentals from '../components/Rentals'
import Transport from '../components/Transport'
import Hotels from '../components/Hotels'

function Bookings() {
    const location = useLocation()
    const section = location.pathname.split('/').at(-1)
  switch (section){
    case 'destination':
      return (<Destination/>)
    case 'guides':
      return (<Guides/>)
    case 'transport':
      return (<Transport/>)
    case 'rentals':
      return (<Rentals/>)
    case 'hotels':
      return (<Hotels/>)
    default:
      return (<Destination/>)
    
  }
}

export default Bookings