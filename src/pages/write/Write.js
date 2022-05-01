import React from 'react'
import './write.css';

const Write = () => {
  return (
    <div className='write'>
        <img src='https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' className='writeImg'/>
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                    <i className='writeIcon fa fa-plus'></i>
                </label>
                <input type='file' id='fileInput' style={{display: 'none'}}/>
                <input type='text' placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            
            <div className='writeFormGroup'>
                <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
            </div>

            <button type='submit' className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write