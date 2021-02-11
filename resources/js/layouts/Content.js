import React from 'react'

class Content extends React.Component {
   render() {
      return (
         <div className="main col-8 h-100 py-3">
            <div className="row justify-content-center">
                <div className="theme-cyan">
    
                  <div className="page-loader-wrapper"></div>
                  
                  
                  <div className="themesetting"></div>
                  
                  
                  <div className="overlay"></div>
                  
                  <div id="wrapper">
                  
                      
                      <nav className="navbar navbar-fixed-top"></nav>
                  
                     
                      <div id="left-sidebar" className="sidebar"></div>
                      
                      
                      <div id="rightbar" className="rightbar"></div>
                  
                      
                      <div className="sticky-note"></div>
                  
                      
                      <div id="main-content">
                          <div className="container-fluid">
                              <div className="block-header"></div>
                              <div className="row clearfix"></div>
                          </div>
                      </div>
                      
                  </div>
              </div>
            </div>
         </div>
      );
   }
}
export default Content;