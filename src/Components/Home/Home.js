import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import ShowOrg from './ShowOrg'
import bg from './bg.PNG'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import FetchedOrg from '../FetchedOrg/FetchedOrg'
const activity = [
  {
    id: 1,
    activityImage: 'https://i.ibb.co/HnVgc1F/animal-Shelter.png',
    activityName: 'Animal Shelter',
    background: "primary"
  },
  {
    id: 2,
    activityImage: 'https://i.ibb.co/qnQ3jD8/babySit.png',
    activityName: 'Baby sit',
    background:"dark"
  },
  {
    id: 3,
    activityImage: 'https://i.ibb.co/SRDPYJP/bird-House.png',
    activityName: 'Bird House',
    background:"light"
  },
  {
    id: 4,
    activityImage: 'https://i.ibb.co/jJ6MJwj/child-Support.png',
    activityName: 'Child Support',
    background:"blacks"
  },
  {
    id: 5,
    activityImage: 'https://i.ibb.co/SvxNhFd/clean-Water.png',
    activityName: 'Clean Water',
    background:"honu"
  },
  {
    id: 6,
    activityImage: 'https://i.ibb.co/3RWxdDy/clearn-Park.png',
    activityName: 'Clear Park',
    background:"primary"

  },
  {
    id: 7,
    activityImage: 'https://i.ibb.co/26Zf16j/cloth-Swap.png',
    activityName: 'Cloth Swap',
    background:"blacks"

  },
  {
    id: 8,
    activityImage: 'https://i.ibb.co/fQ0bPpt/drive-Safety.png',
    activityName: 'Drive Safety',
    background:"blacks"

  },
  {
    id: 9,
    activityImage: 'https://i.ibb.co/fCDwmS1/vote-Register.png',
    activityName: 'Vote Register',
    background:"honu"

  },
  {
    id: 10,
    activityImage: 'https://i.ibb.co/BNw1R2m/food-Charity.png',
    activityName: 'Food Charity',
    background:"primary"

  },
  {
    id: 11,
    activityImage: 'https://i.ibb.co/5kXJbbn/good-Education.png',
    activityName: 'Good Education',
    background:"dark"

  },
  {
    id: 12,
    activityImage: 'https://i.ibb.co/NKjQMd4/ITHelp.png',
    activityName: 'IT Help',
    background:"blacks"

  },
  {
    id: 13,
    activityImage: 'https://i.ibb.co/QfDdjjS/library-Books.png',
    activityName: 'Library Books',
    background:"honu"

  },

  {
    id: 14,
    activityImage: 'https://i.ibb.co/hddzsbw/music-Lessons.png',
    activityName: 'Music Lesson',
    background:"primary"

  },
  {
    id: 15,
    activityImage: 'https://i.ibb.co/tBFxksy/newBooks.png',
    activityName: 'New Books',
    background:"dark"

  },
  {
    id: 16,
    activityImage: 'https://i.ibb.co/g7rcs6q/refuse-Shelter.png',
    activityName: 'Refuse Shelter',
    background:"blacks"

  },
  {
    id: 17,
    activityImage: 'https://i.ibb.co/M8kgZ2z/river-Clean.png',
    activityName: 'River Clean',
    background:"honu"

  },
  {
    id: 18,
    activityImage: 'https://i.ibb.co/CzsZW5Q/school-Suffiles.png',
    activityName: 'School Suffiles',
    background:"primary"

  },
  {
    id: 19,
    activityImage: 'https://i.ibb.co/VvYBnxy/study-Group.png',
    activityName: 'Group Study',
    background:"dark"

  },
  {
    id: 20,
    activityImage: 'https://i.ibb.co/vJJWwqY/stuffed-Animals.png',
    activityName: 'Stuffed Animal',
    background:"honu"

  },
]
const Home = () => {

  return (
    <div style={{ overflowX: 'hidden'}}>
      <div 
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${bg})`,
          backgroundSize: 'cover',
          width: '100%',
          height: '10%',
          backgroundRepeat: 'no-repeat',
          overflow: 'auto',
          
        }}
      >
        <Header />
        <div>
          
          <h1 style={{ color: '#f8f5f1', textAlign: 'center' }}>
            I grow by helping people in need.
          </h1>
          <br />
          <div className="container d-flex justify-content-center mt-5">
            
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#edeef7' }}>
        <div className="d-flex row justify-content-center p-5">
          {activity.map((org) => (
            <ShowOrg org={org} key={org.id}></ShowOrg>
          ))}
        </div>
      </div>
      <FetchedOrg/>
      <Footer/>
    </div>
  )
}

export default Home
