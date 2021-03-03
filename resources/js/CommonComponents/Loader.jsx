import React from 'react';

function Loader(props) {
    return (
            <div className="page-loader-wrapper" style={{backgroundColor: '#999'}} >
                <div className="loader">
                    <div className="mt-3"><img src="assets/images/icon.svg" width="40" height="40" alt="Mooli"/></div>
                    <p>Please wait...</p>
                </div>
            </div>
    );
}

export default Loader;