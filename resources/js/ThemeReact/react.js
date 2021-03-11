import React, { Component, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {useEffect} from 'react';

import LoginRoutes from '../ThemeLayouts/LoginRoutes';
import auth from '../ThemeLayouts/repository/auth';

import Routes from '../ThemeLayouts/Routes';
import jquery_init from '../ThemeLayouts/jquery_init';

import { SignIn, setUserDetails } from '../ThemeLayouts/store/action';
import store from '../ThemeLayouts/store/store';
import { checkUserAuthentication } from "../ThemeLayouts/store/localstorage";
import { ToastProvider } from 'react-toast-notifications';
import {fetchProfileData} from '../ThemeLayouts/repository/App';



import ThemeReact from '../ThemeLayouts/Main';

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
            <ThemeReact />
        );
    }
}
export default App;

ReactDOM.render(
	<Provider store={store}>
		<ToastProvider>
		<Router>
		<App />
		</Router>
		</ToastProvider>
	</Provider>
	, document.getElementById('ReactBody')
	, function () {

});