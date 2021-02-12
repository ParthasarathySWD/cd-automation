import React from 'react'

/**
 * LeftSideBar Component
 */
class LeftSideBar extends React.Component {
   render() {
      return (
         <header>
            <a href="#!" className="menu_toggle"><i className="fa fa-angle-left"></i></a>
            <div className="navbar-brand">
               <a href="index.html"><img alt="Mooli Logo" className="img-fluid logo"/><span>Mooli-Hospital</span></a>
               <button type="button" className="btn-toggle-offcanvas btn btn-sm float-right"><i className="fa fa-close"></i></button>
            </div>
            <div className="sidebar-scroll">
               <div className="user-account">
                  <div className="user_div">
                     <img className="user-photo" alt="User Profile Picture"/>
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
                     <li className="active"><a href="index.html"><i className="fa fa-dashboard"></i> <span>Dashboard</span></a></li>
                     <li>
                        <a href="#Doctors" className="has-arrow"><i className="fa fa-user-md"></i><span>Doctors</span></a>
                        <ul>
                           <li><a href="dr-all.html">All Doctors</a></li>
                           <li><a href="dr-add.html">Add Doctors</a></li>
                           <li><a href="dr-profile.html">Doctors Profile</a></li>
                           <li><a href="dr-schedule.html">Doctors Schedule</a></li>
                        </ul>
                     </li>
                     <li><a href="app-calendar.html"><i className="fa fa-calendar"></i> <span>Appointment</span></a></li>
                     <li><a href="app-todo.html"><i className="fa fa-th-list"></i> <span>Todo List</span></a></li>
                     <li>
                        <a href="#Patients" className="has-arrow"><i className="fa fa-user-circle-o"></i><span>Patients</span></a>
                        <ul>
                           <li><a href="patients-all.html">All Patient</a></li>
                           <li><a href="patients-add.html">Add Patient</a></li>
                           <li><a href="patients-profile.html">Patient Profile</a></li>
                           <li><a href="patients-invoice.html">Patient Invoices</a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="#Room" className="has-arrow"><i className="fa fa-thumbs-up"></i><span>Room Allotment</span></a>
                        <ul>
                           <li><a href="room-allotment.html">Alloted Rooms</a></li>
                           <li><a href="room-add.html">Add Allotment</a></li>
                        </ul>
                     </li>
                     <li><a href="departments.html"><i className="fa fa-table"></i><span>Departments</span></a></li>
                     <li>
                        <a href="#Payments" className="has-arrow"><i className="fa fa-cc-paypal"></i><span>Payments</span></a>
                        <ul>
                           <li><a href="payments.html">Payments</a></li>
                           <li><a href="payments-add.html">Add Payments</a></li>
                           <li><a href="payments-invoice.html">Invoice</a></li>
                        </ul>
                     </li>
                     <li className="header">Admin</li>
                     <li><a href="app-inbox.html"><i className="fa fa-envelope"></i> <span>Email</span> <span className="badge badge-default mr-0">12</span></a></li>
                     <li><a href="app-chat.html"><i className="fa fa-comments"></i> <span>Chat</span></a></li>
                     <li><a href="our-staffs.html"><i className="fa fa-users"></i><span>Our Staffs</span></a></li>
                     <li><a href="app-contacts.html"><i className="fa fa-address-book"></i> <span>Contacts</span></a></li>
                     <li><a href="app-filemanager.html"><i className="fa fa-folder"></i> <span>File Manager</span></a></li>
                     <li><a href="our-centres.html"><i className="fa fa-map-marker"></i><span>Our Centres</span></a></li>
                     <li className="header">Social</li>
                     <li><a href="page-news.html"><i className="fa fa-globe"></i> <span>Blog</span></a></li>
                     <li><a href="page-social.html"><i className="fa fa-share-alt-square"></i> <span>Social</span></a></li>
                     <li className="extra_widget">
                        <div className="form-group">
                           <label className="d-block">Traffic this Month <span className="float-right">77%</span></label>
                           <div className="progress progress-xxs">
                              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: 77 + '%'}}></div>
                           </div>
                        </div>
                        <div className="form-group">
                           <label className="d-block">Server Load <span className="float-right">50%</span></label>
                           <div className="progress progress-xxs">
                              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: 50 + '%'}}></div>
                           </div>
                        </div>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>
      );
   }
}
export default LeftSideBar;