import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MobileMenu from './views/MobileMenu';
import TopBar from './views/TopBar';
import TopMenu from './views/TopMenu';
import Routes from './Routes';

class Main extends React.Component {


   render() {
      return (
        <Router>
        <div>
            
              <MobileMenu/>
              <TopBar/>
              <TopMenu/>
            
            
            
        {/** BEGIN: Content **/}
        <div class="wrapper wrapper--top-nav">
            <div class="wrapper-box">
                {/** BEGIN: Content **/}
                <div class="content">
              
                  <Routes/>
                
            </div>
            </div>
        </div>

        </div>
        </Router>
      );
    }
}
export default Main;