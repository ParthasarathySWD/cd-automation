import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginPage from './components/LoginComponents/LoginPage';
import auth from './repository/auth';

import Header from './ThemeLayouts/Header';
import LeftSideBar from './ThemeLayouts/LeftSideBar';
import RightSideBar from './ThemeLayouts/RightSideBar';
import Footer from './ThemeLayouts/Footer';
import ThemeSetting from './ThemeLayouts/ThemeSetting';
import StickyNote from './ThemeLayouts/StickyNote';
import Routes from './Routes';
import jquery_init from './jquery_init';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {'isauthenticated': false};
        this.checkAuth = this.checkAuth.bind(this);
    }
    componentDidMount() {
        this.setState({ 'isauthenticated': auth.isAuthenticated() });
    }

    checkAuth(Authenticated){
        this.setState({'isauthenticated': Authenticated});
    }
    render() {
        if (! this.state.isauthenticated ) {
            return (<LoginPage checkAuth={this.checkAuth} />);            
        }
        else{
            return (
                <Main />
                );
            }
        }
    }
export default App;

class Main extends Component {
    

    componentDidMount(){
        jquery_init.init();
    }
    render(){

        return (
            <div>
            
            <div className="themesetting">
            <ThemeSetting />
            </div>
            
            
            <div className="overlay"></div>
            
            <div id="wrapper">
            
            
            <nav className="navbar navbar-fixed-top">
            <Header />
            </nav>
            
            
            <div id="left-sidebar" className="sidebar light_active">
            <LeftSideBar />
            </div>
            
            
            <div id="rightbar" className="rightbar">
            <RightSideBar />
            </div>
            
            
            <div className="sticky-note">
            <StickyNote />
            </div>
            
            
            <div id="main-content">
            <div className="container-fluid" id="ContentBody">
            <Routes />
            </div>
            </div>
            
            </div>
            </div>
            
            );
        }
        }
        
        
        ReactDOM.render(<Router><App /></Router>, document.getElementById('body'), function () {
            
});
