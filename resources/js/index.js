import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

import LoginRoutes from './LoginRoutes';
import auth from './repository/auth';

import Header from './ThemeLayouts/Header';
import LeftSideBar from './ThemeLayouts/LeftSideBar';
import RightSideBar from './ThemeLayouts/RightSideBar';
import Footer from './ThemeLayouts/Footer';
import ThemeSetting from './ThemeLayouts/ThemeSetting';
import StickyNote from './ThemeLayouts/StickyNote';
import Routes from './Routes';
import jquery_init from './jquery_init';

import { SignIn } from './store/action';
import store from './store/store.js';


function App(props) {

    
    const isAuthenticated = useSelector(state => state.IsAuthenticated);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        // dispatch(SignIn())
    });


    function checkAuth(){
        // auth.login();
    }

    if (! isAuthenticated ) {
        return (<LoginRoutes checkAuth={checkAuth} />);            
    }
    else{
        return (
                <Main />
            );
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
        
        
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
            , document.getElementById('body')
            , function () {
            
        });
