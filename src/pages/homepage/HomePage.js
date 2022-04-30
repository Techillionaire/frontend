import React from 'react'
import Hero from '../../components/hero/Hero'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import './homepage.css'

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="homepage">
        <Posts />
        <SideBar />
      </div>
    </>
    
  )
}

export default HomePage