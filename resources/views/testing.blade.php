<!doctype html>
<html lang="en">

<head>
<title>Mooli | Add Doctors</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="description" content="Mooli Bootstrap 4x admin is super flexible, powerful, clean &amp; modern responsive admin dashboard with unlimited possibilities.">
<meta name="author" content="GetBootstrap, design by: puffintheme.com">

<link rel="icon" href="favicon.ico" type="image/x-icon">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">


</head>
<body>
    
<div id="body" class="theme-green">
    <!-- Page Loader -->
    <div class="page-loader-wrapper">
        <div class="loader">
            <div class="mt-3"><img src="assets/images/icon.svg" width="40" height="40" alt="Mooli"></div>
            <p>Please wait...</p>        
        </div>
    </div>

    <!-- Theme Setting -->
    <div class="themesetting">
        <a href="javascript:void(0);" class="theme_btn"><i class="fa fa-gear fa-spin"></i></a>
        <ul class="list-group">
            <li class="list-group-item">
                <ul class="choose-skin list-unstyled mb-0">
                    <li data-theme="green" class="active"><div class="green"></div></li>
                    <li data-theme="orange"><div class="orange"></div></li>
                    <li data-theme="blush"><div class="blush"></div></li>
                    <li data-theme="cyan"><div class="cyan"></div></li>
                    <li data-theme="timber"><div class="timber"></div></li>
                    <li data-theme="blue"><div class="blue"></div></li>
                    <li data-theme="amethyst"><div class="amethyst"></div></li>
                </ul>
            </li>
            <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>Light Sidebar</span>
                <label class="switch sidebar_light">
                    <input type="checkbox" checked="">
                    <span class="slider round"></span>
                </label>
            </li>
            <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>Gradient</span>
                <label class="switch gradient_mode">
                    <input type="checkbox" checked="">
                    <span class="slider round"></span>
                </label>
            </li>
            <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>Dark Mode</span>
                <label class="switch dark_mode">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
            </li>
            <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>RTL version</span>
                <label class="switch rtl_mode">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
            </li>
        </ul>
        <hr>
        <div>
            <a href="https://themeforest.net/user/puffintheme/portfolio" class="btn btn-dark btn-block" target="_blank">Buy this item</a>
            <a href="https://themeforest.net/user/puffintheme/portfolio" target="_blank" class="btn btn-primary theme-bg gradient btn-block">View Portfolio</a>
        </div>
    </div>

    <!-- Overlay For Sidebars -->
    <div class="overlay"></div>

    <div id="wrapper">

        <!-- Page top navbar -->
        <nav class="navbar navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-left">
                    <div class="navbar-btn">
                        <a href="index.html"><img src="assets/images/icon.svg" alt="Mooli Logo" class="img-fluid logo"></a>
                        <button type="button" class="btn-toggle-offcanvas"><i class="fa fa-align-left"></i></button>
                    </div>
                    <form id="navbar-search" class="navbar-form search-form">
                        <button type="button" class="btn btn-default"><i class="icon-magnifier"></i></button>
                        <input value="" class="form-control" placeholder="Search here..." type="text">                    
                    </form>
                </div>
                <div class="navbar-right">
                    <div id="navbar-menu">
                        <ul class="nav navbar-nav">
                            <li><a href="javascript:void(0);" class="right_note icon-menu" title="Right Menu">Notes</a></li>
                            <li class="dropdown hidden-xs">
                                <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">Create</a>
                                <div class="dropdown-menu pb-0 mt-0">
                                    <a class="dropdown-item pt-2 pb-2" href="javascript:void(0);">User</a>
                                    <a class="dropdown-item pt-2 pb-2" href="javascript:void(0);">Invoce</a>
                                    <a class="dropdown-item pt-2 pb-2" href="javascript:void(0);">Report</a>
                                </div>
                            </li>
                            <li class="dropdown hidden-xs">
                                <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">
                                    <i class="fa fa-envelope-o"></i>
                                    <span class="notification-dot msg">4</span>
                                </a>
                                <ul class="dropdown-menu right_chat email mt-0 animation-li-delay">
                                    <li class="header theme-bg gradient mt-0 text-light">You have 4 New eMail</li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="media">
                                                <img class="media-object " src="assets/images/xs/avatar4.jpg" alt="">
                                                <div class="media-body">
                                                    <span class="name">Dr. James Wert <small class="float-right font-12">Just now</small></span>
                                                    <span class="message">Update GitHub</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="media">
                                                <img class="media-object" src="assets/images/xs/avatar1.jpg" alt="">
                                                <div class="media-body">
                                                    <span class="name">Dr. Folisise Chosielie <small class="float-right font-12">12min ago</small></span>
                                                    <span class="message">New Messages</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="media">
                                                <img class="media-object" src="assets/images/xs/avatar5.jpg" alt="">
                                                <div class="media-body">
                                                    <span class="name">As.Louis Henry <small class="float-right font-12">38min ago</small></span>
                                                    <span class="message">Design bug fix</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="media mb-0">
                                                <img class="media-object" src="assets/images/xs/avatar2.jpg" alt="">
                                                <div class="media-body">
                                                    <span class="name">Dr. Debra Stewart <small class="float-right font-12">2hr ago</small></span>
                                                    <span class="message">Fix Bug</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">
                                    <i class="fa fa-bell-o"></i>
                                    <span class="notification-dot info">4</span>
                                </a>
                                <ul class="dropdown-menu feeds_widget mt-0 animation-li-delay">
                                    <li class="header theme-bg gradient mt-0 text-light">You have 4 New Notifications</li>
                                    <li>
                                        <a href="#">
                                            <div class="mr-4"><i class="fa fa-check text-red"></i></div>
                                            <div class="feeds-body">
                                                <h4 class="title text-danger">Issue Fixed <small class="float-right text-muted font-12">9:10 AM</small></h4>
                                                <small>WE have fix all Design bug with Responsive</small>
                                            </div>
                                        </a>
                                    </li>                               
                                    <li>
                                        <a href="#">
                                            <div class="mr-4"><i class="fa fa-user text-info"></i></div>
                                            <div class="feeds-body">
                                                <h4 class="title text-info">New User <small class="float-right text-muted font-12">9:15 AM</small></h4>
                                                <small>I feel great! Thanks team</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="mr-4"><i class="fa fa-question-circle text-warning"></i></div>
                                            <div class="feeds-body">
                                                <h4 class="title text-warning">Server Warning <small class="float-right text-muted font-12">9:17 AM</small></h4>
                                                <small>Your connection is not private</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="mr-4"><i class="fa fa-thumbs-o-up text-success"></i></div>
                                            <div class="feeds-body">
                                                <h4 class="title text-success">2 New Feedback <small class="float-right text-muted font-12">9:22 AM</small></h4>
                                                <small>It will give a smart finishing to your site</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown language-menu hidden-xs">
                                <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown"><i class="fa fa-language"></i></a>
                                <div class="dropdown-menu language_widget mt-0">
                                    <a class="dropdown-item pt-2 pb-2" href="javascript:void(0);"><img src="assets/images/flag/us.svg" alt="US English" > US English</a>
                                    <a class="dropdown-item pt-2 pb-2" href="javascript:void(0);"><img src="assets/images/flag/gb.svg" alt="UK English" > UK English</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item pt-2 pb-2" href="javascript:void(0);"><img src="assets/images/flag/russia.svg" alt="Russian" > Russian</a>
                                    <a class="dropdown-item pt-2 pb-2" href="javascript:void(0);"><img src="assets/images/flag/arabia.svg" alt="Arabic" > Arabic</a>
                                    <a class="dropdown-item pt-2 pb-2" href="javascript:void(0);"><img src="assets/images/flag/france.svg" alt="French" > French</a>
                                </div>
                            </li>
                            <li><a href="javascript:void(0);" class="right_toggle icon-menu" title="Right Menu"><i class="fa fa-comments-o"></i></a></li>
                            <li class="hidden-xs"><a href="javascript:void(0);" id="btnFullscreen" class="icon-menu"><i class="fa fa-arrows-alt"></i></a></li>
                            <li><a href="page-login.html" class="icon-menu"><i class="fa fa-power-off"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="recent_searche" style="display: none;">
                    <div class="card mb-0">
                        <div class="header">
                            <h2>Recent search result</h2>
                            <ul class="header-dropdown dropdown">
                                <li><a href="javascript:void(0);">Clear data</a></li>
                                <li><a href="page-search-results.html"><i class="fa fa-external-link"></i></a></li>
                            </ul>
                        </div>
                        <div class="body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item p-l-0 p-r-0">
                                    <h6><a href="#">Crush it - Bootstrap Admin Application Template &amp; Ui Kit</a></h6>
                                    <p class="text-muted">It is a long established fact that a reader will be distracted.</p>
                                    <div class="text-muted font-13">
                                        <ul class="list-inline">
                                            <li class="list-inline-item"><span class="badge badge-secondary margin-0">React</span></li>
                                            <li class="list-inline-item">Dec 27 2020</li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="list-group-item p-l-0 p-r-0">
                                    <h6><a href="#">Epic Pro - HR &amp; Project Management Admin Template and UI Kit</a></h6>
                                    <p class="text-muted">he point of using Lorem Ipsum is that it has a more-or-less English.</p>
                                    <div class="text-muted font-13">
                                        <ul class="list-inline">
                                            <li class="list-inline-item"><span class="badge badge-success margin-0">HTML</span></li>
                                            <li class="list-inline-item">Oct 13 2020</li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="list-group-item p-l-0 p-r-0">
                                    <h6><a href="#">Qubes - Responsive Admin Dashboard Template</a></h6>
                                    <p class="text-muted">Commodo excepteur non ut aliqua ex qui velit sed esse consequat in </p>
                                    <div class="text-muted font-13">
                                        <ul class="list-inline">
                                            <li class="list-inline-item"><span class="badge badge-danger margin-0">Bootstrap</span></li>
                                            <li class="list-inline-item">Sep 27 2020</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Main left sidebar menu -->
        <div id="left-sidebar" class="sidebar light_active">
            <a href="#" class="menu_toggle"><i class="fa fa-angle-left"></i></a>
            <div class="navbar-brand">
                <a href="index.html"><img src="assets/images/icon.svg" alt="Mooli Logo" class="img-fluid logo"><span>Mooli-Hospital</span></a>
                <button type="button" class="btn-toggle-offcanvas btn btn-sm float-right"><i class="fa fa-close"></i></button>
            </div>
            <div class="sidebar-scroll">
                <div class="user-account">
                    <div class="user_div">
                        <img src="assets/images/user.png" class="user-photo" alt="User Profile Picture">
                    </div>
                    <div class="dropdown">
                        <span>Welcome</span>
                        <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown"><strong>Dr. Alan Green</strong></a>
                        <ul class="dropdown-menu dropdown-menu-right account vivify flipInY">
                            <li><a href="dr-profile.html"><i class="fa fa-user"></i>My Profile</a></li>
                            <li><a href="app-inbox.html"><i class="fa fa-envelope"></i>Messages</a></li>
                            <li><a href="setting.html"><i class="fa fa-gear"></i>Settings</a></li>
                            <li class="divider"></li>
                            <li><a href="page-login.html"><i class="fa fa-power-off"></i>Logout</a></li>
                        </ul>
                    </div>
                </div>  
                <nav id="left-sidebar-nav" class="sidebar-nav">
                    <ul id="main-menu" class="metismenu animation-li-delay">
                        <li class="header">Hospital</li>
                        <li><a href="index.html"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a></li>
                        <li class="active">
                            <a href="#Doctors" class="has-arrow"><i class="fa fa-user-md"></i><span>Doctors</span></a>
                            <ul>
                                <li><a href="dr-all.html">All Doctors</a></li>
                                <li class="active"><a href="dr-add.html">Add Doctors</a></li>
                                <li><a href="dr-profile.html">Doctors Profile</a></li>
                                <li><a href="dr-schedule.html">Doctors Schedule</a></li>
                            </ul>
                        </li>
                        <li><a href="app-calendar.html"><i class="fa fa-calendar"></i> <span>Appointment</span></a></li>
                        <li><a href="app-todo.html"><i class="fa fa-th-list"></i> <span>Todo List</span></a></li>
                        <li>
                            <a href="#Patients" class="has-arrow"><i class="fa fa-user-circle-o"></i><span>Patients</span></a>
                            <ul>
                                <li><a href="patients-all.html">All Patient</a></li>
                                <li><a href="patients-add.html">Add Patient</a></li>
                                <li><a href="patients-profile.html">Patient Profile</a></li>
                                <li><a href="patients-invoice.html">Patient Invoices</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#Room" class="has-arrow"><i class="fa fa-thumbs-up"></i><span>Room Allotment</span></a>
                            <ul>
                                <li><a href="room-allotment.html">Alloted Rooms</a></li>
                                <li><a href="room-add.html">Add Allotment</a></li>
                            </ul>
                        </li>
                        <li><a href="departments.html"><i class="fa fa-table"></i><span>Departments</span></a></li>
                        <li>
                            <a href="#Payments" class="has-arrow"><i class="fa fa-cc-paypal"></i><span>Payments</span></a>
                            <ul>
                                <li><a href="payments.html">Payments</a></li>
                                <li><a href="payments-add.html">Add Payments</a></li>
                                <li><a href="payments-invoice.html">Invoice</a></li>
                            </ul>
                        </li>
                        <li class="header">Admin</li>
                        <li><a href="app-inbox.html"><i class="fa fa-envelope"></i> <span>Email</span> <span class="badge badge-default mr-0">12</span></a></li>
                        <li><a href="app-chat.html"><i class="fa fa-comments"></i> <span>Chat</span></a></li>
                        <li><a href="our-staffs.html"><i class="fa fa-users"></i><span>Our Staffs</span></a></li>
                        <li><a href="app-contacts.html"><i class="fa fa-address-book"></i> <span>Contacts</span></a></li>
                        <li><a href="app-filemanager.html"><i class="fa fa-folder"></i> <span>File Manager</span></a></li>
                        <li><a href="our-centres.html"><i class="fa fa-map-marker"></i><span>Our Centres</span></a></li>
                        <li class="header">Social</li>
                        <li><a href="page-news.html"><i class="fa fa-globe"></i> <span>Blog</span></a></li>
                        <li><a href="page-social.html"><i class="fa fa-share-alt-square"></i> <span>Social</span></a></li>                        
                        <li class="extra_widget">
                            <div class="form-group">
                                <label class="d-block">Traffic this Month <span class="float-right">77%</span></label>
                                <div class="progress progress-xxs">
                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style="width: 77%;"></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="d-block">Server Load <span class="float-right">50%</span></label>
                                <div class="progress progress-xxs">
                                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>     
            </div>
        </div>
        <!-- Right bar chat  -->
        <div id="rightbar" class="rightbar">
            <div class="slim_scroll">
                <div class="chat_list">
                    <form>
                        <div class="input-group c_input_group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="icon-magnifier"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Search...">
                        </div>
                    </form>
                    <div class="body">
                        <ul class="nav nav-tabs3 white mt-3 d-flex text-center">
                            <li class="nav-item flex-fill"><a class="nav-link active show" data-toggle="tab" href="#chat-Users">Chat</a></li>
                            <li class="nav-item flex-fill"><a class="nav-link" data-toggle="tab" href="#chat-Groups">Groups</a></li>
                            <li class="nav-item flex-fill"><a class="nav-link mr-0" data-toggle="tab" href="#chat-Contact">Contact</a></li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane vivify fadeIn active show" id="chat-Users">
                                <ul class="right_chat list-unstyled mb-0 animation-li-delay">
                                    <li class="online">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object" src="assets/images/xs/avatar4.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Louis Henry <small class="text-muted font-12">10 min</small></span>
                                                <span class="message">How do you do?</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="online">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar5.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Debra Stewart <small class="text-muted font-12">15 min</small></span>
                                                <span class="message">I was wondering...</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="offline">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar2.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Lisa Garett <small class="text-muted font-12">18 min</small></span>
                                                <span class="message">I've forgotten how it felt before</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="offline">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar1.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Folisise Chosielie <small class="text-muted font-12">23 min</small></span>
                                                <span class="message">Wasup for the third time like...</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="online">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar3.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Marshall Nichols <small class="text-muted font-12">27 min</small></span>
                                                <span class="message">But we’re probably gonna need a new carpet.</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="online">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar5.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Debra Stewart <small class="text-muted font-12">38 min</small></span>
                                                <span class="message">It’s not that bad...</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="offline">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar2.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Lisa Garett <small class="text-muted font-12">45 min</small></span>
                                                <span class="message">How do you do?</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane vivify fadeIn" id="chat-Groups">
                                <ul class="right_chat list-unstyled mb-0 animation-li-delay">
                                    <li class="online">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object" src="assets/images/xs/avatar4.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Apolog Hospital<small class="text-muted font-12">10 min</small></span>
                                                <span class="message">How do you do?</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li class="offline">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar2.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Family Groups <small class="text-muted font-12">18 min</small></span>
                                                <span class="message">I've forgotten how it felt before</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li class="offline">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar1.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Friends holic <small class="text-muted font-12">23 min</small></span>
                                                <span class="message">Wasup for the third time like...</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li class="offline">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar2.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">New Hospital <small class="text-muted font-12">45 min</small></span>
                                                <span class="message">How do you do?</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane vivify fadeIn" id="chat-Contact">
                                <ul class="right_chat list-unstyled mb-0 animation-li-delay">
                                    <li class="offline">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar2.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Dr. John Smith <small class="text-muted"><i class="fa fa-star"></i></small></span>
                                                <span class="message">johnsmith@info.com</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li class="offline">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar1.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Merri Diamond <small class="text-muted"><i class="fa fa-heart"></i></small></span>
                                                <span class="message">hermanbeck@info.com</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li class="online">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object" src="assets/images/xs/avatar4.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Dr. Louis Henry <small class="text-muted"><i class="fa fa-star"></i></small></span>
                                                <span class="message">maryadams@info.com</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li class="online">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar5.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Andrew Patrick <small class="text-muted"><i class="fa fa-star"></i></small></span>
                                                <span class="message">mikethimas@info.com</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li class="online">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar3.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Claire Peters <small class="text-muted"><i class="fa fa-heart"></i></small></span>
                                                <span class="message">clairepeters@info.com</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li class="online">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar5.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Pro. Debra Stewart <small class="text-muted"><i class="fa fa-star"></i></small></span>
                                                <span class="message">It’s not that bad...</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li class="offline">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar2.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Dr. Lisa Garett <small class="text-muted"><i class="fa fa-star"></i></small></span>
                                                <span class="message">eringonzales@info.com</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li class="online">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object" src="assets/images/xs/avatar4.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">MD. Louis Henry <small class="text-muted"><i class="fa fa-star"></i></small></span>
                                                <span class="message">susiewillis@info.com</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li class="online">
                                        <a href="javascript:void(0);" class="media">
                                            <img class="media-object " src="assets/images/xs/avatar5.jpg" alt="">
                                            <div class="media-body">
                                                <span class="name">Debra Stewart <small class="text-muted"><i class="fa fa-star"></i></small></span>
                                                <span class="message">johnsmith@info.com</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        <!-- Stiky note div  -->
        <div class="sticky-note">
            <a href="javascript:void(0);" class="right_note"><i class="fa fa-close"></i></a>
            <div class="form-group c_form_group">
                <label>Write your note here</label>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter here...">
                    <div class="input-group-append"><button class="btn btn-dark btn-sm" type="button">Add</button></div>
                </div>
            </div>
            <div class="note-body">
                <div class="card note-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="font-10 text-muted">12 Apr 2020</span>
                        </div>
                        <div>
                            <a href="javascript:void(0);" class="star"><i class="fa fa-star-o"></i></a>
                            <a href="javascript:void(0);" class="delete"><i class="fa fa-trash"></i></a>
                        </div>
                    </div>
                    <div class="note-detail">
                        <span>Commit code on github branch development</span>
                    </div>
                </div>
                <div class="card note-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="font-10 text-muted">12 Apr 2020</span>
                        </div>
                        <div>
                            <a href="javascript:void(0);" class="star active"><i class="fa fa-star-o"></i></a>
                            <a href="javascript:void(0);" class="delete"><i class="fa fa-trash"></i></a>
                        </div>
                    </div>
                    <div class="note-detail">
                        <span>Meeting with client for new project.</span>
                    </div>
                </div>
                <div class="card note-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="font-10 text-muted">12 Apr 2020</span>
                        </div>
                        <div>
                            <a href="javascript:void(0);" class="star"><i class="fa fa-star-o"></i></a>
                            <a href="javascript:void(0);" class="delete"><i class="fa fa-trash"></i></a>
                        </div>
                    </div>
                    <div class="note-detail">
                        <span>making this the first true generator on the Internet</span>
                    </div>
                </div>
                <div class="card note-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="font-10 text-muted">12 Apr 2020</span>
                        </div>
                        <div>
                            <a href="javascript:void(0);" class="star"><i class="fa fa-star-o"></i></a>
                            <a href="javascript:void(0);" class="delete"><i class="fa fa-trash"></i></a>
                        </div>
                    </div>
                    <div class="note-detail">
                        <span>it look like readable English. Many desktop publishing</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Main body part  -->
        <div id="main-content">
            <div class="container-fluid">
                <!-- Page header section  -->
                <div class="block-header">
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <h1>Hi, Welcomeback!</h1>
                            <span>JustDo Add Doctors,</span>
                        </div>
                        <div class="col-lg-8 col-md-12 col-sm-12 text-lg-right">
                            <div class="d-flex align-items-center justify-content-lg-end mt-4 mt-lg-0 flex-wrap vivify pullUp delay-550">
                                <div class="mb-3 mb-xl-0">
                                    <a href="#" class="btn btn-dark">Submit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="card">
                            <div class="body">
                                <div class="row clearfix">
                                    <div class="col-sm-6">
                                        <div class="form-group c_form_group">
                                            <label>First Name <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value="">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group c_form_group">
                                            <label>Last Name <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value="">
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-sm-3">
                                        <div class="form-group c_form_group">
                                            <label>Date of Birth <span class="text-danger">*</span></label>
                                            <input type="text" data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group c_form_group">
                                            <label>Gender <span class="text-danger">*</span></label>
                                            <select class="form-control show-tick">
                                                <option value="">- Gender -</option>
                                                <option value="10">Male</option>
                                                <option value="20">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group c_form_group">
                                            <label>Speciality <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value="">
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group c_form_group">
                                            <label>Phone <span class="text-danger">*</span></label>
                                            <input class="form-control" type="number" value="">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group c_form_group">
                                            <label>Enter Your Email <span class="text-danger">*</span></label>
                                            <input class="form-control" type="email" value="">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group c_form_group">
                                            <label>Website URL <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value="">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <input type="file" class="dropify">
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group mt-3">
                                            <textarea rows="4" class="form-control no-resize" placeholder="Please type what you want..."></textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <button type="submit" class="btn btn-outline-secondary">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="header">
                                <h2>Doctor's Account Information</h3>
                            </div>
                            <div class="body">
                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <div class="form-group c_form_group">
                                            <label>User Name <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value="">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group c_form_group">
                                            <label>Password <span class="text-danger">*</span></label>
                                            <input class="form-control" type="password" value="">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group c_form_group">
                                            <label>Confirm Password <span class="text-danger">*</span></label>
                                            <input class="form-control" type="password" value="">
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <button type="submit" class="btn btn-outline-secondary">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="header">
                                <h2>Doctor Social Media Info</h3>
                            </div>
                            <div class="body">
                                <div class="row clearfix">
                                    <div class="col-md-6">
                                        <div class="form-group c_form_group">
                                            <label>Facebook</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-facebook"></i></span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group c_form_group">
                                            <label>Twitter</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-twitter"></i></span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group c_form_group">
                                            <label>Linkedin</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-linkedin"></i></span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group c_form_group">
                                            <label>Instagram</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-instagram"></i></span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <button type="submit" class="btn btn-outline-secondary">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>

    <script src="{{ asset('js/app.js') }}" defer></script>

</body>
</html>
