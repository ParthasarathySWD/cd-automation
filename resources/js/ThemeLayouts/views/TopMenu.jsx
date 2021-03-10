import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

/**
 * TopMenu Component
 */
function TopMenu(props) {

   return (  

         
        <nav className="top-nav">
            <ul>
                <li>
                    <Link to={'/dashboard'} className="top-menu ">
                        <div className="top-menu__icon"> <i data-feather="box"></i> </div>
                        <div className="top-menu__title"> Dashboard <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                    </Link>

                </li>
                <li>
                    <Link to={'/login'} className="top-menu">
                        <div className="top-menu__icon"> <i data-feather="box"></i> </div>
                        <div className="top-menu__title"> Login <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                    </Link>

                </li>
                <li>
                    <Link to={'/orderentry'} className="top-menu">
                        <div className="top-menu__icon"> <i data-feather="box"></i> </div>
                        <div className="top-menu__title"> Order Entry <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                    </Link>

                </li>
                <li>
                    <Link to={'/myorders'} className="top-menu top-menu--active">
                        <div className="top-menu__icon"> <i data-feather="box"></i> </div>
                        <div className="top-menu__title"> My Orders <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                    </Link>
                </li>
                <li>
                    <Link to={'/cddetails'} className="top-menu">
                        <div className="top-menu__icon"> <i data-feather="box"></i> </div>
                        <div className="top-menu__title"> CD Details <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                    </Link>
                </li>
                <li>
                    <a href="javascript:;" className="top-menu">
                        <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                        <div className="top-menu__title"> Setup <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                    </a>
                    <ul className="">
                       
                        
                        <li>
                            <Link to={'/allusers'} className="top-menu">
                                <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="top-menu__title"> Users </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/allclients'} className="top-menu">
                                <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="top-menu__title"> Clients </div>
                            </Link>
                        </li>
                       
                    </ul>
                </li>
            </ul>
        </nav>

      );
}

export default TopMenu;