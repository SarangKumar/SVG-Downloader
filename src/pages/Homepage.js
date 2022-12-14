import React from 'react'
import { useParams } from 'react-router-dom'
import search from '../resources/images/search-90.png'

const Homepage = () => {
  const {user} = useParams();
  console.log(user);
  return (
    <div className='home_comp'>Homepage {user}
    <div className='home_search'>
      <img src={search} className='home_search' alt='search'></img>
      <input type='text' />
    </div>

    </div>
    )
}

export default Homepage;