// import React, { useEffect, useState } from 'react'
import React from 'react'
import './home.css'
// import { NavLink } from "react-router-dom";
import CanvasJSReact from './assets/canvasjs.react';
// import { useNavigate } from "react-router-dom";

const Home = ({updateUser}) => {
	// var navigate = useNavigate()
	
	var CanvasJSChart = CanvasJSReact.CanvasJSChart;
	
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			title:{
				text: "Easy Web Services"
			},
			axisY: {
				title: "Data",
				suffix: "%"
			},
			toolTip: {
				shared: true,
				reversed: true
			},
			legend: {
				verticalAlign: "center",
				horizontalAlign: "right",
				reversed: true
			},
			data: [
			{
				type: "stackedArea100",
				name: "Awaited",
				showInLegend: true,
				xValueFormatString: "YYYY",
				dataPoints: [
					{ x: new Date(2000, 0), y: 40 },
					{ x: new Date(2001, 0), y: 62 },
					{ x: new Date(2002, 0), y: 53 },
					{ x: new Date(2003, 0), y: 49 },
					{ x: new Date(2004, 0), y: 52 },
					{ x: new Date(2005, 0), y: 32 },
					{ x: new Date(2006, 0), y: 28 },
					{ x: new Date(2007, 0), y: 46 },
					{ x: new Date(2008, 0), y: 55 },
					{ x: new Date(2009, 0), y: 88 },
					{ x: new Date(2010, 0), y: 68 },
					{ x: new Date(2011, 0), y: 63 },
					{ x: new Date(2012, 0), y: 65 },
					{ x: new Date(2013, 0), y: 68 },
					{ x: new Date(2014, 0), y: 48 },
					{ x: new Date(2015, 0), y: 39 },
					{ x: new Date(2016, 0), y: 20 },
					{ x: new Date(2017, 0), y: 26 },
					{ x: new Date(2018, 0), y: 16 },
					{ x: new Date(2019, 0), y: 38 },
					{ x: new Date(2020, 0), y: 22 },
					{ x: new Date(2021, 0), y: 23 },
					{ x: new Date(2022, 0), y: 18 },
					{ x: new Date(2023, 0), y: 34 }
				]
			},
			{
				type: "stackedArea100",
				name: "Failed",
				showInLegend: true,
				xValueFormatString: "YYYY",
				dataPoints: [
					{ x: new Date(2000, 0), y: 20 },
					{ x: new Date(2001, 0), y: 12 },
					{ x: new Date(2002, 0), y: 19 },
					{ x: new Date(2003, 0), y: 28 },
					{ x: new Date(2004, 0), y: 42 },
					{ x: new Date(2005, 0), y: 75 },
					{ x: new Date(2006, 0), y: 85 },
					{ x: new Date(2007, 0), y: 55 },
					{ x: new Date(2008, 0), y: 45 },
					{ x: new Date(2009, 0), y: 38 },
					{ x: new Date(2010, 0), y: 29 },
					{ x: new Date(2011, 0), y: 19 },
					{ x: new Date(2012, 0), y: 14 },
					{ x: new Date(2013, 0), y: 18 },
					{ x: new Date(2014, 0), y: 16 },
					{ x: new Date(2015, 0), y: 13 },
					{ x: new Date(2016, 0), y: 10 },
					{ x: new Date(2017, 0), y: 14 },
					{ x: new Date(2018, 0), y: 21 },
                    { x: new Date(2019, 0), y: 39 },
					{ x: new Date(2020, 0), y: 23 },
					{ x: new Date(2021, 0), y: 24 },
					{ x: new Date(2022, 0), y: 19 },
					{ x: new Date(2023, 0), y: 35 }
				]
			},
			{
				type: "stackedArea100",
				name: "Delivered",
				showInLegend: true,
				xValueFormatString: "YYYY",
				dataPoints: [
					{ x: new Date(2000, 0), y: 0 },
					{ x: new Date(2001, 0), y: 6 },
					{ x: new Date(2002, 0), y: 8 },
					{ x: new Date(2003, 0), y: 10 },
					{ x: new Date(2004, 0), y: 12 },
					{ x: new Date(2005, 0), y: 15 },
					{ x: new Date(2006, 0), y: 17 },
					{ x: new Date(2007, 0), y: 18 },
					{ x: new Date(2008, 0), y: 25 },
					{ x: new Date(2009, 0), y: 18 },
					{ x: new Date(2010, 0), y: 24 },
					{ x: new Date(2011, 0), y: 29 },
					{ x: new Date(2012, 0), y: 31 },
					{ x: new Date(2013, 0), y: 52 },
					{ x: new Date(2014, 0), y: 72 },
					{ x: new Date(2015, 0), y: 63 },
					{ x: new Date(2016, 0), y: 20 },
					{ x: new Date(2017, 0), y: 18 },
					{ x: new Date(2018, 0), y: 17 },
					{ x: new Date(2019, 0), y: 40 },
					{ x: new Date(2020, 0), y: 24 },
					{ x: new Date(2021, 0), y: 25 },
					{ x: new Date(2022, 0), y: 22 },
					{ x: new Date(2023, 0), y: 36 }
				]
			},
			{
				type: "stackedArea100",
				name: "Submitted",
				showInLegend: true,
				xValueFormatString: "YYYY",
				dataPoints: [
					{ x: new Date(2000, 0), y: 2 },
					{ x: new Date(2001, 0), y: 5 },
					{ x: new Date(2002, 0), y: 7 },
					{ x: new Date(2003, 0), y: 11 },
					{ x: new Date(2004, 0), y: 14 },
					{ x: new Date(2005, 0), y: 13 },
					{ x: new Date(2006, 0), y: 17 },
					{ x: new Date(2007, 0), y: 12 },
					{ x: new Date(2008, 0), y: 23 },
					{ x: new Date(2009, 0), y: 16 },
					{ x: new Date(2010, 0), y: 26 },
					{ x: new Date(2011, 0), y: 27 },
					{ x: new Date(2012, 0), y: 33 },
					{ x: new Date(2013, 0), y: 53 },
					{ x: new Date(2014, 0), y: 75 },
					{ x: new Date(2015, 0), y: 66 },
					{ x: new Date(2016, 0), y: 28 },
					{ x: new Date(2017, 0), y: 37 },
					{ x: new Date(2018, 0), y: 39 },
					{ x: new Date(2019, 0), y: 42 },
					{ x: new Date(2020, 0), y: 26 },
					{ x: new Date(2021, 0), y: 27 },
					{ x: new Date(2022, 0), y: 13 },
					{ x: new Date(2023, 0), y: 38 }
				]
			}
		]
		}

// login auth code
// const [authenticated, setauthenticated] = useState(null);
//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("authenticated");
//     if (loggedInUser) {
//       setauthenticated(loggedInUser);
//     }
//   }, []);

//   if (!authenticated) {
  // Redirect
//     return <navigate  replace to="/login" />;
//   } else {
	// login auth code

  return (
    <div className="Home">
        <div className="button" onClick={() => updateUser({})} >Logout</div>
  <div className="hom">
  	<div className="hom1">
  		<div className="hom1_left11">
		  <div className='hom1_left'>  
		     <h3>Summary Overview</h3>
		     <p>Today</p>
		     <p>Week</p>
		     <p>Month</p>
		  </div>
			<div className='hom1_left1_1'>
			  <CanvasJSChart options = {options} />
			</div>
  		</div>
  		<div className="hom1_right">
  			<h5>Delivered Percent</h5>
  			<p style={{color: "#aaa"}}>out of 0</p>
  			<h5 style={{textalign: "center", paddingtop: "60px"}}>No Data%</h5>
  			
  		</div>
  	</div>

  </div>

 <div className="hom2_0">
 	<h2>Quick Status</h2>
  <div className="hom2">
  		<div className="hom2_1">
  			<h3>Today</h3>
  			<h4>0</h4>
  		</div>

  		<div className="hom2_1">
  			<div className="hom2_2">
  			  <h3>Week</h3>
  			  <p style={{paddingtop: "5px"}}>(Excluding Today)</p>
  			  <h4>0</h4>
  		   </div>
  		</div>

  		<div className="hom2_1">
  			<h3>Month</h3>
  			<h4>0</h4>
  		</div>
  		
  	</div>
  </div>

  <div className="hom3" style={{paddingTop:"20px", paddingBottom:"20px"}}>
	  <select name="appli" style={{background:"none",border:"none",borderRadius:"3px",height:"35px",width:"230px",fontSize:"25px",fontWeight:"600", outline:"none"}} required>
          <option value="all">Scheduled SMS</option>
       </select>
  	
  </div>

  {/* ============Step4============== */}

  <div className="hom4">
  	
  	<div className="hom4_0">
  	<div className="hom4_left">
  		<h4>Quick Shortcuts</h4>
  		<div className="hom4_left1">
  			<p></p>
  			<p style={{width: "150px"}}>DLT Management</p>
			  <li><a className="nav-link" href="/Entity"><img  style={{width:"2rem",marginBottom:"10px"}} src='/Images/shape.svg'alt='wel'/></a></li>
  {/*<p><NavLink to="/Entity"><img  style={{width:"2rem",marginBottom:"10px",marginLeft:"-10px"}} src='/Images/shape.svg'alt='wel'/></NavLink></p>*/}
  		</div>

  		<div className="hom4_left2">
  			<a  href="/ScheduledCampaign" className='icon'><i style={{color:"red"}} className="fa-solid fa-bullhorn"></i></a>
  			<a href="/ScheduledCampaign" style={{width: "180px",color:"red"}}>Scheduled Campaigns</a>
  			<a href="/ScheduledCampaign" style={{marginLeft:"-14px",color:"red"}}>0</a>
  		</div>
  		<div className="hom4_left3">
  			<p className='icon1'><i className="fa-solid fa-user"></i></p>
  			<p >Inactive Accounts</p>
  			<p>0</p>
  		</div>
  		<div className="hom4_left4">
  			<a href="/SenderIds" className='icon2'><i style={{color:"blue"}} className="fa-solid fa-user"></i></a>
  			<a href="/SenderIds" style={{color:"blue"}}>Sender ID</a>
  			<a href="/SenderIds" style={{color:"blue"}}>10</a>
  		</div>

  		<div className="hom4_left5">
  			<a href="/Template" className='icon3'><i style={{color:"#3068b9"}} className="fa-solid fa-message"></i></a>
  			<a href="/Template" style={{color:"#3068b9"}}>Templates</a>
  			<a href="/Template" style={{color:"#3068b9"}}>15</a>
  		</div>
  		
  	</div>
  	<div className="hom4_right">
  		<h4 style={{paddingLeft:"10px"}}>Phonebook - Quick Shortcuts</h4>
  		<div className="hom4_right1">
  			<div className="hom4_right2">
  				<p><a className="nav-link" href="/Contact"><img  style={{width:"3rem",marginBottom:"10px"}} src='/Images/contact-icon.svg'alt='wel'/></a></p>
  				<p>0 Contacts</p>
  			</div>
  			<div className="hom4_right2_1">
  				<p><a className="nav-link" href="/Groups"><img  style={{width:"3rem",marginBottom:"10px"}} src='/Images/group-icon.svg'alt='wel'/></a></p>
               <p>0 Groups</p>
  			</div>
  		</div>
  	</div>
  </div>
  </div>

  </div>
  )
}
// }

export default Home;