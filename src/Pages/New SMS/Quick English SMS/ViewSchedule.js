import React from 'react'
import './ViewSchedule.css';
import QuickEnglishSMS from './QuickEnglishSMS';

const ViewSchedule = () => {
  return (
    <div className='viewSch'>
        <QuickEnglishSMS />
      <div className='viewSch1'>
      <div className='viewSch2'>
      <table>
       <thead>
        <tr>
          <th>Sender ID</th>
          <th>Scheduled Date Time</th>
          <th>Message</th>
          <th>Valid Numbers</th>
          <th>Message Length</th>
          <th>Total Credits</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
       </thead>
    
       <tbody>
         <tr>
           <td>1</td>
           <td>2</td>
           <td>3</td>
           <td>4</td>
           <td>5</td>
           <td>6</td>
           <td>7</td>
           <td>8</td>
         </tr>
       </tbody>
    
     </table>
     </div>
      </div>
    </div>
  )
}

export default ViewSchedule;