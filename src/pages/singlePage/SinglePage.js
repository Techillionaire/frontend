import './singlePage.css';
import React from 'react'
import SideBar from './../../components/sidebar/SideBar';
import SinglePost from '../../components/singlePost/SinglePost';

const SinglePage = () => {
  return (
    <div className='singlePage'>
        <SinglePost />
        <SideBar />
    </div>
  )
}

export default SinglePage