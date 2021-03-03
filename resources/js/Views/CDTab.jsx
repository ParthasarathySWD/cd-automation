import React from 'react'
import { NavLink } from 'react-router-dom';
import './CDDetails.css';
function CDTab() {
    return (
        <>
           <div className="col-lg-12 col-md-12 col-sm-12">
                <ul className="nav nav-tabs3">
                    <li className="nav-item"><NavLink to="/CDdetails" className="nav-link"  >Page 1</NavLink></li>
                    
                    <li className="nav-item" ><NavLink to="/CDsecondpage" className="nav-link">Page 2</NavLink></li>
                    <li className="nav-item"><NavLink to="/CDthirdpage" className="nav-link" >Page 3</NavLink></li>
                    <li className="nav-item"><NavLink to="/CDfourthpage" className="nav-link" >Page 4</NavLink></li>
                    <li className="nav-item"><NavLink to="/CDfifthpage" className="nav-link" >Page 5</NavLink></li>
                </ul>
            </div> 
        </>
    )
}

export default CDTab
