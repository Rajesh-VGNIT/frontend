import React from 'react'
import './contact.css';
import Phonebook from '../Phonebook';

const Contact = () => {
  return (
    <div className='contact'>
      <Phonebook />
      <div className='contact1'>
        <div className='contact2'>
           <button type="button">+Add Contacts</button>
        </div>

        <div className='contact3'>
          <div className="contact3_1">
            <label>Select Group</label>
            <select name="Type" required >
               <option value="Single Package">All</option>
               <option value="Noida">Noida</option>
               <option value="Greater Noida">Greater Noida</option>
            </select>
          </div>
         
          <div className="contact3_2">
           <label>Mobile(Optional)</label>
            <input type="text" placeholder='Mobile' />
          </div>

          <div className="contact3_3">
           <label>Limit</label>
             <select name="Type" required >
              <option value="Single Package">20</option>
              <option value="Noida">50</option>
              <option value="Greater Noida">60</option>
            </select>
          </div>

          <div className="contact3_4">
             <label></label><br/>
             <button type='button'>Search</button>
          </div>

          <div className="contact3_5">
            <label></label><br/>
            <button type='button'>Delete Selected</button>
          </div>

          <div className="contact3_6">
            <label></label><br/>
            <button type='button'>Delete All</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;