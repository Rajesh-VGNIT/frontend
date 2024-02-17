import React from "react"
// import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NewSMS from "./Pages/New SMS/NewSMS";
import RightNav from './Components/RightNav/RightNav';
import Sidebar from './Components/Sidebar/Sidebar';
import Wel from './Components/Wel'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Campaign from "./Pages/Campaign/Campaign";
import UserNavbar from "./Pages/User Management/UserNavbar";
import Tuc from "./Pages/User Management/TUC/Tuc";
import User from "./Pages/User Management/User/User";
import Notification from "./Pages/Notification/Notification";
import Groups from "./Pages/Phonebook/Groups/Groups";
import Contact from "./Pages/Phonebook/Contact/Contact";
import Credits from "./Pages/Credits/Credits";
import UserwiseAllocation from "./Pages/Credits/UserwiseAllocation/UserwiseAllocation";
import AllAllocation from "./Pages/Credits/All Allocation/AllAllocation";


import Api from "./Pages/API/Api";
import Phonebook from "./Pages/Phonebook/Phonebook";
import Dlt from "./Pages/dlt/Dlt";
import Entity from "./Pages/dlt/Curd6/Entity IDs/Entity";
import SenderIDs from "./Pages/dlt/SenderIDs";
import Template from "./Pages/dlt/Template";
import BulkUpload from "./Pages/dlt/BulkUpload";
import URL from "./Pages/dlt/URL";
import Search from "./Pages/dlt/Search";
import TelcoReports from "./Pages/Telco Reports/TelcoReports";
import PartnerSummary from "./Pages/Telco Reports/PartnerSummary";
import TUCSummary from "./Pages/Telco Reports/TUCSummary";
import Report from "./Pages/Reports/Report";
import MIS from "./Pages/Reports/MIS";
import Summary from "./Pages/Reports/Summary";
import CampaignSummary from "./Pages/Reports/CampaignSummary";
import SearchReport from "./Pages/Reports/SearchReport";
import SenderIDSummary from "./Pages/Reports/SenderIDSummary";
import ClickerData from "./Pages/Reports/ClickerData";
import ClickerDetail from "./Pages/Reports/ClickerDetail";
import ScheduledCampaign from "./Pages/Reports/ScheduledCampaign";
import DownloadData from "./Pages/Reports/DownloadData";
import QuickEnglishSMS from "./Pages/New SMS/Quick English SMS/QuickEnglishSMS";
import QuickSMS from "./Pages/New SMS/Quick English SMS/QuickSMS";
import ViewSchedule from "./Pages/New SMS/Quick English SMS/ViewSchedule";
import QuickUnicode from "./Pages/New SMS/Quick Unicode Multilingual SMS/QuickUnicode";
import UnicodeSMS from "./Pages/New SMS/Quick Unicode Multilingual SMS/UnicodeSMS";
import DynamicSMS from "./Pages/New SMS/Dynamic SMS/DynamicSMS";
import DynamicSMS1 from "./Pages/New SMS/Dynamic SMS/DynamicSMS1";
import MultipleDynamicSMS from "./Pages/New SMS/Multiple Dynamic SMS/MultipleDynamicSMS";
import DynamicTemplateSMS from "./Pages/New SMS/Multiple Dynamic SMS/DynamicTemplateSMS";
import CampaignSMS from "./Pages/New SMS/Campaign SMS/CampaignSMS";
import CampaignSMS1 from "./Pages/New SMS/Campaign SMS/CampaignSMS1";
import NotFound from "./Pages/Not Found page/NotFound";
import AddTenantCustomer from "./Pages/User Management/TUC/AddTenantCustomer";
import CreateUser from "./Pages/User Management/User/CreateUser";
import UserSetting from "./Pages/User Settings/UserSetting";
import MyAccount from "./Pages/User Settings/MyAccount";

import ChangePassword from "./Pages/User Settings/ChangePassword";
import LoginHistory from "./Pages/User Settings/LoginHistory";
import Alerts from "./Pages/User Settings/Alerts";
import Login from "./Pages/LoginForm/Login";
import Campaign1 from "./Pages/Campaign/Curd/Campaign1";

import Edit from "./Pages/Campaign/Curd/Edit";
import Create from "./Pages/Campaign/Curd/Create";
import Create6 from "./Pages/dlt/Curd6/Entity IDs/Create6";
import Edit6 from "./Pages/dlt/Curd6/Entity IDs/Edit6";
import EditUser2 from "./Pages/User Management/User/EditUser2";
import Register from "./Pages/LoginForm/Register";
import PrivateComponent from "./Components/PrivateComponent";
import Logout from "./Pages/User Settings/Logout";


function App() {
  // const [token, setToken] = useState(true);
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  
  return (
    <div className="App">
    <BrowserRouter>
    <Sidebar />
    <Header />
    <RightNav />
     <Routes>

      <Route element={<PrivateComponent />}>
     <Route path="/" element={<Home/>}>Home</Route>
      {/* New SMS pages*/}
     <Route path="/newsms" element={<NewSMS/>}/>
     <Route path="/quickenglishsms" element={<QuickEnglishSMS/>}/>
     <Route path="/quicksms" element={<QuickSMS/>}/>
     <Route path="/viewschedule" element={<ViewSchedule/>}/>
      {/* Quick Unicode/Multilingual SMS pages*/}
      <Route path="/quickunicode" element={<QuickUnicode/>}/>
      <Route path="/UnicodeSMS" element={<UnicodeSMS/>}/>
      {/*Dynamic SMS pages*/}
      <Route path="/DynamicSMS" element={<DynamicSMS/>}/>
      <Route path="/DynamicSMS1" element={<DynamicSMS1/>}/>
      {/*Multiple Dynamic SMS pages*/}
      <Route path="/MultipleDynamicSMS" element={<MultipleDynamicSMS/>}/>
      <Route path="/DynamicTemplateSMS" element={<DynamicTemplateSMS/>}/>
      {/*Campaign SMS pages*/}
      <Route path="/CampaignSMS" element={<CampaignSMS/>}/>
      <Route path="/CampaignSMS1" element={<CampaignSMS1/>}/>

    {/*<Route path="/rightnav" element={<RightNav/>}>RightNav</Route>*/}
    <Route path="/wel" element={<Wel/>}>Wel</Route>
    <Route path="/campaign1" element={<Campaign1/>}>Campaign</Route>
   
    <Route path="/Edit" element={<Edit/>}/>
    <Route path="/Create" element={<Create/>}/>
    {/* Credits pages*/}
    <Route path="/credits" element={<Credits/>}>Credits</Route>
    <Route path="/UserwiseAllocation" element={<UserwiseAllocation/>}/>
    <Route path="/allAllocation" element={<AllAllocation/>}/>
    <Route path="/api" element={<Api/>}>Api</Route>

    {/* Reports pages*/}
    <Route path="/report" element={<Report/>}/>
    <Route path="/mis" element={<MIS/>}/>
    <Route path="/summary" element={<Summary/>}/>
    <Route path="/CampaignSummary" element={<CampaignSummary/>}/>
    <Route path="/SearchReport" element={<SearchReport/>}/>
    <Route path="/SenderIDSummary" element={<SenderIDSummary/>}/>
    <Route path="/clickerdata" element={<ClickerData/>}/>
    <Route path="/clickerdetail" element={<ClickerDetail/>}/>
    <Route path="/ScheduledCampaign" element={<ScheduledCampaign/>}/>
    <Route path="/downloaddata" element={<DownloadData/>}/>
     {/* Telco Reports pages*/}
     <Route path="/telcoreports" element={<TelcoReports/>}/>
     <Route path="/PartnerSummary" element={<PartnerSummary/>}/>
     <Route path="/TUCSummary" element={<TUCSummary/>}/>
    {/* Phonebook pages*/}
    <Route path="/phonebook" element={<Phonebook/>}>Phonebook</Route>
    <Route path="/groups" element={<Groups/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/notification" element={<Notification/>}>Notification</Route>
    {/* User Management pages*/}
    <Route path="/userNavbar" element={<UserNavbar/>}>UserNavbar</Route>
    <Route path="/tuc" element={<Tuc/>}>Tuc</Route>
    <Route path="/addtenantcustomer" element={<AddTenantCustomer/>}/>
    <Route path="/user" element={<User/>}>User</Route>
    <Route path="/createuser" element={<CreateUser/>}/>
    <Route path="/edituser2" element={<EditUser2/>}/>
    

    {/* Dlt pages*/}
    <Route path="/dlt" element={<Dlt/>}/>
   <Route path="/entity" element={<Entity/>}/>
   <Route path="/create6" element={<Create6/>}/>
   <Route path="/edit6" element={<Edit6/>}/>
   <Route path="/senderids" element={<SenderIDs/>}/>
   <Route path="/template" element={<Template/>}/>
   <Route path="/bulkupload" element={<BulkUpload/>}/> 
   <Route path="/url" element={<URL/>}/> 
   <Route path="/search" element={<Search/>}/> 

    {/* User Settings*/}
    <Route path="/UserSetting" element={<UserSetting/>}/>
    <Route path="/myaccount" element={<MyAccount/>}/>
    <Route path="/alerts" element={<Alerts/>}/>
    <Route path="/ChangePassword" element={<ChangePassword/>}/>
    <Route path="/LoginHistory" element={<LoginHistory/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/*" element={<NotFound/>} />
 </Route>
   
   {/* Login Form*/}
   <Route path="/Login" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   
    
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
