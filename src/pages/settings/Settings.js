import './settings.css';
import React from 'react'
import Sidebar from './../../components/sidebar/SideBar';

const Settings = () => {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingsForm'>
                <label>Display Picture</label>
                <div className='settingsDP'>
                    <img src='https://pbs.twimg.com/profile_images/1343512939286962176/-3l_lPkO_400x400.jpg' alt='' className='settingsImg' />
                    <label htmlFor='fileInput'>
                        <i className='settingsDPIcon fa fa-user' />
                    </label>
                    <input type='file' id='fileInput' style={{display: 'none'}}/>
                </div>

                <label>Username</label>
                <input type='text' placeHolder='leeowonikoko' />
                <label>Email</label>
                <input type='email' placeHolder='leeowonikoko@conclase.com' />
                <label>Password</label>
                <input type='password'/>
                <button type='submit' className='settingsSubmit'>Update</button>
            </form>
            
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings