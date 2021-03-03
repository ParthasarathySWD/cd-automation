import React from 'react'
import { Link } from 'react-router-dom';
import './CDDetails.css';
function CDTab() {
    return (
        <>
           <div className="col-lg-12 col-md-12 col-sm-12">
                <ul className="nav nav-tabs3">
                    <li className="nav-item"><Link to="/CDdetails" className="nav-link"  >Page 1</Link></li>
                    
                    <li className="nav-item" ><Link to="/CDsecondpage" className="nav-link">Page 2</Link></li>
                    <li className="nav-item"><Link to="/CDthirdpage" className="nav-link" >Page 3</Link></li>
                    <li className="nav-item"><Link to="/CDfourthpage" className="nav-link" >Page 4</Link></li>
                    <li className="nav-item"><Link to="/CDfifthpage" className="nav-link" >Page 5</Link></li>
                </ul>
            </div> 
        </>
    )
}

export default CDTab
