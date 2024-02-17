import React from 'react'
import SideNav, { NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import './sidebar.css';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sid1'>
    <SideNav className="sid2"
       onSelect={(selected) => {
       console.log(selected);
        }}
        >
        <SideNav.Toggle />
         <SideNav.Nav defaultSelected="home">

         <NavItem className="sitt">
         <NavIcon>
         <NavLink to="./NewSMS">
              <i className="fa-sharp fa-solid fa-plus  sharp" style={{fontSize:"1.5em"}}></i>
              </NavLink>
         </NavIcon>
         <NavText> <NavLink to="./NewSMS">New SMS</NavLink></NavText>
        </NavItem>
        
         <NavItem>
         <NavIcon>
         <NavLink to="./">
              <i className="fa fa-fw fa-home" style={{fontSize:"1.5em"}}></i>
              </NavLink>
         </NavIcon>
         <NavText> <NavLink to="./">Dashboard</NavLink></NavText>
        </NavItem>

        <NavItem>
        <NavIcon>
        <NavLink to="./Campaign1">
              <i className="fa fa-fw fa-bullhorn" style={{fontSize:"1.5em"}}></i>
              </NavLink>
         </NavIcon>
         <NavText><NavLink to="./Campaign1">Campaign</NavLink></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <NavLink to="./TUC">
              <i className="fa fa-fw fa-user" style={{fontSize:"1.5em"}}></i>
              </NavLink>
         </NavIcon>
         <NavText><NavLink to="./TUC">User Management</NavLink></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <NavLink to="./UserwiseAllocation">
              <i className="fa fa-fw fa-bolt" style={{fontSize:"1.5em"}}></i>
              </NavLink>
         </NavIcon>
         <NavText> <NavLink to="./UserwiseAllocation">Credits</NavLink></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <NavLink to="/MIS">
         <img  style={{width:"1.5rem",marginBottom:"10px"}} src='/Images/activity.svg'alt='wel'/>
              </NavLink>
         </NavIcon>
         <NavText><NavLink to="/MIS">Reports</NavLink></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
          <NavLink to="/PartnerSummary">
              <i className="fa fa-fw fa-arrow-trend-up" style={{fontSize:"1.5em"}}></i>
              </NavLink>
         </NavIcon>
         <NavText><NavLink to="/PartnerSummary">Telco Reports</NavLink></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <NavLink to="/Entity">
              <i className="fa fa-fw fa-gear" style={{fontSize:"1.5em"}}></i>
              </NavLink>
         </NavIcon>
         <NavText><NavLink to="/Entity">DLT</NavLink></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <NavLink to="./Api">
              <i className="fa fa-fw fa-cloud-arrow-up" style={{fontSize:"1.5em"}}></i>
              </NavLink>
         </NavIcon>
         <NavText> <NavLink to="./Api">API</NavLink></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <NavLink to="./Groups">
              <i className="fa fa-fw fa-book" style={{fontSize:"1.5em"}}></i>
              </NavLink>
         </NavIcon>
         <NavText><NavLink to="./Groups">Phonebook</NavLink></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <NavLink to="./Notification">
              <i className="fa fa-fw fa-bell" style={{fontSize:"1.5em"}}></i>
              </NavLink>
         </NavIcon>
         <NavText> <NavLink to="./Notification">Notification</NavLink></NavText>
        </NavItem>
        
      </SideNav.Nav>
     </SideNav>
    </div>
  )
}

export default Sidebar;