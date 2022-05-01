import './singlePost.css';

import React from 'react'

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img src='https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='singlePostimg' alt='' />
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet, consect lorem.
                <div className='singlePostEditContainer'>
                    <i className='singlePostIcon far fa-edit'></i>
                    <i className='singlePostIcon far fa-trash-alt'></i>
                </div>
            </h1>
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Author: <b>Lee Owonikoko</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
                lorem lorem ipsum dolor sit amet, consect lorem
            </p>
        </div>
    </div>
  )
}

export default SinglePost