import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../store/store.js';
import { useToasts } from 'react-toast-notifications';
import Button from 'react-bootstrap/Button';
// import './stylecddetails.css';
// import CDTab from './CDTab.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink
} from "react-router-dom";

/* Import CD Modules */
// import CDDetails from "./CDDetails.jsx";


function CDPages(props) {
      let { path, url } = useRouteMatch();

    return (
        <>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <ul className="nav nav-tabs3">
                    <NavLink to={`${url}/FirstPage`}>Page 1</NavLink>
                    <NavLink to={`${url}/SecondPage`}>Page 2</NavLink>
                    <NavLink to={`${url}/ThirdPage`}>Page 3</NavLink>
                    <NavLink to={`${url}/FourthPage`}>Page 4</NavLink>
                    <NavLink to={`${url}/FifthPage`}>Page 5</NavLink>
                </ul>
            </div> 
        
            <Switch>
                <Route exact path={path}>
                <h3>Please select a topic.</h3>
                </Route>
                <Route exact path={`${path}/FirstPage`}>
                    <h1>First Page</h1>
                </Route>
                
                <Route>
                    <h1>First Page</h1>
                </Route>

            </Switch>
        </>
    );
}

export default CDPages;