import csmt from '../assets/csmt.jpg'
import chowpatty_beach from '../assets/chowpatty_beach.jpg'
import elephanta_caves from '../assets/elephanta_caves.jpg'
import gateway_of_india from '../assets/gateway_of_india.jpg'
import marine_drive from '../assets/marine_drive.jpg'
export const sections = {
    1:'destination',
    2:'hotels',
    3:'guides',
    4:'rentals',
    5:'transport'
}
export const mapping = {
    mumbai:[
        {
            name: 'Gateway of India',
            image: gateway_of_india,
            description: 'Iconic arch monument overlooking the Arabian Sea.',
            location: 'Mumbai',
            rating: 4.8,
          },
          {
            name: 'Chhatrapati Shivaji Maharaj Terminus',
            image: csmt,
            description: 'Historic railway station and UNESCO World Heritage Site.',
            location: 'Mumbai',
            rating: 4.7,
          },
          {
            name: 'Marine Drive',
            image: marine_drive,
            description: 'Scenic promenade along the Arabian Sea.',
            location: 'Mumbai',
            rating: 4.5,
          },
          {
            name: 'Elephanta Caves',
            image: elephanta_caves,
            description: 'Ancient rock-cut caves dedicated to Lord Shiva.',
            location: 'Mumbai',
            rating: 4.4,
          },
          {
            name: 'Chowpatty Beach',
            image: chowpatty_beach,
            description: 'Lively beach with a vibrant atmosphere.',
            location: 'Mumbai',
            rating: 4.2,
          },
    ]
}