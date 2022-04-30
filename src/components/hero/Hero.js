import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='heroTitle'>
            <span className='heroTitleSm'>Techillionaire's</span>
            <span className='heroTitleLg'>Blog</span>
        </div>

        <img className='heroImg' src='https://images.pexels.com/photos/373883/pexels-photo-373883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  loading="lazy" alt='' />
    </div>
  )
}

export default Hero