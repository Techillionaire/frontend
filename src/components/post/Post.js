import './post.css'

import React from 'react'

const Post = () => {
  return (
    <div className='post'>
        <img className='postImg' src='https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />

        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Tech</span>
                <span className='postCat'>Jobs</span>
            </div>
            <span className='postTitle'>lorem lore lorem ipsum dolor sit amet, consectet</span> 
            <hr />
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>
            lorem ipsum dolor sit amet, consect lorem
            lorem ipsum dolor sit amet, consect lorem
            lorem ipsum dolor sit amet, consect lorem
            lorem ipsum dolor sit amet, consect lorem
            lorem ipsum dolor sit amet, consect lorem
        </p>
    </div>
  )
}

export default Post