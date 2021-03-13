import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useHistory, NavLink } from 'react-router-dom';

/**
 * TopMenu Component
 */
function TopMenu(props) {

   return (  

         
        <nav className="top-nav">
            <ul>
                <li>
                    <NavLink to={'/dashboard'} className="top-menu " activeClassName="top-menu--active">
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
                        <div className="top-menu__title"> Order Entry <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                    </NavLink>

                </li>
                <li>
                    <NavLink to={'/myorders'} className="top-menu" activeClassName="top-menu--active">
                        <div className="top-menu__title"> My Orders <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
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
                <li>
                    
                    <a className="top-menu">
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
                </li>
            
            </ul>
        </nav>

      );
}

export default TopMenu;
