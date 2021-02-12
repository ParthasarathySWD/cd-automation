import React from 'react'

import Header from './layouts/Header';
import LeftSideBar from './layouts/LeftSideBar';
import RightSideBar from './layouts/RightSideBar';
import Footer from './layouts/Footer';

class Content extends React.Component {
   render() {
      return (
         
          <div className="theme-green">            
            
            <div className="themesetting"></div>
            
            
            <div className="overlay"></div>
            
            <div id="wrapper">
              
              
              <nav className="navbar navbar-fixed-top">
                <Header/>
              </nav>
                
                
              <div id="left-sidebar" className="sidebar">
                <LeftSideBar/>
              </div>
                
                
              <div id="rightbar" className="rightbar">
                <RightSideBar/>
              </div>
                
                
              <div className="sticky-note"></div>

                
              <div id="main-content">
                <div className="container-fluid">
                  <div className="block-header"></div>
                  <div className="row clearfix"></div>
                </div>
              </div>
                
            </div>
          </div>
      );
   }
}
export default Content;