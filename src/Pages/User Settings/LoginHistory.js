import React from 'react'
import './LoginHistory.css';
import UserSetting from './UserSetting';

const LoginHistory = () => {
  return (
    <div className='loginhist'>
        <UserSetting />
        <div className='loginhist1'>
            <p>IP Address</p>
            <p>Login Time</p>
        </div>
    </div>
  )
}

export default LoginHistory;