import { validateArgCount } from '@firebase/util';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/UserSlice';
import "./ProfileScreen.css"

import Nav from './Nav';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  const navigate=useNavigate();

  const logout = () => {
      auth.signOut();
      navigate("/")
  }
  return (
    <>
      <div className='profile_screen'>
        <Nav />
        <div className='profile_edit'>
          <h2 className='profile_heading'>Edit profile</h2>
          <div className='profile_info'>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="user"
            />
            <div className='profile_right' >
              <div className='mail_headimg' >
                <h2>akhilesh@gmail.com</h2>
              </div>
              <div className='palns_heading' >
                <h2>plans[current plan premium]</h2>
              </div>
              <div className='date_heading date_head'>
                <h2>Required date 64/03/2021</h2>
              </div>
              <div className='date_heading standard_heading'>
                <div>
                  <p>Netflix standard</p>
                  <p>1080p</p>
                </div>
                <button>Subscribe</button>
              </div>
              <div className='date_heading standard_heading'>
                <div>
                  <p>Netflix basics</p>
                  <p>480p</p>
                </div>
                <button>Subscribe</button>
              </div>
              <div className='date_heading standard_heading '>
                <div>
                  <p>Netflix premium</p>
                  <p>4k+HDR</p>
                </div>
                <button style={{color:"white",background:"grey", width:"35%"}} >Current pacakage</button>
              </div>
              
              <button className='sign_out' onClick={logout}>SignOut</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileScreen