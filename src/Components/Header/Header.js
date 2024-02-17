import React from 'react'
import './header.css';

export const Header = () => {
  const data = [
    {
      createdAt: new Date()
    }
  ];
  console.log(data);
  function formatDate(newDate) {
    const months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December"
    };
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = newDate;
    const year = d.getFullYear();
    const date = d.getDate();
    const monthIndex = d.getMonth();
    const monthName = months[d.getMonth()];
    const dayName = days[d.getDay()]; // Thu

    const formatted = `${dayName}, ${date} ${monthName} ${year}`;
    return formatted.toString();
  }
  return (
    <div className='header'>
        <div className="header-section1">
          <h2 id="dashboard_title" className="title wfid_temp9392457602 p">Dashboard</h2>
          <ul>
        {data.map((post) => (
          <li>
            <h3>{post.title}</h3>
            <p>{formatDate(post.createdAt)}</p>
          </li>
        ))}
      </ul>
       </div>
       <div className='header-section2'>
         <h1><span><img  style={{width:"2rem",marginBottom:"10px"}} src='/Images/credit_icon.svg'alt='wel'/></span> 500</h1>
           <p className="fa-regular fa-bell  bel"></p>
         </div>
    </div>
  )
}

export default Header;
