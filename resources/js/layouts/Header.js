import React from 'react'

/**
 * Header Component
 */
class Header extends React.Component {
   render() {
      return (  

         <div className="container-fluid">
            <div className="navbar-left">
               <div className="navbar-btn">
                  <a href="index.html"><img alt="Mooli Logo" className="img-fluid logo"/></a>
                  <button type="button" className="btn-toggle-offcanvas"><i className="fa fa-align-left"></i></button>
               </div>
               <form id="navbar-search" className="navbar-form search-form">
                  <button type="button" className="btn btn-default"><i className="icon-magnifier"></i></button>
                  <input className="form-control" placeholder="Search here..." type="text"/>
               </form>
            </div>
            <div className="navbar-right">
               <div id="navbar-menu">
                  <ul className="nav navbar-nav">
                     <li><a href="#!" className="right_note icon-menu" title="Right Menu">Notes</a></li>
                     <li className="dropdown hidden-xs">
                        <a href="#!" className="dropdown-toggle icon-menu" data-toggle="dropdown">Create</a>
                        <div className="dropdown-menu pb-0 mt-0">
                           <a className="dropdown-item pt-2 pb-2" href="#!">User</a>
                           <a className="dropdown-item pt-2 pb-2" href="#!">Invoce</a>
                           <a className="dropdown-item pt-2 pb-2" href="#!">Report</a>
                        </div>
                     </li>
                     <li className="dropdown hidden-xs">
                        <a href="#!" className="dropdown-toggle icon-menu" data-toggle="dropdown">
                           <i className="fa fa-envelope-o"></i>
                           <span className="notification-dot msg">4</span>
                        </a>
                        <ul className="dropdown-menu right_chat email mt-0 animation-li-delay">
                           <li className="header theme-bg gradient mt-0 text-light">You have 4 New eMail</li>
                           <li>
                              <a href="#!">
                                 <div className="media">
                                    <img className="media-object " alt=""/>
                                    <div className="media-body">
                                       <span className="name">Dr. James Wert <small className="float-right font-12">Just now</small></span>
                                       <span className="message">Update GitHub</span>
                                    </div>
                                 </div>
                              </a>
                           </li>
                           <li>
                              <a href="#!">
                                 <div className="media">
                                    <img className="media-object" alt=""/>
                                    <div className="media-body">
                                       <span className="name">Dr. Folisise Chosielie <small className="float-right font-12">12min ago</small></span>
                                       <span className="message">New Messages</span>
                                    </div>
                                 </div>
                              </a>
                           </li>
                           <li>
                              <a href="#!">
                                 <div className="media">
                                    <img className="media-object" alt=""/>
                                    <div className="media-body">
                                       <span className="name">As.Louis Henry <small className="float-right font-12">38min ago</small></span>
                                       <span className="message">Design bug fix</span>
                                    </div>
                                 </div>
                              </a>
                           </li>
                           <li>
                              <a href="#!">
                                 <div className="media mb-0">
                                    <img className="media-object" alt=""/>
                                    <div className="media-body">
                                       <span className="name">Dr. Debra Stewart <small className="float-right font-12">2hr ago</small></span>
                                       <span className="message">Fix Bug</span>
                                    </div>
                                 </div>
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className="dropdown">
                        <a href="#!" className="dropdown-toggle icon-menu" data-toggle="dropdown">
                           <i className="fa fa-bell-o"></i>
                           <span className="notification-dot info">4</span>
                        </a>
                        <ul className="dropdown-menu feeds_widget mt-0 animation-li-delay">
                           <li className="header theme-bg gradient mt-0 text-light">You have 4 New Notifications</li>
                           <li>
                              <a href="#">
                                 <div className="mr-4"><i className="fa fa-check text-red"></i></div>
                                 <div className="feeds-body">
                                    <h4 className="title text-danger">Issue Fixed <small className="float-right text-muted font-12">9:10 AM</small></h4>
                                    <small>WE have fix all Design bug with Responsive</small>
                                 </div>
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <div className="mr-4"><i className="fa fa-user text-info"></i></div>
                                 <div className="feeds-body">
                                    <h4 className="title text-info">New User <small className="float-right text-muted font-12">9:15 AM</small></h4>
                                    <small>I feel great! Thanks team</small>
                                 </div>
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <div className="mr-4"><i className="fa fa-question-circle text-warning"></i></div>
                                 <div className="feeds-body">
                                    <h4 className="title text-warning">Server Warning <small className="float-right text-muted font-12">9:17 AM</small></h4>
                                    <small>Your connection is not private</small>
                                 </div>
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <div className="mr-4"><i className="fa fa-thumbs-o-up text-success"></i></div>
                                 <div className="feeds-body">
                                    <h4 className="title text-success">2 New Feedback <small className="float-right text-muted font-12">9:22 AM</small></h4>
                                    <small>It will give a smart finishing to your site</small>
                                 </div>
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className="dropdown language-menu hidden-xs">
                        <a href="#!" className="dropdown-toggle icon-menu" data-toggle="dropdown"><i className="fa fa-language"></i></a>
                        <div className="dropdown-menu language_widget mt-0">
                           <a className="dropdown-item pt-2 pb-2" href="#!"><img  alt="US English" /> US English</a>
                           <a className="dropdown-item pt-2 pb-2" href="#!"><img  alt="UK English" /> UK English</a>
                           <div className="dropdown-divider"></div>
                           <a className="dropdown-item pt-2 pb-2" href="#!"><img  alt="Russian" /> Russian</a>
                           <a className="dropdown-item pt-2 pb-2" href="#!"><img  alt="Arabic" /> Arabic</a>
                           <a className="dropdown-item pt-2 pb-2" href="#!"><img  alt="French" /> French</a>
                        </div>
                     </li>
                     <li><a href="#!" className="right_toggle icon-menu" title="Right Menu"><i className="fa fa-comments-o"></i></a></li>
                     <li className="hidden-xs"><a href="#!" id="btnFullscreen" className="icon-menu"><i className="fa fa-arrows-alt"></i></a></li>
                     <li><a href="page-login.html" className="icon-menu"><i className="fa fa-power-off"></i></a></li>
                  </ul>
               </div>
            </div>
            <div className="recent_searche" style={{display: 'none'}} >
               <div className="card mb-0">
                  <div className="header">
                     <h2>Recent search result</h2>
                     <ul className="header-dropdown dropdown">
                        <li><a href="#!">Clear data</a></li>
                        <li><a href="page-search-results.html"><i className="fa fa-external-link"></i></a></li>
                     </ul>
                  </div>
                  <div className="body">
                     <ul className="list-group list-group-flush">
                        <li className="list-group-item p-l-0 p-r-0">
                           <h6><a href="#">Crush it - Bootstrap Admin Application Template &amp; Ui Kit</a></h6>
                           <p className="text-muted">It is a long established fact that a reader will be distracted.</p>
                           <div className="text-muted font-13">
                              <ul className="list-inline">
                                 <li className="list-inline-item"><span className="badge badge-secondary margin-0">React</span></li>
                                 <li className="list-inline-item">Dec 27 2020</li>
                              </ul>
                           </div>
                        </li>
                        <li className="list-group-item p-l-0 p-r-0">
                           <h6><a href="#">Epic Pro - HR &amp; Project Management Admin Template and UI Kit</a></h6>
                           <p className="text-muted">he point of using Lorem Ipsum is that it has a more-or-less English.</p>
                           <div className="text-muted font-13">
                              <ul className="list-inline">
                                 <li className="list-inline-item"><span className="badge badge-success margin-0">HTML</span></li>
                                 <li className="list-inline-item">Oct 13 2020</li>
                              </ul>
                           </div>
                        </li>
                        <li className="list-group-item p-l-0 p-r-0">
                           <h6><a href="#">Qubes - Responsive Admin Dashboard Template</a></h6>
                           <p className="text-muted">Commodo excepteur non ut aliqua ex qui velit sed esse consequat in </p>
                           <div className="text-muted font-13">
                              <ul className="list-inline">
                                 <li className="list-inline-item"><span className="badge badge-danger margin-0">Bootstrap</span></li>
                                 <li className="list-inline-item">Sep 27 2020</li>
                              </ul>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>

      );
   }
}

export default Header;