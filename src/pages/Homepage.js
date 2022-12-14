import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';
import Footer from '../components/Footer';
import search from '../resources/images/search-90.png'

const Homepage = () => {
  const { user } = useParams();
  console.log(user);

  const searchToggle = () => {
    let searchBox = document.getElementById('home_search_input');
    if (searchBox.style.display === 'none') {
      searchBox.style.display = 'block';
    } else {
      searchBox.style.display = 'none';
    }
  }


  return (
    <div className='home_comp'>
      <div className='home_search_div'>
        <img src={search} className='home_search' alt='search' onClick={searchToggle} />
        <input id='home_search_input' placeholder='Search' type='text' />
      </div>

      <div className='home_card'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  )
}

export default Homepage;