import React from 'react';
import auth from '../repository/auth';
import * as Icon from 'react-feather';
import { useSelector } from "react-redux";

import { Router, Route, Link, browserHistory, IndexRoute, useHistory ,NavLink  } from 'react-router-dom';

function TopBar(props) {
      const ProfileDetails = useSelector((state) => state.Profile);

   return (  
        <>
        <div className="top-bar-boxed border-b border-theme-2 -mt-10 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-12">
            <div className="h-full flex items-center">
                
                <a href="" className="-intro-x hidden md:flex">
                    <img alt="Rubick Tailwind HTML Admin Template" className="w-6" src="images/logo.svg" />
                    <span className="text-white text-lg ml-3"> Get<span className="font-medium">CDNow</span> </span>
                </a>
                
                
                <div className="-intro-x breadcrumb mr-auto"> 
        <nav className="top-nav">
            <ul>
                <li>
                    <NavLink to={'/dashboard'} className="top-menu " activeClassName="top-menu--active">
                        <div class="top-menu__icon"> <Icon.Home className="w-4 h-4" /></div>
                        <div className="top-menu__title"> Dashboard <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                    </NavLink>

                </li>
                {/* <li>
                    <NavLink to={'/login'} className="top-menu">
                        <div className="top-menu__title"> Login <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                    </NavLink>

                </li> */}
                <li>
                    <NavLink to={'/orderentry'} className="top-menu" activeClassName="top-menu--active">
                        <div class="top-menu__icon"> <Icon.Edit3 className="w-4 h-4" /></div>
                        <div className="top-menu__title"> Order Entry </div>
                    </NavLink>

                </li>
                <li>
                    <NavLink to={'/myorders'} className="top-menu" activeClassName="top-menu--active">
                        <div class="top-menu__icon"> <Icon.Layers className="w-4 h-4" /></div>
                        <div className="top-menu__title"> My Orders </div>
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to={'/cddetails'} className="top-menu">
                        <div className="top-menu__title"> CD Details <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                    </NavLink>
                </li> */}
                {/* <li>
                    <Link to={'/form'} className="top-menu top-menu--active">
                        <div className="top-menu__title"> Form <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                    </Link>
                </li> */}
                {/*
                <li>
                    
                    <a className="top-menu">
                        <div class="top-menu__icon"> <Icon.Layers className="w-4 h-4" /></div>
                        <div className="top-menu__title"> Admin <i data-feather="chevron-down" className="top-menu__sub-icon"></i> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down top-menu__sub-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                    </a>
                    <ul className="">
                       
                        
                        <li>
                            <NavLink to={'/allusers'} className="top-menu">
                                <div className="top-menu__title"> Users </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/allclients'} className="top-menu">
                                <div className="top-menu__title"> Clients </div>
                            </NavLink>
                        </li>
                       
                    </ul>
                </li>*/}
                <li>
                    <a class="top-menu">
                        <div class="top-menu__icon"> <Icon.Grid className="w-4 h-4" /> </div>
                        <div class="top-menu__title"> Admin <Icon.ChevronDown className="w-4 h-4 top-menu__sub-icon" /> </div>
                    </a>
                    <ul class="">
                        <li>
                            <NavLink to={'/allusers'} class="top-menu">
                                <div class="top-menu__icon"> <Icon.Users className="w-4 h-4" /> </div>
                                <div class="top-menu__title"> Users </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/allclients'} class="top-menu">
                                <div class="top-menu__icon"> <Icon.Users className="w-4 h-4" /> </div>
                                <div class="top-menu__title"> Clients </div>
                            </NavLink>
                        </li>
                    </ul>
                </li>
            
            </ul>
        </nav>
                 </div>
                
                
                <div className="intro-x relative mr-3 sm:mr-6">
                    <div className="search hidden sm:block">
                        <input type="text" className="search__input form-control form-control-sm dark:bg-dark-1 border-transparent placeholder-theme-8" placeholder="Search..." />
                        <i data-feather="search" className="search__icon dark:text-gray-300"></i> 
                    </div>
                    <a className="notification sm:hidden" href=""> <i data-feather="search" className="notification__icon dark:text-gray-300"></i> </a>
                    <div className="search-result">
                        <div className="search-result__content">
                            <div className="search-result__content__title">Pages</div>
                            <div className="mb-5">
                                <a href="" className="flex items-center">
                                    <div className="w-8 h-8 bg-theme-29 text-theme-10 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="inbox"></i> </div>
                                    <div className="ml-3">Mail Settings</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 bg-theme-30 text-theme-24 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="users"></i> </div>
                                    <div className="ml-3">Users & Permissions</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 bg-theme-31 text-theme-26 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="credit-card"></i> </div>
                                    <div className="ml-3">Transactions Report</div>
                                </a>
                            </div>
                            <div className="search-result__content__title">Users</div>
                            <div className="mb-5">
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/profile-11.jpg" />
                                    </div>
                                    <div className="ml-3">Tom Cruise</div>
                                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">tomcruise@left4code.com</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/profile-7.jpg" />
                                    </div>
                                    <div className="ml-3">Tom Cruise</div>
                                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">tomcruise@left4code.com</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/profile-13.jpg" />
                                    </div>
                                    <div className="ml-3">Kevin Spacey</div>
                                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">kevinspacey@left4code.com</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/profile-14.jpg" />
                                    </div>
                                    <div className="ml-3">Al Pacino</div>
                                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">alpacino@left4code.com</div>
                                </a>
                            </div>
                            <div className="search-result__content__title">Products</div>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/preview-9.jpg" />
                                </div>
                                <div className="ml-3">Sony Master Series A9G</div>
                                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Electronic</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/preview-6.jpg" />
                                </div>
                                <div className="ml-3">Sony Master Series A9G</div>
                                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Electronic</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/preview-15.jpg" />
                                </div>
                                <div className="ml-3">Oppo Find X2 Pro</div>
                                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Smartphone &amp; Tablet</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/preview-4.jpg" />
                                </div>
                                <div className="ml-3">Sony A7 III</div>
                                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Photography</div>
                            </a>
                        </div>
                    </div>
                </div>
                
                
                <div className="intro-x dropdown mr-4 sm:mr-6">
                    <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false"> <Icon.Bell className="notification__icon dark:text-gray-300"/> </div>
                    <div className="notification-content pt-2 dropdown-menu">
                        <div className="notification-content__box dropdown-menu__content box dark:bg-dark-6">
                            <div className="notification-content__title">Notifications</div>
                            <div className="cursor-pointer relative flex items-center ">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/profile-11.jpg" />
                                    <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="javascript:;" className="font-medium truncate mr-5">Tom Cruise</a> 
                                        <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">05:09 AM</div>
                                    </div>
                                    <div className="w-full truncate text-gray-600 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/profile-7.jpg" />
                                    <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="javascript:;" className="font-medium truncate mr-5">Tom Cruise</a> 
                                        <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">05:09 AM</div>
                                    </div>
                                    <div className="w-full truncate text-gray-600 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/profile-13.jpg" />
                                    <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="javascript:;" className="font-medium truncate mr-5">Kevin Spacey</a> 
                                        <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div className="w-full truncate text-gray-600 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/profile-14.jpg" />
                                    <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="javascript:;" className="font-medium truncate mr-5">Al Pacino</a> 
                                        <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">05:09 AM</div>
                                    </div>
                                    <div className="w-full truncate text-gray-600 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="images/profile-13.jpg" />
                                    <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="javascript:;" className="font-medium truncate mr-5">Hugh Jackman</a> 
                                        <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div className="w-full truncate text-gray-600 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="intro-x dropdown w-8 h-8">
                    <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110" role="button" aria-expanded="false">
                        <img alt="Rubick Tailwind HTML Admin Template" src="images/profile-7.jpg" />
                    </div>
                    <div className="dropdown-menu w-56">
                        <div className="dropdown-menu__content box bg-theme-11 dark:bg-dark-6 text-white">
                            <div className="p-4 border-b border-theme-12 dark:border-dark-3">
                                <div className="font-medium">{ProfileDetails.UserName}</div>
                                <div className="text-xs text-theme-13 mt-0.5 dark:text-gray-600">{ProfileDetails.RoleName}</div>
                            </div>
                            <div className="p-2">
                                <Link to={'/profile'} className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <Icon.User className="w-4 h-4 mr-2"/> Profile </Link>
                                <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="edit" className="w-4 h-4 mr-2"></i> Add Account </a>
                                <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="lock" className="w-4 h-4 mr-2"></i> Reset Password </a>
                                <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="help-circle" className="w-4 h-4 mr-2"></i> Help </a>
                            </div>
                            <div className="p-2 border-t border-theme-12 dark:border-dark-3">
                                <a onClick={() => { auth.logout(function(){}); }} className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="toggle-right" className="w-4 h-4 mr-2"></i> Logout </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        </>
      );
}

export default TopBar;