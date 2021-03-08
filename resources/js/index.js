import React, { Component, useRef, useState } from 'react';
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

import { SignIn, setUserDetails } from './store/action';
import store from './store/store.js';
import { checkUserAuthentication } from "./store/localstorage";
import { ToastProvider } from 'react-toast-notifications';
import LoadingBar from 'react-top-loading-bar'
import {fetchProfileData} from './repository/App';
import Loader from "./CommonComponents/Loader";

function App(props) {

    
    const isAuthenticated = useSelector(state => state.IsAuthenticated);

    useEffect(()=>{
        checkUserAuthentication();
    }, []);



    if (! isAuthenticated ) {
        return (<LoginRoutes />);            
    }
    else{

        return (
            <Main />
        );
    }
}
export default App;

function Main() {
    
    const ref = useRef(null)
    const [user, setUser] = useState({});
    const dispatch = useDispatch();

    useEffect( ()=> {
        
        if (user && typeof user == 'object' && Object.keys(user).length > 0) {

            
            // ref.current.continuousStart();
            ref.current.complete();
            jquery_init.init();
            dispatch(setUserDetails(user));
        }
        
    }, [user]);
    
    useEffect( ()=> {
        
        
        const promiseResource = fetchProfileData();
        promiseResource.then((res)=>{
            setUser(res.user.data);
        })

    }, []);



        if (Object.keys(user).length == 0) {
            return <Loader />
        }
        else{

            return (
                <>
                    <div>
                    
                    {/* <div className="themesetting">
                    <ThemeSetting />
                    </div>
                     */}
                    
                    <div className="overlay"></div>
                    
                    <div id="wrapper">
                    
                    
                    <nav className="navbar navbar-fixed-top">
                    <Header />
                    <LoadingBar color="#f11946" ref={ref} shadow={true} />
                    </nav>
                    
                    
                    <div id="left-sidebar" className="sidebar light_active">
                    <LeftSideBar />
                    </div>
                    
                    
                    <div id="rightbar" className="rightbar">
                    <RightSideBar />
                    </div>
                    
                    
                    {/* <div className="sticky-note">
                    <StickyNote />
                    </div> */}
                    
                    
                    <div id="main-content">
                    <div className="container-fluid" id="ContentBody">
                    <Routes />
                    </div>
                    </div>
                    
                    </div>
                    </div>
                </>
                );
            }
        

        }

        
        ReactDOM.render(
            <Provider store={store}>
                <ToastProvider>
                <Router>
                    <App />
                </Router>
                </ToastProvider>
            </Provider>
            , document.getElementById('body')
            , function () {
            
        });
