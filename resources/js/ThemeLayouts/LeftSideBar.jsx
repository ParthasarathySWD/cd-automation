import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/**
 * LeftSideBar Component
 */
class LeftSideBar extends React.Component {
   render() {
      return (
         <header>
            <a href="#!" className="menu_toggle"><i className="fa fa-angle-left"></i></a>
            <div className="navbar-brand">
               <a href="index.html"><img src="../../images/robot.png" alt="CD Automation" className="img-fluid logo"/><span>CD Automation</span></a>
               <button type="button" className="btn-toggle-offcanvas btn btn-sm float-right"><i className="fa fa-close"></i></button>
            </div>
            <div className="sidebar-scroll">
               <div className="user-account">
                  <div className="user_div">
                     <img src="../../images/user.png" className="user-photo" alt="User Profile Picture"/>
                  </div>
                  <div className="dropdown">
                     <span>Welcome</span>
                     <a href="#!" className="dropdown-toggle user-name" data-toggle="dropdown"><strong>Dr. Alan Green</strong></a>
                     <ul className="dropdown-menu dropdown-menu-right account vivify flipInY">
                        <li><a href="dr-profile.html"><i className="fa fa-user"></i>My Profile</a></li>
                        <li><a href="app-inbox.html"><i className="fa fa-envelope"></i>Messages</a></li>
                        <li><a href="setting.html"><i className="fa fa-gear"></i>Settings</a></li>
                        <li className="divider"></li>
                        <li><a href="page-login.html"><i className="fa fa-power-off"></i>Logout</a></li>
                     </ul>
                  </div>
               </div>
               <nav id="left-sidebar-nav" className="sidebar-nav">
                  <ul id="main-menu" className="metismenu animation-li-delay">
                     <li className="header">Hospital</li>
                     <li className=""><Link to={'/dashboard'} className="nav-link"><i className="fa fa-dashboard"></i> <span>Dashboard</span></Link></li>
                     <li  className="active"><Link to={'/orderentry'} className="nav-link"><i className="fa fa-external-link-square" aria-hidden="true"></i> <span>Order Entry</span></Link></li>
                     <li  className="active"><Link to={'/myorders'} className="nav-link"><i className="fa fa-list" aria-hidden="true"></i> <span>My Orders</span></Link></li>
                     <li  className="active"><Link to={'/clientlogin'} className="nav-link"><i className="fa fa-list" aria-hidden="true"></i> <span>Client Login</span></Link></li>

                     <li>
                        <a href="#!" className="has-arrow"><i className="fa fa-users"></i><span>User</span></a>
                        <ul>
                           <li><Link to={'/alluser'} className="nav-link"> All User </Link></li>
                           <li><Link to={'/adduser'} className="nav-link">Add User</Link></li>
                        </ul>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>
      );
   }
}
export default LeftSideBar;
