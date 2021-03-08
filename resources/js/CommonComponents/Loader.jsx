import React from 'react';
import logo from '../../img/icon.svg';


function Loader(props) {
    return (
            <div className="page-loader-wrapper" style={{backgroundColor: '#a9aed8'}} >
                <div className="loader">
                    <div className="mt-3"><img src={logo} width="40" height="40" alt="Get CD-Now"/></div>
                    <p>Please wait...</p>
                </div>
            </div>
    );
}

export default Loader;