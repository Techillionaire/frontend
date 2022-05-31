import './singlePost.css';
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { Context } from './../../context/Context';

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        };
        fetchPost();
    }, [path])

    const handleDelete = async () => {
        try {
          await axios.delete(`/posts/${post._id}`, {
            data: { username: user.username },
          });
          window.location.replace("/");
        } catch (err) {}
      };
    
      const handleUpdate = async () => {
        try {
          await axios.put(`/posts/${post._id}`, {
            username: user.username,
            title,
            desc,
          });
          setUpdateMode(false)
        } catch (err) {}
      };
    
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            {post.photo && (
                <img src={PF + post.photo} className='singlePostimg' alt='' />
            )}
            
            <h1 className='singlePostTitle'>
                {post.title}
                {post.username === user?.username && (
                    <div className='singlePostEditContainer'>
                        <i className='singlePostIcon far fa-edit' onClick={() => setUpdateMode(true)}></i>
                        <i className='singlePostIcon far fa-trash-alt' onClick={handleDelete}></i>
                    </div>
                )}
                
            </h1>
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Author: <Link to={`/?user=${post.username}`} className='link'>
                                                                <b>{post.username}</b>
                                                            </Link></span>
                <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='singlePostDesc'>{post.desc}</p>
        </div>
    </div>
  )
}

export default SinglePost