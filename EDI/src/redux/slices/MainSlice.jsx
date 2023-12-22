import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    sno:1,
}

export const MainSlice = createSlice({
    name:"main",
    initialState:initialState,
    reducers:{
        next:(state)=>{
            state.value+=1
        },
        back:(state)=>{
            state.value-=1
        }
    }
})

export const sections = {
    1:'destination',
    2:'transport',
    3:'guides',
    4:'rentals',
    5:'hotels'
}
export const mapping = {
    mumbai:[
        {
            name: 'Gateway of India',
            image: '../assets/gateway_of_india.jpg',
            description: 'Iconic arch monument overlooking the Arabian Sea.',
            location: 'Mumbai',
            rating: 4.8,
          },
          {
            name: 'Chhatrapati Shivaji Maharaj Terminus',
            image: '../assets/csmt.jpg',
            description: 'Historic railway station and UNESCO World Heritage Site.',
            location: 'Mumbai',
            rating: 4.7,
          },
          {
            name: 'Marine Drive',
            image: '../assets/marine_drive.jpg',
            description: 'Scenic promenade along the Arabian Sea.',
            location: 'Mumbai',
            rating: 4.5,
          },
          {
            name: 'Elephanta Caves',
            image: '../assets/elephanta_caves.jpg',
            description: 'Ancient rock-cut caves dedicated to Lord Shiva.',
            location: 'Mumbai',
            rating: 4.4,
          },
          {
            name: 'Chowpatty Beach',
            image: '../assets/chowpatty_beach.jpg',
            description: 'Lively beach with a vibrant atmosphere.',
            location: 'Mumbai',
            rating: 4.2,
          },
    ]
}
export const {next, back} = MainSlice.actions
export default MainSlice.reducer