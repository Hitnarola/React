import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div  className='home'>
        <Navbar/>
        <div className="hero">
          <img src={hero_banner} alt="" className='banner-img' />
          <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-png' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis necessitatibus expedita nisi deserunt praesentium temporibus atque cupiditate aliquid minima!</p>
            <div className="hero_btns">
              <button className="btn">
                <img  src={play_icon} alt="" />Play
              </button>
              <button className="btn dark-btn">
                <img  src={info_icon} alt="" />More Info
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home