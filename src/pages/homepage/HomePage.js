import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import './homepage.css'
import axios from 'axios'

const HomePage = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async() => {
      const res = await axios.get('/posts')
      setPosts(res.data)
    }
    fetchPosts()
  }, [])
  return (
    <>
      <Hero />
      <div className="homepage">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
    
  )
}

export default HomePage