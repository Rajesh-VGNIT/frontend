import React from 'react'
import './ChangePassword.css';
import UserSetting from './UserSetting';

const ChangePassword = () => {
  return (
    <div className='changpass'>
        <UserSetting />
        <div className='changpass1'>
            <div className='changpass2'>
                <div>
                <label>Current Password <span style={{color:"red"}}>*</span></label><br/>
                <input type='text' placeholder='Enter Password' />
                </div>

                <div>
                <label>New Password <span style={{color:"red"}}>*</span></label><br/>
                <input type='text' placeholder='Enter Password' />
                 </div>
                <div>
                <label>Re-enter Password <span style={{color:"red"}}>*</span></label><br/>
                <input type='text' placeholder='Enter Password' />
                  <button className='changpass3' type='button'>Change Password</button>
                 </div>
                 
            </div>
        </div>
    </div>
  )
}

export default ChangePassword;