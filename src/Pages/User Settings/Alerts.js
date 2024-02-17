import React from 'react'
import './Alerts.css';
import UserSetting from './UserSetting';

const Alerts = () => {
  return (
    <div className='alrt'>
        <UserSetting />
        <div className='alrt1'>
           <p>Credit Alerts</p>
           <h5><span><input type='checkbox'/></span> Low Credit alert by Email</h5>
           <p className='alrt3'>Send an alert when credit goes below threshold limit via Email.</p>
        </div>
    </div>
  )
}

export default Alerts;