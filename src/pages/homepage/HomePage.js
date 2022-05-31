import { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import { useLocation } from "react-router";
import './homepage.css'
import axios from 'axios'

const HomePage = () => {

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
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